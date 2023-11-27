import { getUser } from "../../action/getUser"

export default async function User({params: { userId }}) {
    const user = await getUser(userId)

    // console.log(userId);

    return (<>
        <div>{user.name}</div>
    </>)
}

export async function generateStaticParams() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await response.json()

    return users.map((user) => {
        return {
            userId: JSON.stringify(user.id)
        }
    })
}