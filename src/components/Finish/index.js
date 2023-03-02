import React from "react";
import { Box, Text } from "..";
import BackNavigation from "../BackNavigation";
import StyledHeader from "../StyledHeader";

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
    <Box display="flex" height="100%" width="70%" justifyContent="center" alignItems="center">
      <Box display="flex" flexDirection="column" gap="60px">
        <Box display="flex" flexDirection="column" gap="30px">
          <StyledHeader>Thank you</StyledHeader>
          <Box display="flex" flexDirection="column" gap="10px">
            <Text fontSize="14px">Order ID : {field.orderId || orderId}</Text>
            <Text fontSize="14px" opacity="60%">
              Your order will be delivered today with GO-SEND
            </Text>
          </Box>
        </Box>
        <BackNavigation
          onClick={() => {
            setStep(1);
            localStorage.removeItem("checkout_data");
            reset();
          }}
        >
          Go to homepage
        </BackNavigation>
      </Box>
    </Box>
  );
};

export default Finish;
