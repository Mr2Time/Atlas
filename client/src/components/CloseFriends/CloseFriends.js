import React from 'react'
import "./CloseFriends.scss"

const CloseFriends = ({user}) => {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;


    return (
        <li className='friend'>
        <img className='friend-img' src={PF+user.profilePicture} alt="" />
        <span className='friend-name'>{user.username}</span>
    </li>
    )
}

export default CloseFriends
