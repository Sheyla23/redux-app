import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "../types/userTypes"
import axios from 'axios'
export const fetchUsersRequest=()=>{
    return{
        type:FETCH_USERS_REQUEST
    }
}
export const fetchUsersSuccess=(users)=>{
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}
export const fetchUsersFailure=(error)=>{
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}

//define async action creator
export const fetchUsers=()=>{
    //returns impure functions and allows side-effects
    return (dispatch)=>{
    console.log(1,dispatch)
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            console.log(2)
            const users = response.data
            console.log(3)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error=>{
            console.log(4)
            const errorMsg =error.message
            dispatch(fetchUsersFailure(errorMsg))
            console.log(4)
        })
    }
}