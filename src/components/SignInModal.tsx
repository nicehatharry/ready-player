import { useDisclosure } from '@mantine/hooks'
import { Modal, Button, TextInput, Stack, PasswordInput } from '@mantine/core'
import { FC, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

export const SignInModal: FC<{
	isOpen: boolean
	setUser: React.Dispatch<React.SetStateAction<string>>
}> = ({ isOpen, setUser }) => {
	const [opened, { open, close }] = useDisclosure(false)
	const [userName, setUserName] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const disableSignIn = useMemo(
		() => !userName || !password,
		[password, userName]
	)

	useEffect(() => {
		if (isOpen) open()
	}, [isOpen, open])

	return (
		<Modal
			opened={opened}
			onClose={open}
			withCloseButton={false}
			title='Ready Player?'>
			<Stack>
				<TextInput
					label='username / email'
					placeholder='dingus mckraney'
					value={userName}
					onChange={(e) => {
						setUserName(e.currentTarget.value)
					}}
				/>
				<PasswordInput
					label='password'
					placeholder='********'
					value={password}
					onChange={(e) => {
						setPassword(e.currentTarget.value)
					}}
					style={{ marginBottom: '-10px' }}
				/>
				<Link to='/sign-up' style={{ fontSize: 'small' }}>
					Sign Up...
				</Link>
				<Button
					disabled={disableSignIn}
					onClick={() => {
						setUser(userName)
						close()
					}}>
					Sign In
				</Button>
			</Stack>
		</Modal>
	)
}
