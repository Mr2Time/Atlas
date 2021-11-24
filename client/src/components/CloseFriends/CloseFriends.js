import React from 'react'
import "./CloseFriends.scss"

const CloseFriends = ({user}) => {
    return (
        <li className='friend'>
        <img className='friend-img' src={user.profilePicture} alt="" />
        <span className='friend-name'>{user.username}</span>
    </li>
    )
}

export default CloseFriends
