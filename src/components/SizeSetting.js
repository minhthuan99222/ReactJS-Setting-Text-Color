import React, { Component } from 'react';

class SizeSetting extends Component {

    constructor(props) {
      super(props);
      this.upSize = this.upSize.bind(this);
      this.downSize= this.downSize.bind(this);
    }
    

    downSize(){
      if (this.props.fontSize > 8){
        this.props.onReceiveSize(this.props.fontSize - 2)
      }
      else{
        this.props.onReceiveSize(this.props.fontSize)
      }
    }
    upSize (){
      if (this.props.fontSize < 36){
        this.props.onReceiveSize(this.props.fontSize + 2)
      }
      else{
        this.props.onReceiveSize(this.props.fontSize)
      }
    }
    render() {
        console.log(this.props.fontSize +2)
        return (
            <div>
                <div className="panel panel-danger">
                  <div className="panel-heading">
                    <h3 className="panel-title">Size: {this.props.fontSize} </h3>
                  </div>
                  <div className="panel-body">
                    
                    <button type="button" className="btna btn-success" onClick = {this.downSize}>Giảm</button>
                    <button type="button" className="btna btn-success" onClick = {this.upSize}>Tăng</button>
                  </div>
              </div>
            </div>
        );
    }
}

export default SizeSetting;