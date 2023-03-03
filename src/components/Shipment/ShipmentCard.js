import React from "react";
import { Box, Text } from "..";
import Icon from "../Icon";

const ShipmentCard = ({ label, price, active, setValue, type, field }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <Box
      display="flex"
      flexGrow="1"
      justifyContent="space-between"
      alignItems="center"
      padding="12px 15px"
      border={`${active ? "2px" : "1px"} solid ${active || hover ? "#1BD97B" : "#CCCCCC"}`}
      backgroundColor={active ? "#1BD97B1A" : "white"}
      width="180px"
      cursor="pointer"
      onMouseEnter={() => !active && setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        if (type === "shipment") {
          setValue("shipment", label);
          setValue("total", 500000 + price + (field.dropshipEnable ? 5900 : 0));
        }
        setValue(type, label);
      }}
    >
      <Box display="flex" flexDirection="column" gap="2px">
        <Text fontWeight="500" fontSize={!price ? "16px" : "13px"} opacity={active ? "80%" : "60%"}>
          {label}
        </Text>
        <Text fontWeight="700" fontSize="16px" opacity={active ? "100%" : "60%"} color={active ? "#2D2A40" : "black"}>
          {price.toLocaleString("en-US")} {label === "e-Wallet" && "left"}
        </Text>
      </Box>
      {active && <Icon icon="check" weight="400" size="18px" color="#1BD97B" />}
    </Box>
  );
};

export default ShipmentCard;
