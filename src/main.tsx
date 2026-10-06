import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Provider } from 'react-redux'

import './index.scss'

import App from '@app/App.tsx'
import { ContextProvider } from '@app/providers/ContextProvider'
import store from '@app/store'

const rootElement = document.getElementById('root')

if (!rootElement) {
	throw new Error('Root element was not found')
}

createRoot(rootElement).render(
	<StrictMode>
		<Provider store={store}>
			<ContextProvider>
				<App />
			</ContextProvider>
		</Provider>
	</StrictMode>
)
