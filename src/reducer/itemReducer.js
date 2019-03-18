 const initialState={
    item: [{
        item:'AAAA',
        id: 0,
        isChecked: false
    },
    {
        item:'BBB',
        id:1,
        isChecked: false
    }
]
}
export const itemReducer=(state=initialState.item,action)=>{
  var a1=state.filter(el=>el.item!=action.payload);
 
 
   console.log('state reducer'+a1.map(el=>el.item));
 //a1.map(el=>el.isChecked=true)
  // ction.payload+ a1)
    switch ( action.type) {
        case  "ADD_TO_STATE": return [...state, action.payload]
 
         
         case  "REMOOVE_FROM_STATE": return  [...state.filter(el=>el.isChecked!=true) ]   //
            
         case  "ADD_Checked":  state.filter(el=>el.item===action.payload).map(e=>{e.isChecked=action.target})
   
  
            
        default: return state
           
    }
} 