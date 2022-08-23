import React, { Component } from "react";

export default class Name extends Component<{ name: string }> {

  render() {
    return <h1>{this.props.name}</h1>;
  }
}
