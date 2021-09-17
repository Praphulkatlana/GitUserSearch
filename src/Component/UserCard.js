import React from 'react'
import {Card,CardBody} from 'reactstrap'

function UserCard({user}) {
    return (
        <Card className="text-center mt-3 mb-6">
        <img src={user.avatar_url} className="user-img" alt="Img"/>
        <CardBody >
        <div className="text-primary">{user.name}</div>
        <div className="text-primary">{user.email}</div>
        <div className="text-primary">{user.location}</div>
        <div className="text-success">Follwers: {user.followers}</div>
        </CardBody>
        </Card>
    )
}

export default UserCard
