import { ProtectedRoute } from './components'
import { SignUp } from './pages'

interface Route {
	path: string
	element: JSX.Element
}

const OPEN_ROUTES: Route[] = [{ path: '/sign-up', element: <SignUp /> }]
const PROTECTED_ROUTES: Route[] = [
	{ path: '/dashboard', element: <>Dashboard</> },
	{ path: '/', element: <></> },
]

export const getRoutes = () => {
	return [
		...OPEN_ROUTES,
		...PROTECTED_ROUTES.map((route) => ({
			path: route.path,
			element: <ProtectedRoute>{route.element}</ProtectedRoute>,
		})),
	]
}
