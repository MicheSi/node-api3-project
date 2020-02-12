import React, {useState, useEffect} from 'react';
import axios from 'axios';
import UserCard from './UserCard';

const UserList = props => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
        .get('http://localhost:5000/api/users')
        .then(res => {
            console.log(res.data)
            setUsers(res.data)
        })
        .catch(err => console.log("Cannot get users", err))
    }, [])

    return (
        <div className='userList'>
            {users.map(user => (
                <UserCard
                 key={user.id}
                 id={user.id}
                 name={user.name}
                />
            ))}
        </div>
    )
}

export default UserList;