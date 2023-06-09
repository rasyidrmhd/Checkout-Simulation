import React from "react";
import { Box, FinishBox, FinishContainer, FinishContent, Text } from "..";
import BackNavigation from "../BackNavigation";
import StyledHeader from "../StyledHeader";
import { estimate } from "../summary";

const Finish = ({ setStep, field, setValue, reset }) => {
  const orderId = React.useMemo(() => {
    let result = "";
    const characters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 5) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }, []);

  React.useEffect(() => {
    if (!field.orderId) setValue("orderId", orderId);
  }, [orderId]);

  return (
    <FinishBox display="flex">
      <FinishContent display="flex">
        <FinishContainer display="flex" flexDirection="column" gap="30px">
          <StyledHeader>Thank you</StyledHeader>
          <Box display="flex" flexDirection="column" gap="10px">
            <Text fontSize="14px">Order ID : {field.orderId || orderId}</Text>
            <Text fontSize="14px" opacity="60%">
              Your order will be delivered {estimate[field.shipment]} with {field.shipment}
            </Text>
          </Box>
        </FinishContainer>
        <BackNavigation
          onClick={() => {
            setStep(1);
            localStorage.removeItem("checkout_data");
            reset();
          }}
        >
          Go to homepage
        </BackNavigation>
      </FinishContent>
    </FinishBox>
  );
};

export default Finish;
