import React from "react";
import { Box, Input, Text, TextArea, Label } from "..";
import BackNavigation from "../BackNavigation";
import Icon from "../Icon";
import StyledHeader from "../StyledHeader";

const Delivery = ({ field, register, setValue, setStep, errors, clearErrors }) => {
  const handleChange = (e) => {
    const { checked } = e.target;
    setValue("dropshipEnable", checked);
    if (!checked) {
      setValue("dropshipName", "");
      setValue("dropshipPhone", "");
      setValue("total", field.total - 5900);
      clearErrors("dropshipName");
      clearErrors("dropshipPhone");
    } else {
      setValue("total", field.total + 5900);
    }
  };
  const addressLength = React.useMemo(() => 120 - field.address.length, [field.address]);

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
            <Box position="relative">
              {(field.email.length > 0 || errors?.email) && (
                <Box position="absolute" top="21px" right="15px">
                  <Icon icon={errors?.email ? "clear" : "check"} weight="400" size="18px" color={errors?.email ? "#FF8A00" : "#1BD97B"} />
                </Box>
              )}
              <Input id="email" type="text" isError={errors?.email} isValid={!errors?.email && field.email.length} {...register("email", { required: true, pattern: /\S+@\S+\.\S+/i })} />
              <Label htmlFor="email" position="absolute" fontSize={field.email.length > 0 ? "13px" : "16px"} top={field.email.length > 0 ? "12px" : "20px"} left="15px">
                <Text color={!errors?.email && field.email.length ? "#1BD97B" : errors?.email ? "#FF8A00" : "#cccccc"}>Email</Text>
              </Label>
            </Box>
            {errors?.email && (
              <Text fontSize="14px" color="#FF8A00">
                {errors?.email.type === "pattern" ? "Invalid email" : "Email is required"}
              </Text>
            )}
            <Box position="relative">
              {(field.phone.length > 0 || errors?.phone) && (
                <Box position="absolute" top="21px" right="15px">
                  <Icon icon={errors?.phone ? "clear" : "check"} weight="400" size="18px" color={errors?.phone ? "#FF8A00" : "#1BD97B"} />
                </Box>
              )}
              <Input id="phone" type="text" isError={errors?.phone} isValid={!errors?.phone && field.phone.length} {...register("phone", { required: true, pattern: /^[0-9-+()]+$/i, minLength: 6, maxLength: 20 })} />
              <Label htmlFor="phone" position="absolute" fontSize={field.phone.length > 0 ? "13px" : "16px"} top={field.phone.length > 0 ? "12px" : "20px"} left="15px">
                <Text color={!errors?.phone && field.phone.length ? "#1BD97B" : errors?.phone ? "#FF8A00" : "#cccccc"}>Phone Number</Text>
              </Label>
            </Box>
            {errors?.phone && (
              <Text fontSize="14px" color="#FF8A00">
                {errors?.phone.type === "pattern"
                  ? "Phone number only may contains number, -, +, (, )"
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
            <Box position="relative">
              {(field.dropshipName.length > 0 || errors?.dropshipName) && (
                <Box position="absolute" top="21px" right="15px">
                  <Icon icon={errors?.dropshipName ? "clear" : "check"} weight="400" size="18px" color={errors?.dropshipName ? "#FF8A00" : "#1BD97B"} />
                </Box>
              )}
              <Input
                id="dropshipName"
                isError={errors?.dropshipName}
                isValid={!errors?.dropshipName && field.dropshipName.length}
                type="text"
                {...register("dropshipName", { required: field.dropshipEnable })}
                disabled={!field.dropshipEnable}
              />
              <Label htmlFor="dropshipName" position="absolute" fontSize={field.dropshipName.length > 0 ? "13px" : "16px"} top={field.dropshipName.length > 0 ? "12px" : "20px"} left="15px">
                <Text color={!errors?.dropshipName && field.dropshipName.length ? "#1BD97B" : errors?.dropshipName ? "#FF8A00" : "#cccccc"}>Dropshipper Name</Text>
              </Label>
            </Box>
            {errors?.dropshipName && (
              <Text fontSize="14px" color="#FF8A00">
                Drophipper name is required
              </Text>
            )}
            <Box position="relative">
              {(field.dropshipPhone.length > 0 || errors?.dropshipPhone) && (
                <Box position="absolute" top="21px" right="15px">
                  <Icon icon={errors?.dropshipPhone ? "clear" : "check"} weight="400" size="18px" color={errors?.dropshipPhone ? "#FF8A00" : "#1BD97B"} />
                </Box>
              )}
              <Input
                id="dropshipPhone"
                isError={errors?.dropshipPhone}
                isValid={!errors?.dropshipPhone && field.dropshipPhone.length}
                type="text"
                {...register("dropshipPhone", { required: field.dropshipEnable, pattern: /^[0-9-+()]+$/i, minLength: 6, maxLength: 20 })}
                disabled={!field.dropshipEnable}
              />
              <Label htmlFor="dropshipPhone" position="absolute" fontSize={field.dropshipPhone.length > 0 ? "13px" : "16px"} top={field.dropshipPhone.length > 0 ? "12px" : "20px"} left="15px">
                <Text color={!errors?.dropshipPhone && field.dropshipPhone.length ? "#1BD97B" : errors?.dropshipPhone ? "#FF8A00" : "#cccccc"}>Dropshipper Phone Number</Text>
              </Label>
            </Box>
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
        </Box>
      </Box>
    </Box>
  );
};

export default Delivery;
