import { BUY_BAG } from "./bagTypes";

const initialState={
    numOfBags: 19
}
const bagReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_BAG: return {
            ...state, numOfBags:state.numOfBags - 1
        }
        default: return state
    }
}

export default bagReducer