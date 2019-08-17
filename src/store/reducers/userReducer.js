import { FETCH_USER } from "../types"

const initialState = {
    user: {}
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USER:
            return { ...state, user: { name: "Jono", age: 41 } }
        default:
            return state
    }
}

export default reducer
