import { Center, Paper, Stack, Title } from '@mantine/core'
import { FC } from 'react'
import { useRouteError } from 'react-router-dom'

export const ErrorPage: FC = () => {
	const error =
		(useRouteError() as { statusText?: string; message?: string }) || undefined
	console.error(error)
	return (
		<Center h='500'>
			<Paper shadow='md' p='xl' style={paperStyles}>
				<Stack>
					<Title>That's a bad day</Title>
					Something's happening here, but what it is ain't exactly clear.
					<i>{error?.statusText || error?.message}</i>
				</Stack>
			</Paper>
		</Center>
	)
}

const paperStyles = {
	background: '#200',
}
