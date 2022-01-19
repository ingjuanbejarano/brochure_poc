import {
  HANDLE_SET_PRODUCTS_TO_SHOW,
  HANDLE_SET_PRODUCTS_AMOUNT,
  HANDLE_SET_REMAINING_PRODUCTS,
} from '../types/types'

const initialState = {
  productsToShow: null,
  productsAmount: null,
  remainingAmount: null,
}

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_SET_PRODUCTS_TO_SHOW:
      return Object.assign({}, state, {
        productsToShow: action.payload.productsToShow,
      })
    case HANDLE_SET_PRODUCTS_AMOUNT:
      return Object.assign({}, state, {
        productsAmount: action.payload.productsAmount,
      })

    case HANDLE_SET_REMAINING_PRODUCTS:
      return Object.assign({}, state, {
        remainingAmount: action.payload.remainingAmount,
      })

    default:
      return state
  }
}
