import React from "react";
import { useForm } from "react-hook-form";
import { Text, Box, Form } from "./components";
import Delivery from "./components/Delivery";
import Divider from "./components/Divider";
import Finish from "./components/Finish";
import Icon from "./components/Icon";
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
      email: "acittsss",
      phone: "",
      address: "",
      shipment: "",
      payment: "",
      dropshipEnable: false,
      dropshipName: "",
      dropshipPhone: "",
      total: 500000,
    },
  });
  const field = watch();
  console.log(errors, "Errorsss");

  const onSubmit = (data) => {
    console.log(data, ">>>>");
  };

  return (
    <Box position="relative" backgroundColor="#fffae6" padding="50px 55px" minHeight="100vh" display="flex" justifyContent="center">
      <Stepper />
      <Form onSubmit={handleSubmit(onSubmit)} backgroundColor="white" borderRadius="4px" boxShadow="2px 10px 20px rgba(255, 138, 0, 0.1)" width="100%" display="flex">
        <Delivery register={register} setValue={setValue} />
        {/* <Shipment /> */}
        {/* <Finish /> */}
        <Summary field={field} errors={errors} />
      </Form>
    </Box>
  );
}

export default App;
