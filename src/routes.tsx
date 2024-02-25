import { ProtectedRoute } from './components'
import { SignUp } from './pages'
import { TableMaint } from './pages/TableMaint'

interface Route {
	path: string
	element: JSX.Element
}

const OPEN_ROUTES: Route[] = [
	{ path: '/sign-up', element: <SignUp /> },
	{ path: '/tables', element: <TableMaint /> },
]
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
