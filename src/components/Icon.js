import React from "react";
import { Text } from ".";

const Icon = ({ size, weight, color, icon }) => {
  return (
    <Text className={`material-icons`} fontSize={size} fontWeight={weight} color={color}>
      {icon}
    </Text>
  );
};

export default Icon;
