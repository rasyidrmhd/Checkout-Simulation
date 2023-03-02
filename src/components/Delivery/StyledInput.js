import React from "react";
import { Box, Text, Label } from "..";
import Icon from "../Icon";

const StyledInput = ({ children, field, error, label }) => {
  return (
    <Box position="relative">
      {(field.length > 0 || error) && (
        <Box position="absolute" top="21px" right="15px">
          <Icon icon={error ? "clear" : "check"} weight="400" size="18px" color={error ? "#FF8A00" : "#1BD97B"} />
        </Box>
      )}
      {children}
      <Label htmlFor={label.toLowerCase().replaceAll(" ", "")} position="absolute" fontSize={field.length > 0 ? "13px" : "16px"} top={field.length > 0 ? "12px" : "20px"} left="15px">
        <Text color={!error && field.length ? "#1BD97B" : error ? "#FF8A00" : "#cccccc"}>{label}</Text>
      </Label>
    </Box>
  );
};

export default StyledInput;
