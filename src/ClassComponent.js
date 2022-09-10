import React, { Component } from "react";

export class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "alvin",
      age: 34,
    };
  }

  handleClick = () => {
    this.setState({
      name: "ACOSTA",
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        ClassComponent
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default ClassComponent;
