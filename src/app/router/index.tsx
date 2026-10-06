import HomePage from '@pages/HomePage'
import { createBrowserRouter } from 'react-router'

const router = createBrowserRouter([
	{ path: '/', index: true, element: <HomePage /> },
])

export default router
