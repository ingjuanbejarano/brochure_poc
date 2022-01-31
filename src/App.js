// @vendors
import CssBaseline from '@mui/material/CssBaseline'
import { Provider } from 'react-redux'

// @store
import { store } from './store'

// @components
import { Layout } from './layout'

export const App = () => (
  <Provider store={store}>
    <CssBaseline />
    <Layout />
  </Provider>
)
