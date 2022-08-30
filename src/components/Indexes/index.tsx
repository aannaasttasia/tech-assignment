import React from "react";
import { Component } from "react";
import { Index } from "../../constants/types";
import './css/Indexes.scss'
import * as convert from 'ether-converter';
interface IndexesProps {
  indexes: Index[];
}

export default class Indexes extends Component<IndexesProps> {
  constructor(props: IndexesProps) {
    super(props);
  }

  renderIndexes = (indexes: Index[]) => {
    return (
      <div className="blockParent">
        {indexes.map((a, i) => {
          return (
            <div className="block" key={i}>
              <p className="name">{a.name}</p>
              <p className="togetherUsdEth">{(a.usdPriceInCents / 100).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}/{convert(a.ethPriceInWei.toString(), 'wei', 'ether')} ETH</p>
              <div className="inlineEl">
                <p>{(a.usdCapitalization/100).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}</p>
                <p className="percentageChange">
                  {a.percentageChange.toString()}%
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    return this.renderIndexes(this.props.indexes);
  }
}
