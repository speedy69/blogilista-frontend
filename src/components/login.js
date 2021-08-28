import React, { useState } from 'react'
import userLogin from '../services/userLogin'
import Notification from './notification'

const Login = ({ setters, message }) => {
  	const [setUser, setMessage, setVisibility] = setters
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = async (event) => {
    event.preventDefault()
    try{
    	const user = await userLogin({ username : username, password: password })
		if(user){
			setUser(user)
			setUsername(''); setPassword('')
			setVisibility(true)
		} else {
			setMessage('wrong username or password')
			setTimeout(() => {
				setMessage(null)
			}, 3500);
		}
    	
    } catch (expect){
    	console.log(expect)
    }
	}

	return (
		<div>
			<p className='logintext'>log in to application</p>
			<Notification message={message} />
			<form onSubmit={handleSubmit}>
        	username: <br/>
			<input value={username} type='text' onChange={(event) => setUsername(event.target.value)}/> <br />
        	password:<br/>
			<input value={password} type='password' onChange={(event) => setPassword(event.target.value)}/> <br />
			<p><button type='submit'>login</button></p>
			</form>
		</div>
	)
}

export default Login