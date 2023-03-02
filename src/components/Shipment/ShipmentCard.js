import React from "react";
import { Box, Text } from "..";
import Icon from "../Icon";

const ShipmentCard = ({ label, price, active }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="12px 15px"
      border={`${active ? "2px" : "1px"} solid ${active ? "#1BD97B" : "#CCCCCC"}`}
      backgroundColor={active ? "#1BD97B1A" : "white"}
      width="180px"
      cursor="pointer"
    >
      <Box display="flex" flexDirection="column" gap="2px">
        <Text fontWeight="500" fontSize={!price ? "16px" : "13px"} opacity={active ? "80%" : "60%"}>
          {label}
        </Text>
        <Text fontWeight="700" fontSize="16px" opacity={active ? "100%" : "60%"} color={active ? "#2D2A40" : "black"}>
          {price}
        </Text>
      </Box>
      {active && <Icon icon="check" weight="400" size="18px" color="#1BD97B" />}
    </Box>
  );
};

export default ShipmentCard;
