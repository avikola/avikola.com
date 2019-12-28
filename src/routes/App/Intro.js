import React from "react";
import "./Intro.scss";
import { DontPressMe } from "../../components/DontPressMe";

export class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num_of_clicks: 0,
      toast_show: false,
      dict_check: 1
    };
    this.dontPressMe = this.dontPressMe.bind(this);
    this.press_dictionary = [
      "",
      "Hello there.",
      "You can call me Avi.",
      "This is not the button you're looking for",
      "Click somewhere else!",
      "No.",
      "Fine, you win.",
      "Click again for a prize."
    ];
  }

  dontPressMe() {
    if (this.state.num_of_clicks < 7) {
      if (this.state.num_of_clicks + 1 === 7)
        this.setState({
          num_of_clicks: this.state.num_of_clicks + 1,
          toast_show: true,
          dict_check: 2
        });
      else
        this.setState({
          num_of_clicks: this.state.num_of_clicks + 1,
          toast_show: true
        });
    }

    if (this.state.num_of_clicks === 8) this.setState({ dict_check: 3 });
  }

  closeToast() {
    this.setState({
      toast_show: false
    });
  }

  render() {
    return (
      <div className="intro-text">
        <DontPressMe
          closeit={this.closeToast.bind(this)}
          toast_show={this.state.toast_show}
          press_dictionary={this.press_dictionary}
          num_of_clicks={this.state.num_of_clicks}
        />

        <p className="p-hello">Hello, I'm</p>

        {this.state.dict_check === 1 && (
          <h1 onClick={this.dontPressMe}>Avishkar Kolahalu.</h1>
        )}

        {this.state.dict_check === 2 && (
          <h1>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
              className="rolled-link"
              onClick={() =>
                this.setState({
                  dict_check: 3
                })
              }
            >
              Avishkar Kolahalu.
            </a>
          </h1>
        )}

        {this.state.dict_check === 3 && <h1>Avishkar Kolahalu.</h1>}

        <p className="p-sd">&#47;&#47; Software Developer</p>
      </div>
    );
  }
}
