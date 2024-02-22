import { Paper } from '@mantine/core'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { TopBar } from '../components'
import { background } from '../styles'

export const Root: FC = () => {
	return (
		<Paper style={background}>
			<TopBar />
			<Outlet />
		</Paper>
	)
}
