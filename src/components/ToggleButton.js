import React from "react";

import "./ToggleButton.css";

// A toggleable button
export default class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggled: false };
  }

  handleClick() {
    this.setState({ isToggled: !this.state.isToggled });
  }

  render() {
    return (
      <button
        className={this.state.isToggled ? "isToggled" : ""}
        onClick={this.handleClick.bind(this)}
      >
        {this.props.children}
      </button>
    );
  }
}
