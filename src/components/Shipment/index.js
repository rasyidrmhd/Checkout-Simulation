import React from "react";
import { Box, ShipmentBox, ShipmentContainer, ShipmentContent } from "..";
import BackNavigation from "../BackNavigation";
import StyledHeader from "../StyledHeader";
import ShipmentCard from "./ShipmentCard";

const Shipment = ({ field, setValue, setStep }) => {
  return (
    <ShipmentBox display="flex" flexDirection="column" gap="30px">
      <BackNavigation onClick={() => setStep(1)}>Back to delivery</BackNavigation>
      <ShipmentContent display="flex" flexDirection="column">
        <ShipmentContainer display="flex" flexDirection="column">
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
        </ShipmentContainer>
        <ShipmentContainer display="flex" flexDirection="column" gap="30px">
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
        </ShipmentContainer>
      </ShipmentContent>
    </ShipmentBox>
  );
};

export default Shipment;
