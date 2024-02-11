import { createContext } from 'react'

export interface UserState {
	user: string | undefined
}

export type UserContextState = UserState & {
	setUser: React.Dispatch<UserState>
}

const EMPTY_USER_STATE = {
	user: undefined,
	setUser: () => {},
}

export const UserContext = createContext<UserContextState>(EMPTY_USER_STATE)
