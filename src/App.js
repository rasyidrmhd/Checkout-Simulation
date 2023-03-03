import React from "react";
import { useForm } from "react-hook-form";
import { AppBox, Box, WhiteBox } from "./components";
import Delivery from "./components/delivery";
import Finish from "./components/finish";
import Shipment from "./components/shipment";
import Stepper from "./components/Stepper";
import Summary from "./components/summary";
import debounce from "lodash.debounce";

function App() {
  const [step, setStep] = React.useState(1);
  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue,
    watch,
    reset,
    clearErrors,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      phone: "",
      address: "",
      shipment: "GO-SEND",
      payment: "e-Wallet",
      dropshipEnable: false,
      dropshipName: "",
      dropshipPhone: "",
      total: 500000,
      orderId: "",
    },
  });
  const field = watch();

  const onSubmit = (data) => {
    setStep(step + 1);
  };

  const save = React.useCallback(
    debounce((field, step) => {
      localStorage.setItem("checkout_data", JSON.stringify({ ...field, step }));
    }, 2000),
    []
  );

  React.useEffect(() => {
    save(field, step);
  }, [field, step]);

  React.useEffect(() => {
    if (localStorage.getItem("checkout_data")) {
      const data = JSON.parse(localStorage.getItem("checkout_data"));
      Object.keys(data).forEach((field) => {
        if (field !== "step") {
          if (field === "shipment") {
            const shipment = ["GO-SEND", "JNE", "Personal Courier"];
            setValue("shipment", !shipment.includes(data[field]) ? "GO-SEND" : data[field]);
            return;
          }

          if (field === "payment") {
            const payment = ["e-Wallet", "Bank Transfer", "Virtual Account"];
            setValue("payment", !payment.includes(data[field]) ? "e-Wallet" : data[field]);
            return;
          }

          setValue(field, data[field]);
        }
      });

      const step1Field = ["email", "phone", "address", "dropshipEnable", "dropshipName", "dropshipPhone"];
      if (![1, 2, 3].includes(data["step"]) || !step1Field.every((field) => Object.keys(data).includes(field))) {
        setStep(1);
      } else {
        const required = step1Field.slice(0, 3);
        const dropship = step1Field.slice(4, 2);
        if (required.some((field) => data[field] === "")) {
          setStep(1);
        } else if (data["dropshipEnable"]) {
          if (dropship.some((field) => data[field] === "")) {
            setStep(1);
          }
        } else {
          setStep(data["step"]);
        }
      }
    }
  }, []);

  return (
    <AppBox display="flex" justifyContent="center">
      <Stepper step={step} />
      <WhiteBox as="form" onSubmit={handleSubmit(onSubmit)} backgroundColor="white" borderRadius="4px" boxShadow="2px 10px 20px rgba(255, 138, 0, 0.1)" display="flex">
        {(() => {
          switch (step) {
            case 1:
              return <Delivery field={field} register={register} setValue={setValue} setStep={setStep} errors={errors} clearErrors={clearErrors} />;
            case 2:
              return <Shipment field={field} setValue={setValue} setStep={setStep} />;
            default:
              return <Finish setStep={setStep} field={field} setValue={setValue} reset={reset} />;
          }
        })()}
        <Summary field={field} errors={errors} step={step} setValue={setValue} />
      </WhiteBox>
    </AppBox>
  );
}

export default App;
