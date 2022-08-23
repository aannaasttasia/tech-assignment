import React from 'react';
import { Component } from 'react';
import { Index } from '../../constants/types';

interface GroupIndexesProps {
    indexes: Index[]
}

export default class GroupIndexes extends Component<GroupIndexesProps>{
    constructor(props: GroupIndexesProps){
        super(props);
    }

    renderIndexes = (indexes: Index[]) => {
        return indexes.map((a,i)=> {
            return(
                <div key={i}>
                    <p>{a.name}</p>
                    <p>${(a.usdPriceInCents).toString()}/{(a.ethPriceInWei).toString()} ETH</p>
                    <p>{(a.usdCapitalization).toString()}</p>
                    <p>{(a.percentageChange).toString()}</p>
                </div>
            )
        })
  };

    render() {
        return(
            (this.renderIndexes(this.props.indexes))
        )
    }
}