import React from "react";
import Toast from "react-bootstrap/Toast";
import "./DontPressMe.scss";

export const DontPressMe = props => {
  return (
    <Toast
      style={{}}
      onClose={props.closeit}
      className="dontpressmetoast"
      show={props.toast_show}
      delay={3000}
      autohide
    >
      <Toast.Body>{props.press_dictionary[props.num_of_clicks]}</Toast.Body>
    </Toast>
  );
};
