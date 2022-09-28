import React, { Component } from "react";
//import "./index.css";

export interface DataType {
  name: string;
  current_price: number;
}

export default class ShowData extends Component<{ dataInfo: DataType }> {
  constructor(props: { dataInfo: DataType }) {
    super(props);
  }

  renderData = (dataInfo: DataType) => {
    return (
      <div className="cryptoBlock">
        <p className="name">{dataInfo.name}</p>
        <p className="cryptoPrice">{(dataInfo.current_price).toLocaleString('en-US', {style: 'currency',
                currency: 'USD'})}</p>
      </div>
    );
  };

  render() {
    return this.renderData(this.props.dataInfo);
  }
}
