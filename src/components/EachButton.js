import React from "react";
import "./EachButton.scss";

export const EachButton = props => {
  return <div className={`each-${props.num} each-btn`}>{props.label}</div>;
};
