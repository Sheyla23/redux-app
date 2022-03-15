import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/actions/cakeActions'
const CakeGrocery = (props) => {
    
  return (
    <div>
        <h4> Num of cakes - {props.cake}</h4>
        <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps=(state)=>{
    return{
        cake: state.cake.numOfCakes
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        buyCake: ()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeGrocery)