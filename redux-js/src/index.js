//5.to access the redux library
const redux = require('redux')
const createStore = redux.createStore

//1.constants is used to avoid misspelling when reusing an action
const BUY_CAKE='BUY_CAKE'

//2.action creator
function buyCake(){
    //action:plain objects with 'type' as property
    return{
        type:BUY_CAKE,
        info:'First redux action'
    }   
}

//3.initial state/prevstate which should be represented as objects
const initialState={
    numOfCakes:10
}


//4.reducer function..(initialstate/prevstate,action)=>nextstate

const reducer =(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes-1
        }
        default:return state
    }
}

// 6. redux store holds the application state'createstore(reducer)'
const store= createStore(reducer)

//7. access the state via getState()
console.log('initial state', store.getState())

//8.subscribe to the store "allow the app to subscribe to changes in the store"(more like a listener to the store)
const unsubscribe=store.subscribe(()=> console.log('updated state', store.getState()))

//9. dispatch method allows the state to be updated; the dispatch method requires an action as a parameter ,that is why we invoked the action creator to return the action as a parameter
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

//10. unsubscribe from changes in the store by calling the function returned by the subscribe method
unsubscribe()