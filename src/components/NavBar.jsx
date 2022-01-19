import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="span"
          align="center"
          sx={{ flexGrow: 1 }}
        >
          <Link to="/">Home</Link>
        </Typography>
        <Typography
          variant="h6"
          component="span"
          align="center"
          sx={{ flexGrow: 1 }}
        >
          <Link to="products">Products</Link>
        </Typography>
        <Typography
          variant="h6"
          component="span"
          align="center"
          sx={{ flexGrow: 1 }}
        >
          <Link to="clients">Clients</Link>
        </Typography>
        <Typography
          variant="h6"
          component="span"
          align="center"
          sx={{ flexGrow: 1 }}
        >
          <Link to="contact">Contact</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
