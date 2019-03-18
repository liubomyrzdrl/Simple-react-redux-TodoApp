export const addItem=(value)=>{
            return {
                type:"ADD_TO_STATE",
                payload: value
            }
}

export const addCheckedItem=(value,target)=>{
 
    console.log("action value"+value);
    return {
        type:"ADD_Checked",
        payload:value,
        target: target
       
    }
}
export const remoovecheckedItem=(value)=>{
    return {
        type:"Remoove_Checked",
        payload: value
    }
}


export const remooveItem=()=>{
    return {
        type:"REMOOVE_FROM_STATE",
       
    }
}