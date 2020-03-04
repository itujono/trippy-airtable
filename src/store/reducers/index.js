import { combineReducers } from "redux"
import productReducer from "./productReducer.js"
import placeReducer from "./placeReducer.js"

const appReducer = combineReducers({
    product: productReducer,
    place: placeReducer
})

export const rootReducer = (state, action) => {
    return appReducer(state, action)
}
