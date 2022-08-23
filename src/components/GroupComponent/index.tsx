import React, { Component } from "react";
import Indexes from "../Indexes";
import { GroupInfo } from "../../constants/types";
import Name from "../Name";

export default class GroupComponent extends Component<{ group: GroupInfo }> {
  constructor(props: { group: GroupInfo }) {
    super(props);
  }

  renderGroup = (props: GroupInfo) => {
    return (
      <div>
        <Name name={props.name} />
        <Indexes indexes={props.indexes} />
      </div>
    );
  };

  render() {
    return this.renderGroup(this.props.group);
  }
}
