import React, { Component } from 'react';
import Title from '../Title';
import Logo from '../Logo';
import Groups from '../Groups';

export default class App extends Component{
  render(){
    return(
      <>
      <Logo />
      <Title />
      <Groups />
      </>
    )
  }
}