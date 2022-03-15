import { FETCH_TODO_FAILURE, FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS } from "../types/todoTypes"

const initialState={
    isLoading:false,
    todo:[],
    errorMsg:''
}


const todoReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_TODO_REQUEST: return {
            ...state,isLoading:true
        }
        case FETCH_TODO_SUCCESS: return {
            isLoading:false,todo:action.payload,errorMsg:''
        }
        case FETCH_TODO_FAILURE: return {
            isLoading:false,todo:[],errorMsg:action.payload
        }
        default: return state
    }
}

export default todoReducer