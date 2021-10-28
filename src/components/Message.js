import React, { Component } from 'react'

export class Message extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                Hello {this.props.name}
            </div>
        )
    }
}

export default Message
