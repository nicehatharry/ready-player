import { Button, PasswordInput, Stack, TextInput } from '@mantine/core'
import { FC, FormEvent, useState } from 'react'
import { addUserData } from '../postgres/userData'

export const SignUp: FC = () => {
	const [name, setName] = useState<string>()
	const [username, setUsername] = useState<string>()
	const [email, setEmail] = useState<string>()
	const [password, setPassword] = useState<string>()
	const [avatar, setAvatar] = useState<string>()

	const disableSubmit = Boolean(!name || !username || !email || !password)

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		e.stopPropagation()
		// TODO: validate email, username, password
		if (disableSubmit) return
		try {
			await addUserData({
				name: name!,
				username: username!,
				email: email!,
				password: password!,
				avatar: avatar ?? '',
			})
		} catch (e) {
			console.error(e)
		}
	}

	return (
		<form style={formBlock} onSubmit={handleSubmit}>
			<Stack style={inputsBlock}>
				<h2 style={header}>Player Deets</h2>
				<TextInput
					label='name'
					placeholder='Terd Furgeson'
					onChange={(e) => {
						setName(e.currentTarget.value)
					}}
				/>
				<TextInput
					label='username'
					placeholder='magnum_nopeus'
					onChange={(e) => {
						setUsername(e.currentTarget.value)
					}}
				/>
				<TextInput
					label='email'
					placeholder='themoustache@selleck.com'
					onChange={(e) => {
						setEmail(e.currentTarget.value)
					}}
				/>
				<PasswordInput
					label='password'
					placeholder='******'
					onChange={(e) => {
						setPassword(e.currentTarget.value)
					}}
				/>
				<TextInput
					label='avatar url'
					placeholder='www.avatarsource.com/hotpix/asflidnht.png'
					onChange={(e) => {
						setAvatar(e.currentTarget.value)
					}}
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

const submitButton = {
	alignSelf: 'center',
	marginTop: 40,
	width: 400,
}
