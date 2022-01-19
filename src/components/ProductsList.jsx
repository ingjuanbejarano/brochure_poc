import React from 'react'
import { List, ListItem } from '@mui/material'

import { ProductCard } from './ProductCard'

export const ProductsList = ({ productsToShow }) => {
  return (
    <List>
      {productsToShow.map((product) => (
        <ListItem key={product.id}>
          <ProductCard product={product} />
        </ListItem>
      ))}
    </List>
  )
}
