import {GET_ALL_PRODUCTS, LOAD_MORE_PRODUCTS }  from '../types'

const initialState = {
    allProducts: [],
    currentPage: null,
    isLoading: false
};

export const mainProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS: return {
            ...state,
            allProducts: action.allProducts,
            isLoading: true
        };
        case LOAD_MORE_PRODUCTS: return {
            ...state,
            isLoading: false,
            allProducts: [...state.allProducts, ...action.allProducts],
        };
        default:
            return state;
    }
};
