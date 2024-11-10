const initialData = {
    cartData:0
}

export const cartReducer =(state=initialData, action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                cartData:state.cartData+1
            }
        default:
            return state
    }
}
