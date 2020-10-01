import React, { Component } from 'react';

class Result extends Component {
    
    setStyle(){
        return{
            borderColor: this.props.color,
            color: this.props.color,
            fontSize: this.props.fontSize
        }
    }
    render() {
        return (
            <div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <p>Color : {this.props.color} - Fontsize: {this.props.fontSize}</p>
                    <div id="content" style = { this.setStyle() }>
                        Nội dung settings
                    </div>
                </div>
            </div>
        );
    }
}

export default Result;