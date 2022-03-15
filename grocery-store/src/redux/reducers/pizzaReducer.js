import { BUY_PIZZA, CANCEL_PIZZA } from "../types/pizzaTypes"

export const initialState={
    numOfPizza: 20
}

const pizzaReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_PIZZA: return{
            ...state,
            numOfPizza: state.numOfPizza - action.payload
        }
        case CANCEL_PIZZA: return{
            ...state,
            numOfPizza: state.numOfPizza + action.info
        }
        default: return state
    }
}

export default pizzaReducer