import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage, Root } from './pages'
import { getRoutes } from './routes'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: getRoutes(),
	},
])

function App() {
	return (
		<MantineProvider defaultColorScheme='dark'>
			<RouterProvider router={router} />
		</MantineProvider>
	)
}

export default App
