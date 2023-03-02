import React from "react";
import { Text, Box } from "./components";
import Delivery from "./components/Delivery";
import Divider from "./components/Divider";
import Finish from "./components/Finish";
import Icon from "./components/Icon";
import Shipment from "./components/Shipment";
import Stepper from "./components/Stepper";
import Summary from "./components/Summary";

function App() {
  return (
    <Box position="relative" backgroundColor="#fffae6" padding="50px 55px" minHeight="100vh" display="flex" justifyContent="center">
      <Stepper />
      <Box backgroundColor="white" borderRadius="4px" boxShadow="2px 10px 20px rgba(255, 138, 0, 0.1)" width="100%" display="flex">
        {/* <Delivery /> */}
        <Shipment />
        {/* <Finish /> */}
        <Summary />
      </Box>
    </Box>
  );
}

export default App;
