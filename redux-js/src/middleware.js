const redux = require('redux')
const reduxLogger = require('redux-logger')
const logger=reduxLogger.createLogger
const applyMiddleware = redux.applyMiddleware
const createStore=redux.createStore
const combineReducers = redux.combineReducers


const BUY_CHIPS ='BUY_CHIPS';
const BUY_BAGS='BUY_BAGS'
const CAL_BAGS='CAL_BAGS'
function buyChips(){
    return{
        type:BUY_CHIPS
    }
}
function buyBags(){
    return{
        type:BUY_BAGS
    }
}
function calBags(){
    return{
        type:CAL_BAGS
    }
}

const initialChipsState={
    numOfChips:30
}
const initialBagsState={
    numOfBags:15
}
const chipsReducer=(state=initialChipsState,action)=>{
    switch(action.type){
        case BUY_CHIPS: return {
            ...state,
            numOfChips:state.numOfChips -1
        }
        default: return state
    }

}
const bagsReducer=(state=initialBagsState,action)=>{
   
    switch(action.type){
        case BUY_BAGS: return {
            ...state,
            numOfBags:state.numOfBags -1
        }
        case CAL_BAGS: return {
            ...state,
            numOfBags:state.numOfBags + 1
        }
        default: return state
    }
   
}

const rootReducers = combineReducers({
    chips:chipsReducer,
   bags:bagsReducer
})
const store=createStore(rootReducers,applyMiddleware(logger()));

const unsubscribe= store.subscribe(()=> {})
store.dispatch(buyBags())
store.dispatch(buyBags())
store.dispatch(buyChips())
store.dispatch(calBags())
unsubscribe()

