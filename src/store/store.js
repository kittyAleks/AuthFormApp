import {createStore, combineReducers, applyMiddleware} from 'redux'
import {mainProductsReducer} from './reducers/rocketsReducer'

export default createStore(mainProductsReducer, {})
