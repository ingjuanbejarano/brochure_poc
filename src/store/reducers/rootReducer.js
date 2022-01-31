// @vendors
import { combineReducers } from 'redux'

// @reducers
import { productsReducer } from './products'

export const rootReducer = combineReducers({ productsReducer })
