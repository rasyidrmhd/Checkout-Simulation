import React from "react";
import { Box, Text } from "..";
import StyledHeader from "../StyledHeader";

const Delivery = () => {
  return (
    <Box display="flex" flexDirection="column" gap="30px" height="100%" width="70%" padding="0 40px 20px">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <StyledHeader>Delivery details</StyledHeader>
        <Text>Send as dropshipper</Text>
      </Box>
      <Box display="flex" border="1px solid black"></Box>
    </Box>
  );
};

export default Delivery;
