import React, { Component } from 'react';

class Reset extends Component {

    reset = () => {
        this.props.onReceiveReset();
    }

    render() {
        
        return (
            <div>
                <button type="button" className="btna btn-primary" onClick = {this.reset}>reset</button>
            </div>
        );
    }
}

export default Reset;