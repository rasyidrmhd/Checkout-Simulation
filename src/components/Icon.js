import React from "react";
import { Text } from ".";

const Icon = ({ size, weight, color, opacity, icon }) => {
  return (
    <Text className={`material-icons`} fontSize={size} fontWeight={weight} opacity={opacity} color={color}>
      {icon}
    </Text>
  );
};

export default Icon;
