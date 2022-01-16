import React, { useState } from 'react'

type AuthUser = {
    name:string,
    email:string,
}

const User = ({name,email}:AuthUser) => {
    const [user, setUser] = useState<null | AuthUser>(null);
    const handleLogin = () => {
        setUser(
            {
                name,
                email
            }
        )
    }
    const handleLogout = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Set user</button>
            <button onClick={handleLogout}>Refresh</button>
            <p>User name is {user?.name}</p>
            <p>User email is {user?.email}</p>
        </div>
    )
}

export default User
