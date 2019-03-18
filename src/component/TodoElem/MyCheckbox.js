import React, { Component } from 'react';
import './todo.css'

class MyCheckbox extends Component {
    constructor(props){
      super(props);
      this.state={
          isChecked:this.props.isChecked
      }
      this.onCheked=this.onCheked.bind(this)
    }
    onCheked(e){ 
           this.setState(    
                 {
                   isChecked:!this.state.isChecked
        });

    
    }
    
    render() {
        return (
            <div className="myCheckbox">  
            
              <input type="checkbox" className="chexk-input" onClick={this.onCheked} onChange={this.props.change}  />
                <label htmlFor="name-check" className="change-font" style={this.state.isChecked?{fontStyle:'italic'}:{fontStyle:''}} >
                   {this.props.nameItem } 
                </label>
                       {this.props.isChecked}
                       {this.props.id}
            </div>
        );
    }
}

export default MyCheckbox;