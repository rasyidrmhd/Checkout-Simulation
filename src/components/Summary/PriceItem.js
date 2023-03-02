import React from "react";
import { Box, Text } from "..";

const PriceItem = ({ label, price }) => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Text fontSize="14px" fontWeight="400" opacity="60%">
        {label}
      </Text>
      <Text fontSize="14px" fontWeight="700">
        {price}
      </Text>
    </Box>
  );
};

export default PriceItem;
