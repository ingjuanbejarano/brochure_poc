// @vendors
import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/system'

// @styles
import { GENERAL_PAGE_CONTAINER } from './styles'

export const GeneralPageContainer = ({ children }) => {
  const { box } = GENERAL_PAGE_CONTAINER

  return (
    <Box component="main" sx={box}>
      {children}
    </Box>
  )
}

GeneralPageContainer.propTypes = {
  children: PropTypes.node,
}
