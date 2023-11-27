import Link from "next/link"

export default async function Users() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const result = await response.json()

    return (<>
        <h2>Users</h2>
        <ul>
            {result.map(({name, id}) => {
                return <li key={id}>
                    <Link href={`users/${id}`}>{name}</Link>
                </li>
            })}
        </ul>
    </>)
}