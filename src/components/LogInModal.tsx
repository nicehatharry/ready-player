import {
	Alert,
	Button,
	Modal,
	PasswordInput,
	Stack,
	TextInput,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { FC, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { userDataAtom } from '../atoms'
import { useAtom } from 'jotai'
import { getUserData } from '../postgres'

export const LogInModal: FC = () => {
	const [opened, { open, close }] = useDisclosure(true)
	const [userId, setUserId] = useState<string>()
	const [error, setError] = useState<string>()
	const [password, setPassword] = useState<string>()
	const [, setUserData] = useAtom(userDataAtom)

	const disableSignIn = useMemo(() => !userId || !password, [password, userId])

	const handleSignIn = async () => {
		if (!userId || !password) return
		await getUserData(userId, password)
			.then((user) => {
				if (user) {
					console.log(user)
					setUserData({
						username: user.username,
						email: user.email,
					})
					setUserId('')
					setPassword('')
					close()
				} else {
					setError('username/email and password combination do not match')
				}
			})
			.catch((err) => {
				setError(`ERROR: ${err}`)
			})
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
						value={userId}
						onChange={(e) => {
							setUserId(e.currentTarget.value)
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
					<Button disabled={disableSignIn} onClick={handleSignIn}>
						Sign In
					</Button>
					{error && (
						<Alert color='red' variant='outline'>
							{error}
						</Alert>
					)}
				</Stack>
			</form>
		</Modal>
	)
}
