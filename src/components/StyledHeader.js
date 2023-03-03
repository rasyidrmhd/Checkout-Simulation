import React from "react";
import { Box, HiddenBox, StyledHeaderText, Text } from ".";

const StyledHeader = ({ children }) => {
  return (
    <Box>
      <StyledHeaderText>{children}</StyledHeaderText>
      <HiddenBox displayIn="large" height="8px" width="300px" backgroundColor="#EEEEEE" margin="-13px 0px 0px" />
    </Box>
  );
};

export default StyledHeader;
