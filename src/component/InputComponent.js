import React from 'react'
import './index.css'

const InputComponent= ({onAddItem,onCh,Val} )=>{
     
    return (
        <div className='input-comp' >
                 <img src="images/add.png" onClick={onAddItem} />
                 <input  onChange={onCh} value={Val}/> 
              
         </div>
    )
};

export default InputComponent