import { initialState } from '@shared/config/constants'
import { createContext } from 'react'

const ConfigContext = createContext(initialState)

export { ConfigContext }
