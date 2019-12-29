import React from "react";
import "./EachButton.scss";

export class EachButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={`each-${this.props.num} each-btn`}>
        {this.props.label}
      </div>
    );
  }
}
