import React, {useState} from "react";
// import {useNavigate} from 'react-router-dom'
import './Profile.css'

export default function Profile({ user, setUser }) {

    const { username, name } = user

    // const navigate = useNavigate('')

    const [changeName, setChangeName] = useState('')
    const [changeUsername, setChangeUsername] = useState('')
    const [profileMessage, setProfileMessage] = useState(null)

    const onSubmit = (e) => {

        e.preventDefault()
        const newUserInfo = {
            name: changeName,
            username: changeUsername
        }
        fetch('/profile_change', {
            method: "UPDATE",
            header: "Content-Type: application/json",
            body: JSON.stringify(newUserInfo)
        })
        .then(res => {
            if(res.ok) {
                res.json()
                .then(newUserInfo => {
                    setUser(newUserInfo)
                    setProfileMessage('Your profile has been updated')
                    // navigate('/profile')
                })
            }
        })
    }

  return (
    <>
        <div className="div1">
            <li>Name: {name}</li>
            <li>Username: {username}</li>
            {profileMessage ? <li>{profileMessage}</li> : null}
        </div>
            <div>
                <form onSubmit={e => onSubmit}>
                        <input
                            type="text"
                            value={changeName}
                            onChange={e => setChangeName(e.target.value)}
                            name="name"
                            placeholder="Change your name"
                            />
                        <input 
                            type="text"
                            value={changeUsername}
                            onChange={e=> setChangeUsername(e.target.value)}
                            name="username"
                            placeholder="Change your Username"
                            />      
                        <button type="submit">Submit</button>
                </form>
            </div>
    </>
  )
}
