import { Paper } from '@mantine/core'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { TopBar } from '../components'

export const Root: FC = () => {
	return (
		<Paper style={sideBars}>
			<TopBar />
			<Outlet />
		</Paper>
	)
}

const sideBars = {
	background: 'black',
	height: '100vh',
	padding: '0 120px',
}
