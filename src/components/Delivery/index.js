import React from "react";
import { Box, Input, Text, TextArea } from "..";
import BackNavigation from "../BackNavigation";
import StyledHeader from "../StyledHeader";

const Delivery = ({ field, register, setValue, setStep, errors }) => {
  const handleChange = (e) => {
    const { checked } = e.target;
    setValue("dropshipEnable", checked);
    if (!checked) {
      setValue("dropshipName", "");
      setValue("dropshipPhone", "");
      setValue("total", field.total - 5900);
    } else {
      setValue("total", field.total + 5900);
    }
  };
  const addressLength = React.useMemo(() => field.address.length, [field.address]);

  return (
    <Box display="flex" flexDirection="column" gap="30px" height="100%" width="70%" padding="40px 40px 20px">
      <BackNavigation onClick={() => setStep(1)}>Back to cart</BackNavigation>
      <Box display="flex" flexDirection="column" gap="36px">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <StyledHeader>Delivery details</StyledHeader>
          <Box display="flex" alignItems="center">
            <input type="checkbox" id="dropship" checked={field.dropshipEnable} onChange={handleChange} />
            <label htmlFor="dropship">
              <Text color="#2D2A40" fontWeight="500" fontSize="14px" opacity="80%">
                Send as dropshipper
              </Text>
            </label>
          </Box>
        </Box>
        <Box display="flex" width="100%" gap="30px">
          <Box display="flex" flexDirection="column" width="100%" gap="10px">
            <Input type="text" {...register("email", { required: true, pattern: /\S+@\S+\.\S+/i })} />
            {errors?.email && (
              <Text fontSize="14px" color="#FF8A00">
                Invalid email
              </Text>
            )}
            <Input type="number" {...register("phone", { required: true, minLength: 6, maxLength: 20 })} />
            {errors?.phone && (
              <Text fontSize="14px" color="#FF8A00">
                Phone number must be between 6 and 20 digit
              </Text>
            )}
            <TextArea rows={5} {...register("address", { required: true, maxLength: 120 })} style={{ resize: "none" }}></TextArea>
            <Text fontSize="13px">
              <Text fontSize="13px" color={addressLength > 120 ? "red" : "black"}>
                {addressLength}
              </Text>
              /120
            </Text>
          </Box>
          <Box display="flex" flexDirection="column" width="100%" gap="10px">
            <Input type="text" {...register("dropshipName", { required: field.dropshipEnable })} disabled={!field.dropshipEnable} />
            {errors?.dropshipName && (
              <Text fontSize="14px" color="#FF8A00">
                Drophipper name is required
              </Text>
            )}
            <Input type="number" {...register("dropshipPhone", { required: field.dropshipEnable, minLength: 6, maxLength: 20 })} disabled={!field.dropshipEnable} />
            {errors?.dropshipPhone && (
              <Text fontSize="14px" color="#FF8A00">
                Phone number must be between 6 and 20 digit
              </Text>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Delivery;
