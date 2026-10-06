import MuiThemeProvider from '@app/providers/MuiProvider'

import router from '@app/router'
import { RouterProvider } from 'react-router'

function App() {
	return (
		<MuiThemeProvider>
			<RouterProvider router={router} />
		</MuiThemeProvider>
	)
}

export default App
