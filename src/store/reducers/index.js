import { combineReducers } from "redux"
import userReducer from "./userReducer.js"
import placeReducer from "./placeReducer.js"

const appReducer = combineReducers({
    user: userReducer,
    place: placeReducer
})

export const rootReducer = (state, action) => {
    return appReducer(state, action)
}
