import { FC, ReactNode, useContext } from 'react'
import { UserContext } from '../context'
import { Root } from '../pages'

export const ProtectedRoute: FC<{ children: ReactNode }> = ({ children }) => {
	const { user } = useContext(UserContext)
	console.log('User', user)
	return user ? children : <Root />
}
