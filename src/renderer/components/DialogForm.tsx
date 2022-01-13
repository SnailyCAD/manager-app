import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

export type Props = {
  loadSnailyCADDirectory?: () => void;
  showMessageBox?: () => void;
};

const StyledDialogForm = styled.div`
  padding: 1rem;
  text-align: center;

  fieldset {
    border: solid 1px ${(props) => props.theme.colors.grayDark};
  }
`;

/**
 * component of a dialog api tester.
 */
export const DialogForm: React.FC<Props> = ({ loadSnailyCADDirectory, showMessageBox }) => (
  <StyledDialogForm>
    <form>
      <fieldset>
        <legend>Dialog &amp; MessageBox</legend>
        <Button label="Load SnailyCAD's Directory" onClick={loadSnailyCADDirectory} />
        <Button label="Start SnailyCADv4" />
        <Button label="Stop SnailyCADv4" onClick={showMessageBox} />
      </fieldset>
    </form>
  </StyledDialogForm>
);
