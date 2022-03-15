import cakeReducer from "./cakeReducer";
import pizzaReducer from "./pizzaReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const rootReducer= combineReducers({
        cake:cakeReducer,
        pizza:pizzaReducer,
        user:userReducer,
        todo:todoReducer
    }
)

export default rootReducer