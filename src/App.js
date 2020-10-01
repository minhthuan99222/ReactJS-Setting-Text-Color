import React, { Component } from 'react';
import ColorPicker from './components/ColorPicker';
import Result from './components/Result';
import Reset from './components/Reset';
import SizeSetting from './components/SizeSetting';

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color : "red",
      fontSize: 16
    }
    this.onSetColor = this.onSetColor.bind(this);
    this.setFontSize = this.setFontSize.bind(this);
    this.onReset = this.onReset.bind(this);
  }
  
  onSetColor(params){
    this.setState({
      color: params
    });
  }
  setFontSize(newSize){
    this.setState({
      fontSize: newSize
    });
  }
  onReset(){
    this.setState({
      fontSize: 16,
      color: "red"
    });
  }

  render() {

    
    return (
        <div className="container mt-50"> 
          <div className="row">
            <ColorPicker 
              color = {this.state.color}
              onReceiveColor = {this.onSetColor}
            />
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <SizeSetting
                fontSize = {this.state.fontSize}
                onReceiveSize = {this.setFontSize}
                
              />           
              <Reset
                onReceiveReset = {this.onReset}
              />              
            </div>
            <Result
              color = {this.state.color}
              fontSize = {this.state.fontSize}
            />     
          </div>
        </div>
        

    );
  }
}

export default App;