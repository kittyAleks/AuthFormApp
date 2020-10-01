import {createStore, combineReducers, applyMiddleware} from 'redux'
import {mainProductsReducer} from './reducers/mainProductsReducer'

export default createStore(mainProductsReducer, {})
