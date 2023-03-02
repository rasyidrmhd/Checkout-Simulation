import React from "react";
import { useForm } from "react-hook-form";
import { Box, Form } from "./components";
import Delivery from "./components/Delivery";
import Finish from "./components/Finish";
import Shipment from "./components/Shipment";
import Stepper from "./components/Stepper";
import Summary from "./components/Summary";

function App() {
  const [step, setStep] = React.useState(1);
  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      email: "",
      phone: "",
      address: "",
      shipment: "GO-SEND",
      payment: "e-Wallet",
      dropshipEnable: true,
      dropshipName: "",
      dropshipPhone: "",
      total: 500000,
    },
  });
  const field = watch();

  const onSubmit = (data) => {
    console.log(data, ">>>>");
  };

  return (
    <Box position="relative" backgroundColor="#fffae6" padding="50px 55px" minHeight="100vh" display="flex" justifyContent="center">
      <Stepper step={step} />
      <Form onSubmit={handleSubmit(onSubmit)} backgroundColor="white" borderRadius="4px" boxShadow="2px 10px 20px rgba(255, 138, 0, 0.1)" width="100%" display="flex">
        {(() => {
          switch (step) {
            case 1:
              return <Delivery field={field} register={register} setValue={setValue} setStep={setStep} />;
            case 2:
              return <Shipment field={field} setValue={setValue} setStep={setStep} />;
            default:
              return <Finish setStep={setStep} />;
          }
        })()}
        <Summary field={field} errors={errors} step={step} setStep={setStep} setValue={setValue} />
      </Form>
    </Box>
  );
}

export default App;
