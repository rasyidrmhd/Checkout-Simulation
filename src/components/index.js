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
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 25px 25px;
  }
`;

export const WhiteBox = styled(Box)`
  flex-direction: row;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
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

export const SummaryBox = styled(Box)`
  padding: 90px 0 0;
  width: 30%;
  @media only screen and (max-width: 768px) {
    padding: 0;
    width: 100%;
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
