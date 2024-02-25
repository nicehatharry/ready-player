import { Button, Modal, PasswordInput, Stack, TextInput } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { FC, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { EMPTY_USER, userDataAtom } from '../atoms'
import { useAtom } from 'jotai'

export const LogInModal: FC = () => {
	const [opened, { open, close }] = useDisclosure(true)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [, setUserData] = useAtom(userDataAtom)

	const disableSignIn = useMemo(
		() => !username || !password,
		[password, username]
	)

	const handleSignIn = () => {
		setUserData({ ...EMPTY_USER, username: username })
		setUsername('')
		setPassword('')
		close()
	}

	return (
		<Modal
			opened={opened}
			onClose={open}
			withCloseButton={false}
			title='Ready Player?'>
			<form>
				<Stack>
					<TextInput
						label='username / email'
						placeholder='dingus mckraney'
						value={username}
						onChange={(e) => {
							setUsername(e.currentTarget.value)
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
