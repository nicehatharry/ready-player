import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { UserContext, UserState } from './context'
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
	const [userState, setUserState] = useState<UserState>()

	return (
		<MantineProvider defaultColorScheme='dark'>
			<UserContext.Provider
				value={{ user: userState?.user, setUser: setUserState }}>
				<RouterProvider router={router} />
			</UserContext.Provider>
		</MantineProvider>
	)
}

export default App
