import React from "react";
import { Box, Text } from ".";

const StyledHeader = ({ children }) => {
  return (
    <Box>
      <Text fontSize="36px" color="#FF8A00" fontFamily="montserrat" fontWeight="700">
        {children}
      </Text>
      <Box height="8px" width="300px" backgroundColor="#EEEEEE" margin="-13px 0px 0px" />
    </Box>
  );
};

export default StyledHeader;
