import { connect } from "react-redux";
import { loadSnailyCADDirectory, showMessageBox } from "../actions";
import { DialogForm, Props } from "../components/DialogForm";

const mapDispatchToProps = (dispatch: any): Props => ({
  loadSnailyCADDirectory: () => {
    dispatch(loadSnailyCADDirectory());
  },
  showMessageBox: () => {
    dispatch(showMessageBox());
  },
});

export const Container = connect(null, mapDispatchToProps)(DialogForm);
