import React from 'react'
import { Box } from '@mui/system'

import { GENERAL_PAGE_CONTAINER } from './styles'

export const GeneralPageContainer = ({ children }) => {
  const { box } = GENERAL_PAGE_CONTAINER

  return (
    <Box component="main" sx={box}>
      {children}
    </Box>
  )
}
