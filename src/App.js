import CssBaseline from '@mui/material/CssBaseline'
import { Provider } from 'react-redux'

import { store } from './store'
import { Layout } from './layout'

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Layout />
    </Provider>
  )
}

export default App
