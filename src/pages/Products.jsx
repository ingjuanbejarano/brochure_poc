// @vendors
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Typography } from '@mui/material'

// @components
import { GeneralPageContainer } from '../components/generalPageContainer'
import { ProductsDrawer } from '../components/productsDrawer'
import { ProductsInfo } from '../components/productsInfo'
import { ProductsList } from '../components/productsList'

// @api
import { getProductsRequest } from '../api/products'

// @redux
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
      <GeneralPageContainer>
        {!productsToShow ? (
          <Typography variant="subtitle1" gutterBottom component="div">
            Loading...
          </Typography>
        ) : (
          renderProducts()
        )}
      </GeneralPageContainer>
    </>
  )
}
