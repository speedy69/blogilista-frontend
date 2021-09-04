import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Users = () => {
	const users = useSelector(state => state.users)

	return(
		<table>
			<tbody>
				<tr>
					<td></td><td><strong>Blogs created</strong></td>
				</tr>

				{users.map(user => {
					return <tr key={user.id}><td><Link to={`/users/${user.id}`}>{user.name}</Link></td><td>{user.blogs.length}</td></tr>
				})}

			</tbody>
		</table>
	)
}

export default Users