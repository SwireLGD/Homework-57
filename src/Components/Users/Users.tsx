import React from 'react'
import { User } from '../../types'
import UserItem from './UserItem'

interface Props {
    users: User[]
}

const Users: React.FC<Props> = ({ users }) => {
    return (
        <>
            <h2 className="mb-5">Users</h2>
            {users.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </>
    )
}

export default Users
