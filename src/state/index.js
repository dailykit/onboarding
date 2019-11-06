import { createContext } from 'react'

import state from './state'
import reducers from './reducers'

const Context = createContext()

export { Context, state, reducers }
