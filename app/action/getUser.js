export function getUser(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())
}