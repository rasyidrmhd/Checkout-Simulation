import React from "react";
import { Box, Text } from "..";
import BackNavigation from "../BackNavigation";
import Icon from "../Icon";
import StyledHeader from "../StyledHeader";

const Delivery = () => {
  return (
    <Box display="flex" flexDirection="column" gap="30px" height="100%" width="70%" padding="40px 40px 20px">
      <BackNavigation>Back to cart</BackNavigation>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <StyledHeader>Delivery details</StyledHeader>
        <Text>Send as dropshipper</Text>
      </Box>
      <Box display="flex" border="1px solid black"></Box>
    </Box>
  );
};

export default Delivery;
