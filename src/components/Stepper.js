import React from "react";
import { Box, StepperBox, Text } from ".";
import Icon from "./Icon";

const StepperGroup = ({ children, step, active, showArrow = true }) => {
  return (
    <Box display="flex" gap="20px" alignItems="center">
      <Box display="flex" gap="10px" alignItems="center">
        <Box width="30px" height="30px" display="flex" backgroundColor={active ? "#FF8A00" : "#FFE4B8"} borderRadius="100%" alignItems="center" justifyContent="center">
          <Text fontSize="16px" fontWeight="500" color={active ? "white" : "#FF8A00"}>
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

const Stepper = ({ step }) => {
  return (
    <StepperBox backgroundColor="#fffae6" borderRadius="35px" display="flex">
      {["Delivery", "Payment", "Finish"].map((text, idx) => (
        <StepperGroup step={idx + 1} key={idx} showArrow={idx !== 2} active={step >= idx + 1}>
          {text}
        </StepperGroup>
      ))}
    </StepperBox>
  );
};

export default Stepper;
