// @vendors
import React from 'react'
import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'

export const ProductsInfo = () => {
  const productsAmount = useSelector(
    (state) => state.productsReducer.productsAmount
  )
  const remainingAmount = useSelector(
    (state) => state.productsReducer.remainingAmount
  )

  return (
    <Typography variant="subtitle1" gutterBottom component="div">
      {`Showing ${productsAmount} products - Hidden: ${remainingAmount}`}
    </Typography>
  )
}
