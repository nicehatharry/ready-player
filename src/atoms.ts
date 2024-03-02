import { atomWithStorage } from 'jotai/utils'

export interface UserData {
	username: string
	email: string
	password: string
}

// until not needed
export const EMPTY_USER: UserData = {
	username: '',
	email: '',
	password: '',
}

export const userDataAtom = atomWithStorage<UserData | undefined>(
	'user',
	undefined
)
