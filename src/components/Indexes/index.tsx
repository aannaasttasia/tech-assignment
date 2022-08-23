import React from 'react';
import { Component } from 'react';
import { Index } from '../../constants/types';
import './css/Indexes.scss';

interface IndexesProps {
    indexes: Index[]
}

export default class Indexes extends Component<IndexesProps>{
    constructor(props: IndexesProps){
        super(props);
    }

    renderIndexes = (indexes: Index[]) => {
        return (
        <div className='blockParent'>
            { indexes.map((a,i)=> {
            return(
                <div  className="block" key={i}>
                    <p className='name'>{a.name}</p>
                    <p>${(a.usdPriceInCents).toString()}/{(a.ethPriceInWei).toString()} ETH</p>
                    <div className='inlineEl'>
                        <p>${(a.usdCapitalization).toString()}</p>
                        <p className='percentageChange'>{(a.percentageChange).toString()}%</p>
                    </div>
                    
                </div>
            )
        })}
        </div>)
  };

    render() {
        return(
            (this.renderIndexes(this.props.indexes))
        )
    }
}