import React from "react";
import { Text, Box } from "./components";
import Icon from "./components/Icon";
import Stepper from "./components/Stepper";

function App() {
  return (
    <Box position="relative" backgroundColor="#fffae6" padding="50px 55px" minHeight="100vh" display="flex" justifyContent="center">
      <Stepper />
      <Box backgroundColor="white" borderRadius="4px" boxShadow="2px 10px 20px rgba(255, 138, 0, 0.1)" width="100%" height="550px" display="flex" flexDirection="column" gap="30px" padding="30px 40px">
        <Box display="flex" gap="10px" alignItems="center">
          <Icon icon="arrow_back" weight="400" size="18px" />
          <Text weight="500" size="14px">
            Back to cart
          </Text>
        </Box>
        <Box border="1px solid red"></Box>
      </Box>
    </Box>
  );
}

export default App;
