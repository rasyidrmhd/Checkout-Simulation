import React from "react";
import { Box, Button, Text } from "..";
import Divider from "../Divider";
import DeliveryItem from "./DeliveryItem";
import PriceItem from "./PriceItem";

const Summary = ({ field, errors, step, setStep }) => {
  return (
    <Box display="flex" height="100%" width="30%" padding="90px 0 0">
      <Divider orientation="vertical" height="calc(100% - 20px)" thickness="1px" backgroundColor="#FF8A00" opacity="20%" />
      <Box display="flex" flexDirection="column" height="100%" width="100%" padding="0 20px 20px" justifyContent="space-between">
        <Box display="flex" flexDirection="column" gap="10px">
          <Text fontSize="24px" color="#FF8A00" fontFamily="montserrat" fontWeight="700" lineHeight="44px">
            Summary
          </Text>
          <Text fontSize="14px" fontWeight="400" opacity="60%">
            10 items purchased
          </Text>
          <DeliveryItem label="Delivery estimation" value="today by GO-SEND" />
        </Box>
        <Box display="flex" flexDirection="column" gap="20px">
          <Box display="flex" flexDirection="column" gap="10px">
            <PriceItem label="Cost of goods" price="0" />
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Text fontSize="24px" color="#FF8A00" fontFamily="montserrat" fontWeight="700">
              Total
            </Text>
            <Text fontSize="24px" color="#FF8A00" fontFamily="montserrat" fontWeight="700">
              0
            </Text>
          </Box>
          <Button block={true}>Continue to Payment</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Summary;
