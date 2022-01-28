import React from 'react'
import { List, ListItem } from '@mui/material'

import { ProductCard } from '../productCard'

export const ProductsList = ({ productsToShow }) => (
  <List>
    {productsToShow.map((product) => (
      <ListItem key={product.id}>
        <ProductCard product={product} />
      </ListItem>
    ))}
  </List>
)
