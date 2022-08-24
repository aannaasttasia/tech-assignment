import React, { Component } from "react";
import './css/Name.scss'


export default class Name extends Component<{ name: string }> {

  render() {
    return <h1 className="groupName">{this.props.name}</h1>;
  }
}
