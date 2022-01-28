import React from 'react'
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import DevicesIcon from '@mui/icons-material/Devices'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import BusinessIcon from '@mui/icons-material/Business'
import { Link } from 'react-router-dom'

import { PRODUCTS_DRAWER } from './styles'
import { drawerRoutes } from './constants'

export const ProductsDrawer = () => {
  const { drawer, drawerBox } = PRODUCTS_DRAWER

  const renderIcon = (label) => {
    switch (label) {
      case 'Tech':
        return <DevicesIcon />
      case 'Services':
        return <BusinessCenterIcon />
      case 'Office':
        return <BusinessIcon />

      default:
        break
    }
  }

  return (
    <Drawer variant="permanent" sx={drawer}>
      <Toolbar />
      <Box sx={drawerBox}>
        <List>
          <ListItem button component={Link} to="/products" key="all">
            <ListItemIcon>
              <ArtTrackIcon />
            </ListItemIcon>
            <ListItemText primary="All" />
          </ListItem>
          <Divider />
          {drawerRoutes.map((route, i) => (
            <ListItem button key={i} component={Link} to={route.route}>
              <ListItemIcon>{renderIcon(route.label)}</ListItemIcon>
              <ListItemText primary={route.label} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}
