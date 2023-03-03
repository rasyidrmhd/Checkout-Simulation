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
          setValue(field, data[field]);
        } else {
          setStep(data["step"]);
        }
      });
    }
  }, []);

  return (
    <AppBox position="relative" backgroundColor="#fffae6" display="flex" justifyContent="center">
      <Stepper step={step} />
      <WhiteBox as="form" onSubmit={handleSubmit(onSubmit)} backgroundColor="white" borderRadius="4px" boxShadow="2px 10px 20px rgba(255, 138, 0, 0.1)" width="100%" height="100%" display="flex">
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
        <Summary field={field} errors={errors} step={step} setStep={setStep} setValue={setValue} />
      </WhiteBox>
    </AppBox>
  );
}

export default App;
