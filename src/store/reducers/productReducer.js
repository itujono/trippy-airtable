import * as types from "../types"

const initialState = {
    categories: [],
    promoProducts: [],
    categoriesError: null,
    promoProductsError: null
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case types.LOADING_PRODUCT:
            return { ...state, loading: true }
        case types.FETCH_CATEGORIES:
            return { ...state, categories: action.payload, loading: false }
        case types.FETCH_PROMO_PRODUCTS:
            return { ...state, promoProducts: action.payload, loading: false }

        case types.FETCH_CATEGORIES_ERROR:
            return { ...state, categoriesError: action.payload, loading: false }
        case types.FETCH_PROMO_PRODUCTS_ERROR:
            return { ...state, promoProductsError: action.payload, loading: false }
        default:
            return state
    }
}

export default reducer
