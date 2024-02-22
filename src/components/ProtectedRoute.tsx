import { useAtom } from 'jotai'
import { FC, ReactNode } from 'react'
import { LogInModal } from '.'
import { userDataAtom } from '../atoms'

export const ProtectedRoute: FC<{ children: ReactNode }> = ({ children }) => {
	const [user] = useAtom(userDataAtom)
	console.log('User', user)
	return user ? children : <LogInModal />
}
