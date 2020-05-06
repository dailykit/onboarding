import { createContext } from 'react'

import state from './state'
import reducers from './reducers'

const context = createContext()

export { context, state, reducers }
