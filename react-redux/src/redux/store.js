import {createStore} from 'redux'
import bagReducer from './Bags/bagReducer'


const store = createStore(bagReducer)

export default store