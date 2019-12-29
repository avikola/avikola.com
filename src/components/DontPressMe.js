import React from "react";
import Toast from "react-bootstrap/Toast";
import "./DontPressMe.scss";

export const DontPressMe = props => {
  var delay_secs = 3000;
  var pressMeCSS = "dontpressmetoast";

  if (props.num_of_clicks === 10) {
    delay_secs = 4500;
    pressMeCSS = "dontpressmefinaltoast";
  }

  return (
    <Toast
      onClose={props.closeit}
      className={pressMeCSS}
      show={props.toast_show}
      delay={delay_secs}
      autohide
    >
      <Toast.Body>{props.press_dictionary[props.num_of_clicks]}</Toast.Body>
    </Toast>
  );
};
