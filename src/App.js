import React from "react";
import { Text, Box } from "./components";
import Delivery from "./components/Delivery";
import Divider from "./components/Divider";
import Icon from "./components/Icon";
import Stepper from "./components/Stepper";
import Summary from "./components/Summary";

function App() {
  return (
    <Box position="relative" backgroundColor="#fffae6" padding="50px 55px" minHeight="100vh" display="flex" justifyContent="center">
      <Stepper />
      <Box backgroundColor="white" borderRadius="4px" boxShadow="2px 10px 20px rgba(255, 138, 0, 0.1)" width="100%" display="flex" flexDirection="column" gap="30px" padding="30px 0 0 0">
        <Box display="flex" gap="10px" alignItems="center" cursor="pointer" width="fit-content" padding="0px 40px">
          <Icon icon="arrow_back" weight="400" size="18px" opacity="60%" />
          <Text weight="500" size="14px" opacity="60%">
            Back to cart
          </Text>
        </Box>
        <Box display="flex" height="100%">
          <Delivery />
          <Divider orientation="vertical" height="calc(100% - 20px)" thickness="1px" backgroundColor="#FF8A00" opacity="20%" />
          <Summary />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
