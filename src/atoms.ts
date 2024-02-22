import { atomWithStorage } from 'jotai/utils'

export interface UserData {
	username: string
}
// {
// 	name: string
// 	username: string
// 	email: string
// 	password: string
// 	avatar: string
// }

export const userDataAtom = atomWithStorage<UserData | undefined>(
	'user',
	undefined
)
