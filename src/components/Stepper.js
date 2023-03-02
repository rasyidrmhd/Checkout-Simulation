import React from "react";
import { Box, Text } from ".";

const StepperGroup = ({ step, text, showArrow = true }) => {
  return (
    <Box display="flex" gap="20px" alignItems="center">
      <Box display="flex" flexDirection="row" gap="10px" alignItems="center">
        <Box width="30px" height="30px" display="flex" backgroundColor="#FF8A00" borderRadius="100%" alignItems="center" justifyContent="center">
          <Text fontSize="16px" fontWeight="500" color="white">
            {step}
          </Text>
        </Box>
        <Text fontSize="16px" fontWeight="500" color="#FF8A00">
          {text}
        </Text>
      </Box>
      {showArrow && (
        <Text fontSize="24px" fontWeight="400">
          {">"}
        </Text>
      )}
    </Box>
  );
};

const Stepper = () => {
  return (
    <Box backgroundColor="#fffae6" padding="20px 40px" borderRadius="35px" display="flex" gap="20px" top="20px" width="fit-content" height="fit-content" position="absolute">
      <StepperGroup step={1} text="Delivery"></StepperGroup>
    </Box>
  );
};

export default Stepper;
