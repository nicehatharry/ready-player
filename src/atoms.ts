import { atomWithStorage } from 'jotai/utils'

export interface UserData {
	name: string
	username: string
	email: string
	password: string
	avatar: string
}

export const userDataAtom = atomWithStorage<{ username: string } | undefined>(
	'user',
	undefined
)
