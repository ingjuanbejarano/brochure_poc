import {
  HANDLE_SET_PRODUCTS_TO_SHOW,
  HANDLE_SET_PRODUCTS_AMOUNT,
  HANDLE_SET_REMAINING_PRODUCTS,
} from '../types/types'

export const setProductsToShow = (productsToShow) => ({
  type: HANDLE_SET_PRODUCTS_TO_SHOW,
  payload: { productsToShow },
})

export const setProductsAmount = (productsAmount) => ({
  type: HANDLE_SET_PRODUCTS_AMOUNT,
  payload: { productsAmount },
})

export const setRemainingProducts = (remainingAmount) => ({
  type: HANDLE_SET_REMAINING_PRODUCTS,
  payload: { remainingAmount },
})
