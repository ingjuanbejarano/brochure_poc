import React from 'react'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'

export const ProductCard = ({ product }) => {
  const { name, brand, categories, description, photo, price, stock } = product

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
    <Card sx={{ display: 'flex', flexDirection: 'column', width: 800 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
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
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <CardMedia
          component="img"
          sx={{ width: 120, height: 120, p: 1, marginLeft: 5, marginBottom: 2 }}
          src={photo}
          alt="Product image"
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: 2,
            marginRight: 2,
            marginBottom: 1,
          }}
        >
          <Typography component="p" sx={{ marginBottom: 1 }}>
            {description}
          </Typography>
          <RenderStockLabel stockToShow={stock} />
          <RenderPriceLabel priceToShow={price} />
        </Box>
      </Box>
    </Card>
  )
}
