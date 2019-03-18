import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import InputComponent from './component/InputComponent' 
import {addItem} from './actions/actionItem'
import {remooveItem} from './actions/actionItem'
import {addCheckedItem} from './actions/actionItem'
import Header from './component/header/header'
import ListTodoItems from './component/TodoElem/ListTodoItems'


class App extends Component {
  constructor(props){
   super(props);
    this.state={
       itemname: '',
       elem:[]
      } 

  this._addItem=this._addItem.bind(this);
  this._removeItem=this._removeItem.bind(this)
  this.addItemToState=this.addItemToState.bind(this);
  this.changeElements=this.changeElements.bind(this);
  }
  
  _addItem(e) {
    var app =document.getElementsByClassName('App');

    var errorMessage=document.createElement('div');    
    errorMessage.innerHTML="You not input name. Empty feild not allowed";       
    
 const newAddItem={
      item:this.state.itemname,
      id: Math.random(),
      isChecked: false
           };
          
    if(this.state.itemname==='')
         {
        for(let i in app){
            if(app[0].lastChild.innerHTML!="You not input name. Empty feild not allowed"){
                 app[0].appendChild(errorMessage).style.color='red'
          
             }else break
      
          }
    } else {  
      
        for(let e in app){
              if(app[0].lastChild.innerHTML==="You not input name. Empty feild not allowed"){
                        app[0].lastChild.innerHTML='';
                            }
                  }
      this.setState({
        itemname: ''
         })
     return  this.props.addItem(newAddItem)
    }
    }
addItemToState(e) {
      this.setState(
        {
          itemname:  e.target.value,
        }
             ) 
  }

_removeItem(e){
  return this.props.remooveItem()
}

changeElements =(value)=>event=>{
     return this.props.addCheckedItem(value.item,event.target.checked)
     }
     
  render() {
    const{items}=this.props;
  
    return (
      <div className="App"> 
           <Header onRemoveItem={this._removeItem}/>  
           <ListTodoItems items={items }  change={this.changeElements}  />
           <InputComponent 
               Val={this.state.itemname}
               onAddItem ={this._addItem}
               onCh={this.addItemToState}
                />    
 
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
 
  return {items: state }
} 

const mapDispatchToProps=( dispatch)=>{
    return{
  addItem: value=> dispatch(addItem(value)),
  remooveItem: ()=> dispatch(remooveItem()),
  addCheckedItem: (value,target)=>dispatch(addCheckedItem(value,target)),
          } 

}
export default connect(mapStateToProps,mapDispatchToProps)(App);
