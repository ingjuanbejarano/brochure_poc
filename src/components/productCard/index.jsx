// @vendors
import React from 'react'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'

import { PRODUCT_CARD } from './styles'

export const ProductCard = ({ product }) => {
  const { name, brand, categories, description, photo, price, stock } = product
  const {
    card,
    titleBox,
    titleContent,
    bodyBox,
    image,
    descriptionBox,
    descriptionText,
  } = PRODUCT_CARD

  const RenderStockLabel = ({ stockToShow }) => (
    <Typography component="span">
      <strong>Stock: </strong>
      {`${stockToShow}`}
    </Typography>
  )

  const RenderPriceLabel = ({ priceToShow }) => (
    <Typography component="span">
      <strong>Price: </strong>
      {`$${priceToShow}`}
    </Typography>
  )

  return (
    <Card sx={card}>
      <Box sx={titleBox}>
        <CardContent sx={titleContent}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {`${categories.join(', ')} - ${brand}`}
          </Typography>
        </CardContent>
      </Box>
      <Box sx={bodyBox}>
        <CardMedia component="img" sx={image} src={photo} alt="Product image" />
        <Box sx={descriptionBox}>
          <Typography component="p" sx={descriptionText}>
            {description}
          </Typography>
          <RenderStockLabel stockToShow={stock} />
          <RenderPriceLabel priceToShow={price} />
        </Box>
      </Box>
    </Card>
  )
}
