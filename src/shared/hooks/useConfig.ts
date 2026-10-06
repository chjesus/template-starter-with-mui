import { ConfigContext } from '@shared/config/Context'
import { useContext } from 'react'

export default function useConfig() {
	return useContext(ConfigContext)
}
