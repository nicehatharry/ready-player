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
	const { rows } = await sql`
    CREATE TABLE IF NOT EXISTS users (
        email varchar(40) NOT NULL,
        name varchar(40) NOT NULL,
        password varchar(40) NOT NULL,
        username varchar(40) NOT NULL,
        avatar varchar(256)
        CONSTRAINT email_username PRIMARY KEY (email,username)
        ); 
    INSERT INTO users VALUES
        (${email}, ${name}, ${password}, ${username}, ${avatar});`

	console.log('Added rows')
	console.log(rows)
}
