// @vendors
import { Box } from '@mui/material'
import React from 'react'

// @components
import { NavBar } from '../components/navbar'
import { Router } from '../router'

export const Layout = () => (
  <Box sx={{ display: 'flex' }}>
    <NavBar />
    <Router />
  </Box>
)
