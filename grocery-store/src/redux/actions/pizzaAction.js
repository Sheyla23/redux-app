import { BUY_PIZZA } from "../types/pizzaTypes"
import { CANCEL_PIZZA } from "../types/pizzaTypes"

export const buyPizza=(orders = 1)=>{
    return {
        type:BUY_PIZZA,
        payload: Number(orders)
    }
}
export const cancelPizza=(number = 1)=>{
    return {
        type:CANCEL_PIZZA,
        info:Number(number)
    }
}