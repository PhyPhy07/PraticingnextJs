import React from 'react'

interface User {
    id: number
    name: string
   
}
const UsersPage = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' })
   const users : User[] = await res.json()
 
  return (
    <div className="font-dm-sans">
      <h1 className="text-2xl font-bold">Users</h1>
      <p className="font-azeret-mono text-sm text-gray-600 mt-1">
        {new Date().toLocaleTimeString()}
      </p>
      <ul className="mt-6 space-y-2">
        {users.map((user) => (
          <li key={user.id} className="flex items-center gap-3">
            <span className="font-azeret-mono text-sm text-gray-500 tabular-nums">
              #{user.id}
            </span>
            <span>{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )

}

export default UsersPage //server component, we can use async await to fetch data from the server and it will be cached for 1 hour