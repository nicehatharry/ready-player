import { Avatar, Button, Modal } from '@mantine/core'
import { FC, useContext } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { UserContext } from '../context'

export const LogOutButton: FC = () => {
	const [opened, { open, close }] = useDisclosure(false)
	const { user, setUser } = useContext(UserContext)

	const handleLogout = () => {
		setUser({ user: undefined })
		close()
	}
	return (
		<>
			<Button
				onClick={() => {
					open()
				}}
				variant='transparent'
				size='lg'>
				<Avatar src='src/assets/foxroyal.png' alt='SnuggleFox' />
				<p style={{ fontSize: 'small' }}>{user}</p>
			</Button>
			<Modal
				opened={opened}
				onClose={close}
				withCloseButton={false}
				title='Ready Player?'>
				<Button onClick={handleLogout}>Log Out</Button>
			</Modal>
		</>
	)
}
