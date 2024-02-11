import { Group, Space } from '@mantine/core'
import { FC } from 'react'
import { LogOutButton } from '.'

export const TopBar: FC = () => {
	return (
		<>
			<Space h='md' style={crown} />
			<Group justify='space-between' style={topBar}>
				<img src='src/assets/fox icon.png' height='40px' />
				<div>Ready Player (FPO)</div>
				<LogOutButton />
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
