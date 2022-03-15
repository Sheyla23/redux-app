import React, { useState } from 'react'
import { initialState } from '../redux/reducers/pizzaReducer'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { buyPizza,cancelPizza } from '../redux/actions/pizzaAction'
const PizzaGrocery = () => {
    const [orders,setOrders] = useState(1)
    const [number,setNumber] = useState(1)
   const pizza = useSelector(state=>state.pizza.numOfPizza)

   const dispatch =useDispatch()
   const order =initialState.numOfPizza - pizza
  return (
    <div>
        <div>
            <h4> Num of Pizza - {pizza}</h4>
            <button onClick={()=> dispatch(buyPizza())}> Buy Pizza</button>
            <button onClick={()=> dispatch(cancelPizza())}> return Pizza</button>
        </div>
        <input type="number" value={orders} onChange={(e)=>setOrders(e.target.value)} />
        <button onClick={()=> dispatch(buyPizza(orders))}> Buy {orders} Pizza</button>
        <div>
            <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
            <button onClick={()=> dispatch(cancelPizza(number))}> return {number} Pizza</button> 
        </div>
        <h4>Total Pizza Orders - {order}</h4>
    </div>
  )
}

export default PizzaGrocery