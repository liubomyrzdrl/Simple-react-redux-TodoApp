import React from 'react';
import TodoElem from './TodoElem'
import './todo.css'

const ListTodoItems = ({change,items}) => {
    return (
        <div className="list-todo-item">
           {items.map((item)=>{
                  return (
                <div key={item.id}>
                   <TodoElem   className="todo-elem"  
                               isChecked={item.isChecked} 
                               checked={item.isChecked} 
                               change={change(item) }  
                               nameItem={item.item}/>
                </div>
            )
})}
        </div>
    );
};

export default ListTodoItems;