import { Button, Notification, Stack } from '@mantine/core'
import { ReactElement, useState } from 'react'

export const TableMaint = () => {
	const [notifications, setNotifications] = useState<ReactElement[]>([])

	const handleBuildUserTable = async () => {
		let result: unknown

		try {
			result = await (await fetch('/api/createUserTable')).text()
			setNotifications((prev) => [
				...prev,
				<Notification title='Table Created'>{String(result)}</Notification>,
			])
		} catch (err) {
			console.error(err)
			setNotifications((prev) => [
				...prev,
				<Notification color='red' title='ERROR'>
					{String(result)}
					ERROR: {String(err)}
				</Notification>,
			])
		}
	}

	// const handleTestFn = async () => {
	// 	let result: unknown
	// 	try {
	// 		console.log('fetchin...')
	// 		result = await (await fetch('/api/test')).text()
	// 		console.log(result)
	// 		setNotifications((prev) => [
	// 			...prev,
	// 			<Notification title='Test'>{String(result)}</Notification>,
	// 		])
	// 	} catch (err) {
	// 		console.error(err)
	// 		setNotifications((prev) => [
	// 			...prev,
	// 			<Notification color='red' title='ERROR'>
	// 				{String(result)}
	// 				ERROR: {String(err)}
	// 			</Notification>,
	// 		])
	// 	}
	// }

	return (
		<div style={pageStyle}>
			<Stack>
				{/* <Button onClick={handleTestFn}>Test</Button> */}
				<Button onClick={handleBuildUserTable}>Build Users table</Button>
				{...notifications}
			</Stack>
		</div>
	)
}

const pageStyle = {
	display: 'flex',
	justifyContent: 'center',
	margin: '200px',
}
