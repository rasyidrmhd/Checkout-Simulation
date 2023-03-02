import React from "react";
import { Box, Text } from ".";
import Icon from "./Icon";

const StepperGroup = ({ children, step, showArrow = true }) => {
  return (
    <Box display="flex" gap="20px" alignItems="center">
      <Box display="flex" gap="10px" alignItems="center">
        <Box width="30px" height="30px" display="flex" backgroundColor="#FFE4B8" borderRadius="100%" alignItems="center" justifyContent="center">
          <Text fontSize="16px" fontWeight="500" color="#FF8A00">
            {step}
          </Text>
        </Box>
        <Text fontSize="16px" fontWeight="500" color="#FF8A00">
          {children}
        </Text>
      </Box>
      {showArrow && <Icon icon="keyboard_arrow_right" size="24px" weight="400" color="#FF8A00" />}
    </Box>
  );
};

const Stepper = () => {
  return (
    <Box backgroundColor="#fffae6" padding="20px 40px" borderRadius="35px" display="flex" gap="20px" top="20px" position="absolute">
      {["Delivery", "Payment", "Finish"].map((text, idx) => (
        <StepperGroup step={idx + 1} key={idx} showArrow={idx !== 2}>
          {text}
        </StepperGroup>
      ))}
    </Box>
  );
};

export default Stepper;
