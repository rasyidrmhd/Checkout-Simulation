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
  border: ${(props) => props.border};
  cursor: ${(props) => props.cursor};
  opacity: ${(props) => props.opacity};
`;

export const Form = styled.form`
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
  border: ${(props) => props.border};
  cursor: ${(props) => props.cursor};
  opacity: ${(props) => props.opacity};
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

export const Input = styled.input`
  type: ${(props) => props.type};
`;

export const TextArea = styled.textarea``;
