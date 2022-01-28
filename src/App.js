import CssBaseline from '@mui/material/CssBaseline'
import { Provider } from 'react-redux'

import { store } from './store'
import { Layout } from './layout'

export const App = () => (
  <Provider store={store}>
    <CssBaseline />
    <Layout />
  </Provider>
)
