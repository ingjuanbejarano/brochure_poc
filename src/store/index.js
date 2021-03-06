// @vendors
import { createStore } from 'redux'

// @reducers
import { rootReducer } from './reducers/rootReducer'

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true, traceLimit: 25 })
)
