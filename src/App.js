/****************
 * IMPORT ITEMS *
 ****************/
import React, { Component } from "react";
import "./App.css";
import Message from "./components/Message";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
/********************
 * EXPORT COMPONENT *
 ********************/
export class App extends Component {
	render() {
		return (
      <div>
        <Header />				
        <Footer />
			</div>
		);
	}
}

export default App;
