import React from "react";
import { Box, Text } from "..";

const PriceItem = ({ children, price }) => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Text fontSize="14px" fontWeight="400" opacity="60%">
        {children}
      </Text>
      <Text fontSize="14px" fontWeight="700">
        {Number(price).toLocaleString("en-US")}
      </Text>
    </Box>
  );
};

export default PriceItem;
