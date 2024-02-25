import { atomWithStorage } from 'jotai/utils'

export interface UserData {
	name: string
	username: string
	email: string
	password: string
	avatar: string
}

// until not needed
export const EMPTY_USER: UserData = {
	name: '',
	username: '',
	email: '',
	password: '',
	avatar: '',
}

export const userDataAtom = atomWithStorage<UserData | undefined>(
	'user',
	undefined
)
