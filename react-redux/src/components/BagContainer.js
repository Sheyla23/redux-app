import React from 'react'
import { connect } from 'react-redux'
import { buyBag } from '../redux/Bags/bagAction'

const BagContainer = (props) => {
  return (
    <div>
        <h3>Number of bags-{props.numOfBags}</h3>
        <button onClick={props.buyBag}>Buy bag</button>
    </div>
  )
}

//steps to subscribe to the app and dispatch actions
//step 1:  define a new function; this gets the redux state as a param and returns an object
const mapStateToProps=(state)=>{
    return {
        numOfBags: state.numOfBags
    }
}

//step2: define a new function; this gets the redux dispatch method as a param and returns an object
const mapDispatchToProps= (dispatch)=> {
    return{
        buyBag:()=>dispatch(buyBag())
    }
}

//step3: connect the two functons to react component(import connect from react-redux ) i.e it connects the Bag component to the redux store

export default connect(mapStateToProps,mapDispatchToProps)(BagContainer)