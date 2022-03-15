import { BUY_CAKE } from "../types/cakeTypes"

const initialState={
    numOfCakes:30
}

const cakeReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

export default cakeReducer