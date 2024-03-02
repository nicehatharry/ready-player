import { QueryResultRow, sql } from '@vercel/postgres'
import { UserData } from '../atoms'

export async function getUserData(
	userId: string,
	password: string
): Promise<QueryResultRow | undefined> {
	const { rows } = await sql`
	SELECT * FROM users
		WHERE (username = '${userId}' AND password = '${password}')
		OR (email = '${userId}' AND password = '${password}');
`
	return rows.length === 0 ? undefined : rows[0]
}

export async function addUserData({
	username,
	email,
	password,
}: UserData): Promise<void> {
	console.log('attempting user add')
	console.log('Postgres URL', process?.env?.POSTGRES_URL)
	const { rows } = await sql`
    INSERT INTO users VALUES
        ('${email}', '${password}', '${username}');`

	console.log('Added rows')
	console.log(rows)
}

export async function createUserTable(): Promise<string> {
	try {
		await sql`
		DROP TABLE IF EXISTS users;`
		await sql`
        CREATE TABLE IF NOT EXISTS users (
            email varchar(40) NOT NULL,
            password varchar(40) NOT NULL,
            username varchar(40) NOT NULL,
            CONSTRAINT email_username PRIMARY KEY (email,username)
            ); `
		return 'success'
	} catch (err) {
		return 'failure'
	}
}
