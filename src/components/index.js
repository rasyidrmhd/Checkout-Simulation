import styled from "styled-components";

export const Text = styled.text`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
  opacity: ${(props) => props.opacity};
  line-height: ${(props) => props.lineHeight};
`;

export const Box = styled.div`
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  min-width: ${(props) => props.minWidth};
  width: ${(props) => props.width};
  min-height: ${(props) => props.minHeight};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border-radius: ${(props) => props.borderRadius};
  box-shadow: ${(props) => props.boxShadow};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  flex-wrap: ${(props) => props.flexWrap};
  flex-grow: ${(props) => props.flexGrow};
  gap: ${(props) => props.gap};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  align-self: ${(props) => props.alignSelf};
  border: ${(props) => props.border};
  cursor: ${(props) => props.cursor};
  opacity: ${(props) => props.opacity};
`;

export const AppBox = styled(Box)`
  width: 100vw;
  height: 100vh;
  padding: 55px 50px;
  position: relative;
  @media only screen and (max-width: 768px) {
    height: fit-content;
    flex-direction: column;
    padding: 25px 25px;
    position: static;
  }
`;

export const WhiteBox = styled(Box)`
  flex-direction: row;
  height: 100%;
  width: 100%;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: fit-content;
  }
`;

export const StepperBox = styled(Box)`
  position: absolute;
  top: 20px;
  padding: 20px 40px;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    align-self: center;
    position: static;
    padding: 10px 20px;
    gap: 10px;
  }
`;

export const StepperGroupBox = styled(Box)`
  gap: 20px;
  @media only screen and (max-width: 768px) {
    gap: 10px;
  }
`;

export const SummaryBox = styled(Box)`
  padding: 90px 0 0;
  width: 30%;
  height: 100%;
  @media only screen and (max-width: 768px) {
    padding: 0;
    width: 100%;
    height: fit-content;
  }
`;

export const SummaryContent = styled(Box)`
  padding: 0 20px 20px;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: fit-content;
    gap: 30px;
  }
`;

export const DeliveryBox = styled(Box)`
  padding: 40px 40px 20px;
  width: 70%;
  height: 100%;
  @media only screen and (max-width: 768px) {
    padding: 20px 20px;
    width: 100%;
    height: fit-content;
  }
`;

export const DeliveryContent = styled(Box)`
  gap: 36px;
  @media only screen and (max-width: 768px) {
    gap: 20px;
  }
`;

export const HiddenBox = styled(Box)`
  display: ${(props) => (props.displayIn === "large" ? props.display : "none")};
  @media only screen and (max-width: 768px) {
    display: ${(props) => (props.displayIn === "large" ? "none" : props.display)};
  }
`;

export const FormBox = styled(Box)`
  flex-direction: row;
  gap: 30px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ShipmentBox = styled(DeliveryBox)``;

export const FinishBox = styled(Box)`
  height: 100%;
  width: 70%;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    padding: 20px 20px;
    justify-content: start;
    align-items: start;
    width: 100%;
  }
`;

export const StyledHeaderText = styled(Text)`
  font-size: 36px;
  color: #ff8a00;
  font-family: montserrat;
  font-weight: 700;
  @media only screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 44px;
  }
`;

export const Button = styled.button`
  padding: 20px 40px;
  type: ${(props) => props.type};
  width: ${(props) => (props.block ? "100%" : "fit-content")};
  border-radius: 2px;
  background-color: #ff8a00;
  color: white;
  border: none;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  font-family: inter;
  &:disabled {
    opacity: 70%;
    cursor: not-allowed;
  }
`;

export const Label = styled.label`
  font-family: inter;
  font-weight: 500;
  font-size: ${(props) => props.fontSize};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
`;

export const Input = styled.input`
  padding: 30px 45px 11px 15px;
  width: 100%;
  height: 60px;
  font-family: inter;
  font-weight: 500;
  font-size: 16px;
  border: 1px solid ${(props) => (props.isError ? "#FF8A00" : props.isValid ? "#1BD97B" : "#cccccc")};
  type: ${(props) => props.type};
  &:disabled {
    cursor: not-allowed;
  }
  &:focus {
    border: 1px solid ${(props) => (props.isError ? "#FF8A00" : props.isValid ? "#1BD97B" : "blue")};
    outline: none;
  }
  &:focus ~ ${Label} {
    font-size: 13px;
    top: 12px;
  }
`;

export const TextArea = styled.textarea`
  padding: 28px 15px 20px;
  width: 100%;
  font-family: inter;
  font-weight: 500;
  font-size: 16px;
  border: 1px solid ${(props) => (props.isError ? "#FF8A00" : props.isValid ? "#1BD97B" : "#cccccc")};
  &:focus {
    border: 1px solid ${(props) => (props.isError ? "#FF8A00" : props.isValid ? "#1BD97B" : "blue")};
    outline: none;
  }
  &:focus ~ ${Label} {
    font-size: 13px;
    top: 12px;
  }
`;
