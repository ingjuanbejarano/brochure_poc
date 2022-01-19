import { Box } from '@mui/material'
import React from 'react'

import { NavBar } from '../components/NavBar'
import { Router } from '../router'

export const Layout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar />
      <Router />
    </Box>
  )
}
