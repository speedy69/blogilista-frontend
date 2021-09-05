import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useField } from '../hooks'
import { setMessage } from '../redusers/nofificationReducer'
import { addUser } from '../redusers/userReduser'
import userLogin from '../services/userLogin'

const Login = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const username = useField('text')
	const password = useField('password')

	const handleSubmit = async (event) => {
		event.preventDefault()

		const user = await userLogin({ username : username.value, password: password.value })

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
				<input {...username} /> <br />
				password:<br/>
				<input {...password} /> <br />
				<p><button type='submit'>login</button></p>
			</form>
		</div>
	)
}

export default Login