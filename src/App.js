/****************
 * IMPORT ITEMS *
 ****************/
import React, { Component } from 'react'
import './App.css';
import Message from "./components/Message"


/********************
 * EXPORT COMPONENT *
 ********************/
export class App extends Component {
  render() {
    return (
      <div>
        Hi Josh
        <Message />
      </div>
    )
  }
}

export default App


