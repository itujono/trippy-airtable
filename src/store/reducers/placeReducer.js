import { GET_PLACES } from "../types"

const initialState = {
    places: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_PLACES:
            return { ...state, places: action.payload, loading: false }
        default:
            return state
    }
}
