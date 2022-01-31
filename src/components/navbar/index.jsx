// @vendors
import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

// @styles
import { NAVBAR } from './styles'

// @constants
import { navbarRoutes } from './constants'

// @components
import { NavbarLink } from '../navbarLink'

export const NavBar = () => {
  const { appBar, toolbar } = NAVBAR

  return (
    <AppBar position="fixed" sx={appBar}>
      <Toolbar sx={toolbar}>
        {navbarRoutes.map((route, i) => (
          <NavbarLink key={i} link={route.link} label={route.label} />
        ))}
      </Toolbar>
    </AppBar>
  )
}
