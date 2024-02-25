import { sql } from '@vercel/postgres'
import { UserData } from '../atoms'

export async function getUserData(userId: string): Promise<void> {
	const { rows } =
		await sql`SELECT * from USERS where username=${userId} OR email=${userId}`
	console.log(rows)
}

export async function addUserData({
	name,
	username,
	email,
	password,
	avatar,
}: UserData): Promise<void> {
	console.log('attempting user add')
	console.log('Postgres URL', process?.env?.POSTGRES_URL)
	const { rows } = await sql`
    INSERT INTO users VALUES
        (${email}, ${name}, ${password}, ${username}, ${avatar});`

	console.log('Added rows')
	console.log(rows)
}
