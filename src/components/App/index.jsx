import React, { Component } from 'react';
import Title from '../Title';
import Logo from '../Logo';
import Groups from '../Groups';
import Data from '../GetData/index'
import './App.css';


export default class App extends Component{
  render(){
    return(
      <>
      <Logo />
      <Title />
      {/* <Groups /> */}
      <Data/>
      </>
    )
  }
}