import { Avatar, Button, Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useAtom } from 'jotai'
import { FC } from 'react'
import { UserData, userDataAtom } from '../atoms'

const AvatarOrEmpty: FC<{ user: UserData | undefined; open: () => void }> = ({
	user,
	open,
}) => {
	return user ? (
		<Button
			onClick={() => {
				open()
			}}
			variant='transparent'
			size='lg'>
			<Avatar src='src/assets/foxroyal.png' alt='SnuggleFox' />
			<p style={usernameStyle}>{user.username}</p>
		</Button>
	) : (
		<Avatar src='' alt='No user logged in' />
	)
}

export const LogOutButton: FC = () => {
	const [opened, { open, close }] = useDisclosure(false)
	const [user, setUser] = useAtom(userDataAtom)

	const handleLogout = () => {
		setUser(undefined)
		close()
	}
	return (
		<>
			<AvatarOrEmpty user={user} open={open} />
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

const usernameStyle = {
	color: '#000',
	fontSize: 'small',
}
