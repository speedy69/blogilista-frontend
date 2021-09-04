import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setMessage } from '../redusers/nofificationReducer'
import { addUser } from '../redusers/userReduser'
import userLogin from '../services/userLogin'

const Login = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = async (event) => {
		event.preventDefault()

		const user = await userLogin({ username : username, password: password })

		if(user){
			dispatch(addUser(user))
			dispatch(setMessage(`user ${user.name} logged in`, 'normal'))
			history.push('/')
		}else {
			dispatch(setMessage('wrong username or password', 'error'))
		}
	}

	return (
		<div>
			<p className='logintext'>log in to application</p>
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