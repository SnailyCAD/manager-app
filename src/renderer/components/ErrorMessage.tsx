import * as React from "react";
import styled from "styled-components";

type Props = JSX.IntrinsicElements["span"];

const StylesSpan = styled.span`
  color: ${(props) => props.theme.colors.red};
  display: block;
  font-size: 1rem;
  margin-top: 0.5rem;
`;

/**
 * component of a button control.
 */
export const ErrorMessage: React.FC<Props> = (props) => (
  <StylesSpan {...(props as any)}>{props.children}</StylesSpan>
);
