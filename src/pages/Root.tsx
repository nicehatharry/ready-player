import { Paper } from '@mantine/core'
import { useState } from 'react'
import { SignInModal, TopBar } from '../components'

export const Root = () => {
	const [user, setUser] = useState('')
	return (
		<Paper style={sideBars}>
			<TopBar user={user} />
			<SignInModal isOpen={!user} setUser={setUser} />
		</Paper>
	)
}

const sideBars = {
	background: 'black',
	height: '100vh',
	padding: '0 120px',
}
