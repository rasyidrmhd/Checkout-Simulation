import React from "react";
import { Box, Input, Text, TextArea } from "..";
import BackNavigation from "../BackNavigation";
import StyledHeader from "../StyledHeader";

const Delivery = ({ register, setValue }) => {
  const [checked, setChecked] = React.useState(false);
  const handleChange = (e) => {
    const { checked } = e.target;
    if (!checked) {
      setValue("dropshipName", "");
      setValue("dropshipPhone", "");
    }
    setChecked(checked);
  };

  return (
    <Box display="flex" flexDirection="column" gap="30px" height="100%" width="70%" padding="40px 40px 20px">
      <BackNavigation>Back to cart</BackNavigation>
      <Box display="flex" flexDirection="column" gap="36px">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <StyledHeader>Delivery details</StyledHeader>
          <Box display="flex" alignItems="center">
            <input type="checkbox" id="dropship" checked={checked} onChange={handleChange} />
            <label htmlFor="dropship">
              <Text color="#2D2A40" fontWeight="500" fontSize="14px" opacity="80%">
                Send as dropshipper
              </Text>
            </label>
          </Box>
        </Box>
        <Box display="flex" width="100%" gap="30px">
          <Box display="flex" flexDirection="column" width="100%" gap="10px">
            <Input type="text" {...register("email", { pattern: /\S+@\S+\.\S+/i })} />
            <Input type="number" {...register("phone")} />
            <TextArea rows={5} {...register("address", { required: true })} style={{ resize: "none" }}></TextArea>
          </Box>
          <Box display="flex" flexDirection="column" width="100%" gap="10px">
            <Input type="text" {...register("dropshipName")} disabled={!checked} />
            <Input type="number" {...register("dropshipPhone")} disabled={!checked} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Delivery;
