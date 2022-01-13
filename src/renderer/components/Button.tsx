import * as React from "react";
import styled from "styled-components";

type Props = JSX.IntrinsicElements["button"];

const StyledButton = styled.button`
  user-select: none;
  cursor: pointer;
  display: inline-block;
  padding: 0.3em 0.5em;
  border-radius: 0.2em;
  border: solid 1px ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.blue};
  font-size: 1rem;
`;

/**
 * component of a button control.
 */
export const Button: React.FC<Props> = (props) => (
  <StyledButton {...(props as any)}>{props.children}</StyledButton>
);
