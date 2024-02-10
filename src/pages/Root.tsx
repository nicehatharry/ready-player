import { useState } from 'react'
import { SignInModal } from '../components'

export const Root = () => {
	const [user, setUser] = useState('')
	return (
		<>
			<div>In Pr👹ss, {user}</div>
			<SignInModal isOpen={!user} setUser={setUser} />
		</>
	)
}
