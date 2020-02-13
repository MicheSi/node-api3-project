import React from 'react';
import { Card, Button, CardTitle } from 'reactstrap';

const UserCard = props => {
    const onClick = e => {
        e.preventDefault();
        window.location.href = `/users/${props.id}`
    }

    return (
        <div className='userCard'>
            <Card body>
            <CardTitle>{props.name}</CardTitle>
            <Button onClick={onClick}>See More</Button>
            </Card>
        </div>
    )
}

export default UserCard;