import { Button, PasswordInput, Stack, TextInput } from '@mantine/core'
import { FC, FormEvent, useState } from 'react'
import { addUserData } from '../postgres/userData'

export const SignUp: FC = () => {
	const [username, setUsername] = useState<string>()
	const [errorUsername, setErrorUsername] = useState<string>()
	const [email, setEmail] = useState<string>()
	const [errorEmail, setErrorEmail] = useState<string>()
	const [password, setPassword] = useState<string>()
	const [errorPassword, setErrorPassword] = useState<string>()

	const disableSubmit = Boolean(!username || !email || !password)

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		e.stopPropagation()
		// TODO: validate email, username, password
		validateUsername(username ?? '')
		validateEmail(email ?? '')
		validatePassword(password ?? '')
		if (disableSubmit) return
		try {
			await addUserData({
				username: username!,
				email: email!,
				password: password!,
			})
		} catch (e) {
			console.error(e)
		}
	}

	const validateUsername = (inputUsername: string) => {
		const usernameRegex = new RegExp(/^[\w\s]{4,24}$/)
		if (!usernameRegex.test(inputUsername)) {
			setErrorUsername(
				'Username may be 4 to 24 characters long and contain only letters, underscores and spaces.'
			)
		} else {
			setErrorUsername(undefined)
		}
	}

	const validateEmail = (inputEmail: string) => {
		const emailRegex = new RegExp(/^\S+@\S+\.\S+$/)
		if (!emailRegex.test(inputEmail)) {
			setErrorEmail('Please enter a valid email.')
		} else {
			setErrorEmail(undefined)
		}
	}

	const validatePassword = (inputPassword: string) => {
		const passwordRegex = new RegExp(/.{8,40}/)
		if (!passwordRegex.test(inputPassword)) {
			setErrorPassword('Password must be 8 to 40 characters long.')
		} else {
			setErrorPassword(undefined)
		}
	}

	return (
		<form style={formBlock} onSubmit={handleSubmit}>
			<Stack style={inputsBlock}>
				<h2 style={header}>Player Deetz</h2>
				<TextInput
					style={inputs(Boolean(errorUsername))}
					label='username'
					placeholder='magnum_nopeus'
					onChange={(e) => {
						if (errorUsername) {
							validateUsername(e.currentTarget.value)
						}
						setUsername(e.currentTarget.value)
					}}
					error={errorUsername}
				/>
				<TextInput
					style={inputs(Boolean(errorEmail))}
					label='email'
					placeholder='themoustache@selleck.com'
					onChange={(e) => {
						if (errorEmail) {
							validateEmail(e.currentTarget.value)
						}
						setEmail(e.currentTarget.value)
					}}
					error={errorEmail}
				/>
				<PasswordInput
					style={inputs(Boolean(errorPassword))}
					label='password'
					placeholder='******'
					onChange={(e) => {
						if (errorPassword) {
							validatePassword(e.currentTarget.value)
						}
						setPassword(e.currentTarget.value)
					}}
					error={errorPassword}
				/>
				<Button type='submit' disabled={disableSubmit} style={submitButton}>
					Sign Up!
				</Button>
			</Stack>
		</form>
	)
}

const formBlock = {
	display: 'flex',
	justifyContent: 'center',
}

const header = {
	alignSelf: 'center',
	fontSize: 36,
}

const inputsBlock = {
	color: '#000',
	width: '50vw',
}

const inputs = (isError: boolean) => ({
	marginBottom: isError ? 0 : 19,
})

const submitButton = {
	alignSelf: 'center',
	marginTop: 40,
	width: 400,
}
