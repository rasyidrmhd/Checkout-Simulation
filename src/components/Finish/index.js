import React from "react";
import { Box, Text } from "..";
import BackNavigation from "../BackNavigation";
import StyledHeader from "../StyledHeader";

const Finish = () => {
  return (
    <Box display="flex" height="100%" width="70%" justifyContent="center" alignItems="center">
      <Box display="flex" flexDirection="column" gap="60px">
        <Box display="flex" flexDirection="column" gap="30px">
          <StyledHeader>Thank you</StyledHeader>
          <Box display="flex" flexDirection="column" gap="10px">
            <Text fontSize="14px">Order ID : XXKYB</Text>
            <Text fontSize="14px" opacity="60%">
              Your order will be delivered today with GO-SEND
            </Text>
          </Box>
        </Box>
        <BackNavigation>Go to homepage</BackNavigation>
      </Box>
    </Box>
  );
};

export default Finish;
