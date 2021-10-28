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
			<Message name="class" message="how is your day going?" />
			<Message name="Josh" message="did you eat yet?" />
			<Message name="Pak" message="how was your weekend?" />
			<Message name="Merp" message="PO-TAY-TOES!!!" />
		</div>
	);
  }
}

export default App


