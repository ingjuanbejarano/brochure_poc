// @vendors
import axios from 'axios'

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT

export const getProductsRequest = () => axios.get(`${apiEndpoint}/products`)
