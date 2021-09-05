import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

const User = () => {
	const id = useParams().id
	const user = useSelector(state => state.users.find(u => u.id === id))

	if(!user) return null

	return(
		<div>
			<h2>{user.name}</h2>
			<h3>added blogs</h3>
			{user.blogs.map(b => <li key={b.id}><Link to={`/blogs/${b.id}`}>{b.title}</Link></li>)}
		</div>
	)
}

export default User