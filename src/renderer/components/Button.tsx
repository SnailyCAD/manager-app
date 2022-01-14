import * as React from "react";
import styled from "styled-components";

type Props = JSX.IntrinsicElements["button"];

const StyledButton = styled.button`
  user-select: none;
  cursor: pointer;
  display: inline-block;
  padding: 0.3em 0.5em;
  border-radius: 0.2em;
  border: solid 1px ${(props) => props.theme.colors.grayDarkness};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.grayDarkness};
  font-size: 1rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`;

/**
 * component of a button control.
 */
export const Button: React.FC<Props> = (props) => (
  <StyledButton {...(props as any)}>{props.children}</StyledButton>
);
