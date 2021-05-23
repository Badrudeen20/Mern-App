const value = (state="",action)=>{
    switch(action.type){
         case 'CHECK':
         return state = action.value 
         default:
         return state;
    }
}
export default value