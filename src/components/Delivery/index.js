import React from "react";
import { Box, Input, Text, TextArea, Label, DeliveryBox, HiddenBox, FormBox, DeliveryContent } from "..";
import BackNavigation from "../BackNavigation";
import Icon from "../Icon";
import StyledHeader from "../StyledHeader";
import StyledCheckbox from "./StyledCheckbox";
import StyledInput from "./StyledInput";

const Delivery = ({ field, register, setValue, setStep, errors, clearErrors }) => {
  const handleChange = React.useCallback(
    (value) => {
      setValue("dropshipEnable", value);
      if (!value) {
        setValue("dropshipName", "");
        setValue("dropshipPhone", "");
        setValue("total", field.total - 5900);
        clearErrors("dropshipName");
        clearErrors("dropshipPhone");
      } else {
        setValue("total", field.total + 5900);
      }
    },
    [field.total]
  );
  const addressLength = React.useMemo(() => 120 - field.address.length, [field.address]);

  return (
    <DeliveryBox display="flex" flexDirection="column" gap="30px">
      <BackNavigation onClick={() => setStep(1)}>Back to cart</BackNavigation>
      <DeliveryContent display="flex" flexDirection="column">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <StyledHeader>Delivery details</StyledHeader>
          <StyledCheckbox displayIn="large" enable={field.dropshipEnable} onClick={() => handleChange(!field?.dropshipEnable)} />
        </Box>
        <FormBox display="flex" width="100%">
          <Box display="flex" flexDirection="column" width="100%" gap="10px">
            <StyledInput field={field.email} error={errors?.email} label="Email">
              <Input id="email" type="text" isError={errors?.email} isValid={!errors?.email && field.email.length} {...register("email", { required: true, pattern: /\S+@\S+\.\S+/i })} />
            </StyledInput>
            {errors?.email && (
              <Text fontSize="14px" color="#FF8A00">
                {errors?.email.type === "pattern" ? "Invalid email" : "Email is required"}
              </Text>
            )}

            <StyledInput field={field.phone} error={errors?.phone} label="Phone">
              <Input id="phone" type="text" isError={errors?.phone} isValid={!errors?.phone && field.phone.length} {...register("phone", { required: true, pattern: /^((\(\+\d{1,3}\)|0)|\+)?\d{6,19}$/gm, minLength: 6, maxLength: 20 })} />
            </StyledInput>
            {errors?.phone && (
              <Text fontSize="14px" color="#FF8A00">
                {errors?.phone.type === "pattern"
                  ? "Phone number only may contains number, -, +, (, ). Example using bracket should be like this: (+62)"
                  : errors?.phone.type === "minLength" || errors?.phone.type === "maxLength"
                  ? "Phone number must be between 6 and 20 digit"
                  : "Phone number is required"}
              </Text>
            )}

            <Box width="100%" display="flex" position="relative">
              <Box
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="60px"
                backgroundColor={!errors?.address && field.address.length ? "#1BD97B" : errors?.address ? "#FF8A00" : "#cccccc"}
                padding="3px 3px"
                top="1px"
                right="0"
              >
                <Text fontSize="12px" color="white">
                  {addressLength}
                </Text>
              </Box>
              <TextArea id="address" isError={errors?.address} isValid={!errors?.address && field.address.length} rows={4} {...register("address", { required: true, maxLength: 120 })} style={{ resize: "none" }}></TextArea>
              <Label htmlFor="address" position="absolute" fontSize={field.address.length > 0 ? "13px" : "16px"} top={field.address.length > 0 ? "12px" : "20px"} left="15px">
                <Text color={!errors?.address && field.address.length ? "#1BD97B" : errors?.address ? "#FF8A00" : "#cccccc"}>Address</Text>
              </Label>
            </Box>
            {errors?.address && (
              <Text fontSize="14px" color="#FF8A00">
                {errors?.address.type === "required" ? "Address is required" : "Address may not be longer than 120 characters"}
              </Text>
            )}
          </Box>

          <Box display="flex" flexDirection="column" width="100%" gap="10px">
            <StyledCheckbox displayIn="small" enable={field.dropshipEnable} onClick={() => handleChange(!field?.dropshipEnable)} />
            <StyledInput field={field.dropshipName} error={errors?.dropshipName} label="Dropshipper Name">
              <Input
                id="dropshippername"
                isError={errors?.dropshipName}
                isValid={!errors?.dropshipName && field.dropshipName.length}
                type="text"
                {...register("dropshipName", { required: field.dropshipEnable })}
                disabled={!field.dropshipEnable}
              />
            </StyledInput>
            {errors?.dropshipName && (
              <Text fontSize="14px" color="#FF8A00">
                Drophipper name is required
              </Text>
            )}

            <StyledInput field={field.dropshipPhone} error={errors?.dropshipPhone} label="Dropshipper Phone">
              <Input
                id="dropshipperphone"
                isError={errors?.dropshipPhone}
                isValid={!errors?.dropshipPhone && field.dropshipPhone.length}
                type="text"
                {...register("dropshipPhone", { required: field.dropshipEnable, pattern: /^[0-9-+()]+$/i, minLength: 6, maxLength: 20 })}
                disabled={!field.dropshipEnable}
              />
            </StyledInput>
            {errors?.dropshipPhone && (
              <Text fontSize="14px" color="#FF8A00">
                {errors?.dropshipPhone.type === "pattern"
                  ? "Phone number only may contains number, -, +, (, )"
                  : errors?.dropshipPhone.type === "minLength" || errors?.dropshipPhone.type === "maxLength"
                  ? "Phone number must be between 6 and 20 digit"
                  : "Phone number is required"}
              </Text>
            )}
          </Box>
        </FormBox>
      </DeliveryContent>
    </DeliveryBox>
  );
};

export default Delivery;
