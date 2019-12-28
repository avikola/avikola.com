import React from "react";
import "./Intro.scss";
import { DontPressMe } from "../../components/DontPressMe";
import Confetti from "react-confetti";

export class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num_of_clicks: 0,
      toast_show: false,
      dict_check: 1,
      confetti: false,
      gravity: 0.8
    };
    this.dontPressMe = this.dontPressMe.bind(this);
    this.startConfetti = this.startConfetti.bind(this);
    this.press_dictionary = [
      "",
      "Hello there.",
      "You can call me Avi!",
      "Hey, uh, this isn't an important button.",
      "Click somewhere else!",
      "No. Stop.",
      "Fine, you win.",
      "I baked you cake.",
      "It's delicious, I promise.",
      "Initiating surprise in 3..2..1..",
      "I made it all up."
    ];
  }

  dontPressMe() {
    if (this.state.num_of_clicks < 8)
      this.setState({
        num_of_clicks: this.state.num_of_clicks + 1,
        toast_show: true
      });

    if (this.state.num_of_clicks === 8)
      this.setState({
        dict_check: 2,
        num_of_clicks: this.state.num_of_clicks + 1,
        toast_show: true
      });

    if (this.state.num_of_clicks >= 10)
      this.setState(() => ({
        confetti: !this.state.confetti,
        gravity: 0.25
      }));
  }

  closeToast() {
    this.setState({
      toast_show: false
    });
  }

  startConfetti() {
    setTimeout(() => {
      this.setState(() => ({
        dict_check: 3,
        num_of_clicks: this.state.num_of_clicks + 1,
        toast_show: true
      }));
    }, 3000);
  }

  render() {
    return (
      <div className="intro-text">
        <p className="p-hello">Hello, I'm</p>

        {(this.state.dict_check === 1 || this.state.dict_check === 3) && (
          <h1 onClick={this.dontPressMe}>Avishkar Kolahalu.</h1>
        )}

        {this.state.dict_check === 2 && <h1>Avishkar Kolahalu.</h1>}
        {this.state.dict_check === 2 && (
            <DontPressMe
              closeit={this.closeToast.bind(this)}
              toast_show={this.state.toast_show}
              press_dictionary={this.press_dictionary}
              num_of_clicks={this.state.num_of_clicks}
            />
          ) &&
          this.startConfetti()}

        {this.state.dict_check === 3 && (
          <Confetti
            style={{ position: "fixed" }}
            recycle={this.state.confetti}
            gravity={this.state.gravity}
          />
        )}

        <p className="p-sd">&#47;&#47; Software Developer</p>
        <DontPressMe
          closeit={this.closeToast.bind(this)}
          toast_show={this.state.toast_show}
          press_dictionary={this.press_dictionary}
          num_of_clicks={this.state.num_of_clicks}
        />
      </div>
    );
  }
}
