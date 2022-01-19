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
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { Link } from 'react-router-dom'

import { drawerRoutes, drawerWidth } from '../constants/productsDrawer'

export const ProductsDrawer = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <ListItem button key="all">
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <Link to="/products">
              <ListItemText primary="All" />
            </Link>
          </ListItem>
          <Divider />
          {drawerRoutes.map((item, index) => (
            <ListItem button key={item.key}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <Link to={item.key}>
                <ListItemText primary={item.value} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}
