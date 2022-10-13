import React, { Component, useState } from "react";
import ShowData from "../ShowData/index";
import { getData } from "./getInfo";
import renderSpinner from './spinner'
import './css/GetData.scss'

export default class Data extends Component<any, { datas: object, status:boolean }> {
  constructor(props: { datas: object }) {
    super(props);
    this.state = { datas: [], status : false };
  }

  async componentDidMount() {
    try {
      const dataInfo = await getData();
      this.setState({
        datas: dataInfo.data,
        status: true
      });
    } catch (err) {
      let errorMessage = "Failed to do something exceptional";
      if (err instanceof Error) {
        errorMessage = err.message;
      }
      console.log(errorMessage);
    }
  }

  mappedInfo = (datas: any) => {
    return (
      <div className="cryptoParent">
        <h1 className="cryptoTitle">Crypto price</h1>
        {datas.map((data: any, i: number) => {
          return <ShowData dataInfo={data} key={i} />;
        })}
      </div>
    );
      
  };


  renderData() {
    return this.mappedInfo(this.state.datas);
  }

  render() {
    return (this.state.status) ? this.renderData() : renderSpinner();
  }

}
