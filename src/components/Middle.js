import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Body from './Body';

export class Middle extends Component {
    render() {
        return (
			<div className="App-middle">
				<Sidebar />
				<Body />
			</div>
		);
    }
}

export default Middle
