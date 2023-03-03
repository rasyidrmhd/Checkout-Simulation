import React from "react";
import { Box, DeliveryBox, Text } from "..";
import BackNavigation from "../BackNavigation";
import StyledHeader from "../StyledHeader";
import ShipmentCard from "./ShipmentCard";

const Shipment = ({ field, setValue, setStep }) => {
  return (
    <DeliveryBox display="flex" flexDirection="column" gap="30px">
      <BackNavigation onClick={() => setStep(1)}>Back to delivery</BackNavigation>
      <Box display="flex" flexDirection="column" gap="60px">
        <Box display="flex" flexDirection="column" gap="30px">
          <StyledHeader>Shipment</StyledHeader>
          <Box display="flex" gap="10px" flexWrap="wrap">
            {[
              { label: "GO-SEND", price: 15000 },
              { label: "JNE", price: 9000 },
              { label: "Personal Courier", price: 29000 },
            ].map((option, idx) => (
              <ShipmentCard label={option.label} price={option.price} key={idx} active={option.label === field.shipment} setValue={setValue} type="shipment" field={field} />
            ))}
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" gap="30px">
          <StyledHeader>Payment</StyledHeader>
          <Box display="flex" gap="10px" flexWrap="wrap">
            {[
              { label: "e-Wallet", price: 1500000 },
              { label: "Bank Transfer", price: "" },
              { label: "Virtual Account", price: "" },
            ].map((option, idx) => (
              <ShipmentCard label={option.label} price={option.price} key={idx} active={option.label === field.payment} setValue={setValue} type="payment" field={field} />
            ))}
          </Box>
        </Box>
      </Box>
    </DeliveryBox>
  );
};

export default Shipment;
