import { Space, Group, Avatar } from '@mantine/core'
import { FC } from 'react'

export const TopBar: FC<{ user: string }> = ({ user }) => {
	return (
		<>
			<Space h='md' style={crown} />
			<Group justify='space-between' style={topBar}>
				<img src='src/assets/fox icon.png' height='60px' />
				<div>Ready Player (FPO)</div>
				<Group>
					<Avatar src='src/assets/foxroyal.png' alt='SnuggleFox' />
					<p style={{ fontSize: 'small' }}>{user}</p>
				</Group>
			</Group>
		</>
	)
}

const crown = {
	background: '#363',
}

const topBar = {
	background: '#121',
	padding: 20,
}
