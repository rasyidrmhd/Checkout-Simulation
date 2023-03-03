import React from "react";
import { SummaryPriceBox, Text } from "..";

const PriceItem = ({ children, price }) => {
  return (
    <SummaryPriceBox display="flex">
      <Text fontSize="14px" fontWeight="400" opacity="60%">
        {children}
      </Text>
      <Text fontSize="14px" fontWeight="700">
        {Number(price).toLocaleString("en-US")}
      </Text>
    </SummaryPriceBox>
  );
};

export default PriceItem;
