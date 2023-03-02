import React from "react";
import "./App.css";
import { Text, Box } from "./components";
import Stepper from "./components/Stepper";

function App() {
  const orange = "#FF8A00";
  return (
    <div className="App">
      <Stepper />
      {/* <div className="stepper">
        <div className="stepper-group">
          <div className="box-number" style={{ backgroundColor: orange, color: "white" }}>
            1
          </div>
          <Text color="#ff8a00">Delivery</Text>
          <span>{">"}</span>
        </div>
        <div className="stepper-group">
          <div className="box-number" style={{ backgroundColor: orange, color: "white" }}>
            2
          </div>
          <span>Payment</span>
          <span>{">"}</span>
        </div>
        <div className="stepper-group">
          <div className="box-number" style={{ backgroundColor: orange, color: "white" }}>
            3
          </div>
          <span>Finish</span>
        </div>
      </div> */}
      <div className="box">
        <div className="back">{"<-"} Back to cart</div>
      </div>
    </div>
  );
}

export default App;
