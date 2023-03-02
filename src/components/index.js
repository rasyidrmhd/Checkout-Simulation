import styled from "styled-components";

export const Text = styled.text`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
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
  border-radius: ${(props) => props.borderRadius};
  box-shadow: ${(props) => props.boxShadow};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  gap: ${(props) => props.gap};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
`;
