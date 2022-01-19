import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Typography } from '@mui/material'

import { ProductsDrawer } from '../components/ProductsDrawer'
import { ProductsInfo } from '../components/ProductsInfo'
import { ProductsList } from '../components/ProductsList'
import { getProductsRequest } from '../api/products'
import {
  setProductsAmount,
  setProductsToShow,
  setRemainingProducts,
} from '../store/actions/products'

export const Products = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])
  const productsToShow = useSelector(
    (state) => state.productsReducer.productsToShow
  )

  const getProducts = async () => {
    try {
      const res = await getProductsRequest()
      setProducts(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const dispatchProductsToShow = (productsToDispatch) => {
    const productsAmount = productsToDispatch.length
    const remainingAmount = products.length - productsAmount

    dispatch(setProductsToShow(productsToDispatch))
    dispatch(setProductsAmount(productsAmount))
    dispatch(setRemainingProducts(remainingAmount))
  }

  const filterProducts = (category) => {
    const filteredProducts = products.filter((product) => {
      return product.categories.some((cat) => cat.toLowerCase() === category)
    })

    dispatchProductsToShow(filteredProducts)
  }

  const checkRoutePath = () => {
    const productsSubpath = location.pathname.split('/')[2]
    if (productsSubpath) {
      filterProducts(productsSubpath)
    } else {
      dispatchProductsToShow(products)
    }
  }

  const renderProducts = () => {
    return (
      <>
        {productsToShow.length > 0 ? (
          <>
            <ProductsInfo />
            <ProductsList productsToShow={productsToShow} />
          </>
        ) : (
          <Typography variant="subtitle1" gutterBottom component="div">
            No products to show
          </Typography>
        )}
      </>
    )
  }

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    if (products.length > 0) {
      checkRoutePath()
    }
  }, [products, location])

  return (
    <>
      <ProductsDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 2, marginTop: 7 }}>
        {!productsToShow ? (
          <Typography variant="subtitle1" gutterBottom component="div">
            Loading...
          </Typography>
        ) : (
          renderProducts()
        )}
      </Box>
    </>
  )
}
