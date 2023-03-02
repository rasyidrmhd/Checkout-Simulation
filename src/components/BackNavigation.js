import React from "react";
import { Box, Text } from ".";
import Icon from "./Icon";

const BackNavigation = ({ children }) => {
  return (
    <Box display="flex" gap="10px" alignItems="center" cursor="pointer" width="fit-content">
      <Icon icon="arrow_back" weight="400" size="18px" opacity="60%" />
      <Text weight="500" size="14px" opacity="60%">
        {children}
      </Text>
    </Box>
  );
};

export default BackNavigation;
