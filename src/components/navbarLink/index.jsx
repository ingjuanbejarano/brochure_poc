import React from 'react'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { NAVBAR_LINK } from './styles'

export const NavbarLink = ({ link, label }) => {
  const { typography } = NAVBAR_LINK

  return (
    <Typography
      variant="h6"
      component={Link}
      to={link}
      align="center"
      sx={typography}
    >
      {label}
    </Typography>
  )
}
