import React from "react";
import { Box, Text } from "..";
import Divider from "../Divider";

const DeliveryItem = ({ label, value }) => {
  return (
    <Box display="flex" flexDirection="column" gap="20px">
      <Divider width="80px" thickness="1px" backgroundColor="#D8D8D8" />
      <Box display="flex" flexDirection="column" gap="5px">
        <Text fontSize="14px" fontWeight="400">
          {label}
        </Text>
        <Text fontSize="16px" fontWeight="500" color="#1BD97B">
          {value}
        </Text>
      </Box>
    </Box>
  );
};

export default DeliveryItem;
