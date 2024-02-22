import { Avatar, Button, Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useAtom } from 'jotai'
import { FC } from 'react'
import { userDataAtom } from '../atoms'

export const LogOutButton: FC = () => {
	const [opened, { open, close }] = useDisclosure(false)
	const [user, setUser] = useAtom(userDataAtom)

	const handleLogout = () => {
		setUser(undefined)
		close()
	}
	return (
		<>
			<Button
				disabled={!user}
				onClick={() => {
					open()
				}}
				variant='transparent'
				size='lg'>
				<Avatar src='src/assets/foxroyal.png' alt='SnuggleFox' />
				<p style={{ fontSize: 'small' }}>{user?.username}</p>
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
