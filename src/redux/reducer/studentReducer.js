const initialData = {
    name:'Ram Karki'
}

export const studentReducer = (state=initialData, action)=>{
    
    switch(action.type){
        case 'Change_name':
            return {
                ...state,
                name:action.payload
            }
        default:
            return state
    }
}