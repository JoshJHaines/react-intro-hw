/****************
 * IMPORT ITEMS *
 ****************/
import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Middle from "./components/Middle";
/********************
 * EXPORT COMPONENT *
 ********************/
export class App extends Component {
	render() {
		return (
      <div>
        <Header />
        <Middle />
        <Footer />
			</div>
		);
	}
}

export default App;
