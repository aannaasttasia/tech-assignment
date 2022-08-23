import React, { Component } from "react";
import GroupIndexes from "../Indexes";
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
        <GroupIndexes indexes={props.indexes} />
      </div>
    );
  };

  render() {
    return this.renderGroup(this.props.group);
  }
}
