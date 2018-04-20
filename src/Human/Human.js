import React, { Component } from 'react';

class Human extends Component {
    render() {
        return (
            <div>
                <h2>Hi, I'm a Human</h2>
                <p>I'm {this.props.name} and my hobbie is to {this.props.children}</p>
            </div>
        )
    }
}

export default Human;