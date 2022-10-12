import * as React from 'react';
import { Component } from 'react';
import './css/ShowBalance.scss'

interface BalanceType{
    balance: number
}

export default class BalanceIcon extends Component<BalanceType>{
    constructor(props: BalanceType){
        super(props)
    }

    renderData = (balanceInfo: number) => {
        return (<div id="balanceDiv" className='balance'>
            <p>Balance:</p>
            <p>{balanceInfo.toLocaleString('en-US', {style: 'currency',currency: 'USD'})}</p>
            </div>);
    };

    render() {
        return this.renderData(this.props.balance)
    }
}