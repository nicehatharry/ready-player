import { Group, Space } from '@mantine/core'
import { FC } from 'react'
import { LogOutButton } from '.'
import { crown, topBar } from '../styles'

export const TopBar: FC = () => {
	return (
		<>
			<Space h='md' style={crown} />
			<Group justify='space-between' style={topBar}>
				<img src='src/assets/fox icon.png' height='40px' />
				<div style={title}>Ready Player</div>
				<LogOutButton />
			</Group>
		</>
	)
}

const title = {
	color: '#EEE',
	fontSize: 48,
	fontWeight: 700,
	textShadow: `
       3px 3px 0 #000,
     -1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000`,
}
