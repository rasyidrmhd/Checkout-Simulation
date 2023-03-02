import React from "react";
import { Box } from ".";

const Divider = ({ backgroundColor, opacity, width = "100%", height = "100%", orientation = "horizontal", thickness = "1px" }) => {
  return <Box width={orientation === "horizontal" ? width : thickness} height={orientation === "horizontal" ? thickness : height} backgroundColor={backgroundColor} opacity={opacity} />;
};

export default Divider;
