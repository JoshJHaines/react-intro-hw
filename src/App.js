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
			<Message name="class" />
			<Message name="Josh" />
			<Message name="Pak" />
			<Message name="Merp" />
		</div>
	);
  }
}

export default App


