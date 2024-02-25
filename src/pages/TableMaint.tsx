import { Button, Notification, Stack } from '@mantine/core'
import { QueryResult, sql } from '@vercel/postgres'
import { ReactElement, useState } from 'react'

export const TableMaint = () => {
	const [notifications, setNotifications] = useState<ReactElement[]>([])

	const handleBuildUserTable = async () => {
		let result: QueryResult
		try {
			result = await sql`
        CREATE TABLE IF NOT EXISTS users (
            email varchar(40) NOT NULL,
            name varchar(40) NOT NULL,
            password varchar(40) NOT NULL,
            username varchar(40) NOT NULL,
            avatar varchar(256)
            CONSTRAINT email_username PRIMARY KEY (email,username)
            ); `
			setNotifications((prev) => [
				...prev,
				<Notification title='Table Created'>
					Rows: {result.rowCount}
				</Notification>,
			])
		} catch (err) {
			console.error(err)
			setNotifications((prev) => [
				...prev,
				<Notification color='red' title='ERROR'>
					{result.command}
					{String(err)}
				</Notification>,
			])
		}
	}

	return (
		<div style={pageStyle}>
			<Stack>
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
