import logo from './logo.svg';
import './App.css';
import NewComp from './NewComp'
import React, { Component } from 'react';

export default class App extends Component {
    styles = {
      color: 'red',
      font: 'bold'
    };
    render(){
      return(
        <div className='App'>
            <h2 style={this.styles}>Welcome</h2>
            <NewComp />
        </div>
      )
    }
}
