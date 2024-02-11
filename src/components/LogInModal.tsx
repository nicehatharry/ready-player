import { Button, Modal, PasswordInput, Stack, TextInput } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { FC, useContext, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context'

export const LogInModal: FC = () => {
	const [, { open, close }] = useDisclosure(false)
	const [userName, setUserName] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const { user, setUser } = useContext(UserContext)

	const disableSignIn = useMemo(
		() => !userName || !password,
		[password, userName]
	)

	const handleSignIn = () => {
		setUser({ user: userName })
		setUserName('')
		setPassword('')
		close()
	}

	return (
		<Modal
			opened={!user}
			onClose={open}
			withCloseButton={false}
			title='Ready Player?'>
			<form>
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
					<Button type='submit' disabled={disableSignIn} onClick={handleSignIn}>
						Sign In
					</Button>
				</Stack>
			</form>
		</Modal>
	)
}
