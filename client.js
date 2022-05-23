import sql from './db.js'
async function getUsersOver(age) {
	const users = await sql `
		select
			name,
			age
		from users
		where age > ${ age }
	`
	return users
}

async function insertUser( { name, age } ){
	const users = await sql `
		insert users
			(name, age)
		values 
			(${ name }, ${ age })
		returning name, age

		return users
}
