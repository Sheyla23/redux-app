import axios from "axios"
import { FETCH_TODO_FAILURE, FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS } from "../types/todoTypes"

export const fetchTodoRequest=()=>{
    return{
        type:FETCH_TODO_REQUEST
    }
}
export const fetchTodoSuccess=(todos)=>{
    return{
        type:FETCH_TODO_SUCCESS,
        payload: todos
    }
}
export const fetchTodoFailure=(errorMsg)=>{
    return{
        type:FETCH_TODO_FAILURE,
        payload:errorMsg
    }
}

export const fetchTodo=()=>{
    return (dispatch)=>{
        dispatch(fetchTodoRequest())
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response=>{
               const todos= response.data
               dispatch(fetchTodoSuccess(todos))
            })
        .catch(reject=>{
            const errorMsg=reject.message
            dispatch(fetchTodoFailure(errorMsg))
        })
    }
}