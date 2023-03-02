import React from "react";
import { Box, Button, Text } from "..";
import Divider from "../Divider";
import DeliveryItem from "./DeliveryItem";
import PriceItem from "./PriceItem";

const estimate = {
  "GO-SEND": "today",
  JNE: "2 days",
  "Personal Courier": "1 day",
};

const price = {
  "GO-SEND": 15000,
  JNE: 9000,
  "Personal Courier": 29000,
};

const Summary = ({ field, errors, step, setStep, setValue }) => {
  React.useEffect(() => {
    setValue("total", 500000 + (step !== 1 ? price[field.shipment] : 0) + (field.dropshipEnable ? 5900 : 0));
  }, [step]);
  return (
    <Box display="flex" height="100%" width="30%" padding="90px 0 0">
      <Divider orientation="vertical" height="calc(100% - 20px)" thickness="1px" backgroundColor="#FF8A00" opacity="20%" />
      <Box display="flex" flexDirection="column" height="100%" width="100%" padding="0 20px 20px" justifyContent="space-between">
        <Box display="flex" flexDirection="column" gap="10px">
          <Text fontSize="24px" color="#FF8A00" fontFamily="montserrat" fontWeight="700" lineHeight="44px">
            Summary
          </Text>
          <Text fontSize="14px" fontWeight="400" opacity="60%">
            10 items purchased
          </Text>
          {step !== 1 && <DeliveryItem label="Delivery estimation" value={`${estimate[field.shipment]} by ${field.shipment}`} />}
          {step === 3 && <DeliveryItem label="Payment Method" value={field.payment} />}
        </Box>
        <Box display="flex" flexDirection="column" gap="20px">
          <Box display="flex" flexDirection="column" gap="10px">
            <PriceItem price={500000}>Cost of goods</PriceItem>
            {field.dropshipEnable && <PriceItem price={5900}>Dropshipping Fee</PriceItem>}
            {step !== 1 && (
              <PriceItem price={price[field.shipment]}>
                <Text fontWeight="700">{field.shipment}</Text>
                {" shipment"}
              </PriceItem>
            )}
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Text fontSize="24px" color="#FF8A00" fontFamily="montserrat" fontWeight="700">
              Total
            </Text>
            <Text fontSize="24px" color="#FF8A00" fontFamily="montserrat" fontWeight="700">
              {field.total.toLocaleString("en-US")}
            </Text>
          </Box>
          {step !== 3 && (
            <Button type="submit" block={true}>
              {step === 1 ? "Continue to Payment" : `Pay with ${field.payment}`}
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Summary;
