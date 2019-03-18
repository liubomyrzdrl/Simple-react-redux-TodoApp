import React  from 'react';
import MyCheckbox from './MyCheckbox'

 

const TodoElem = ({change,id,isChecked,nameItem}) => {
    return (
        <div >
          <MyCheckbox 
            change={ change}  
            id={id} 
            isChecked={isChecked} 
            nameItem={nameItem} />
        </div>
    );
};

export default TodoElem;
