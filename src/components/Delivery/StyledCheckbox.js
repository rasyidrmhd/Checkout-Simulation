import React from "react";
import { HiddenBox, Box, Text } from "..";
import Icon from "../Icon";

const StyledCheckbox = ({ displayIn, enable, onClick }) => {
  return (
    <HiddenBox display="flex" displayIn={displayIn} alignItems="center" gap="10px" onClick={onClick} cursor="pointer">
      <Box display="flex" alignItems="center" justifyContent="center" width="20px" height="20px" border="2px solid #1BD97B">
        {enable && <Icon icon="check" weight="400" size="18px" color="#1BD97B" />}
      </Box>
      <Text color="#2D2A40" fontWeight="500" fontSize="14px" opacity="80%">
        Send as dropshipper
      </Text>
    </HiddenBox>
  );
};

export default StyledCheckbox;
