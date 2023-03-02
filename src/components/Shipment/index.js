import React from "react";
import { Box, Text } from "..";
import BackNavigation from "../BackNavigation";
import StyledHeader from "../StyledHeader";
import ShipmentCard from "./ShipmentCard";

const Shipment = ({ field, setValue }) => {
  return (
    <Box display="flex" flexDirection="column" gap="30px" height="100%" width="70%" padding="40px 40px 20px">
      <BackNavigation>Back to delivery</BackNavigation>
      <Box display="flex" flexDirection="column" gap="60px">
        <Box display="flex" flexDirection="column" gap="30px">
          <StyledHeader>Shipment</StyledHeader>
          <Box display="flex" gap="10px">
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
          <Box display="flex" gap="10px">
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
    </Box>
  );
};

export default Shipment;
