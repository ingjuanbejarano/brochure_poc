// @vendors
import React from 'react'
import PropTypes from 'prop-types'
import { List, ListItem } from '@mui/material'

// @components
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

ProductsList.propTypes = {
  productsToShow: PropTypes.array,
}
