import React from "react";
import Toast from "react-bootstrap/Toast";
import "./DontPressMe.scss";

export const DontPressMe = props => {
  let delay_secs = 3000;
  if (props.num_of_clicks == 10) delay_secs = 6000;
  return (
    <Toast
      onClose={props.closeit}
      className="dontpressmetoast"
      show={props.toast_show}
      delay={delay_secs}
      autohide
    >
      <Toast.Body>{props.press_dictionary[props.num_of_clicks]}</Toast.Body>
    </Toast>
  );
};
