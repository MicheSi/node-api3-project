import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const UserCard = props => {
    return (
        <div className='userCard'>
            <Card body>
            <CardTitle>{props.name}</CardTitle>
            <Button>See More Details</Button>
            </Card>
        </div>
    )
}

export default UserCard;