import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { buyBag } from '../redux/Bags/bagAction'

const BagContainerWithHooks = () => {
    const numOfBags =useSelector(state=>state.numOfBags)
    const dispatch =useDispatch()
  return (
    <div>
        <h2>number of bags-{numOfBags}</h2>
        <button onClick={()=>dispatch(buyBag())}>Buy bag</button>
    </div>
  )
}

export default BagContainerWithHooks