import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../styles/menu.css'

const Menu = () => {
	const user = useSelector(state => state.user)

	return(
		<><div className='links'>
			<Link className='link' to='/'>home</Link>
			<Link className='link' to='/users'>users</Link>
			<Link className='link' to='/blogs'>blogs</Link>
			{user ? <em className='user'>{user.name} logged in</em> : <Link className='link' to='/login'>login</Link>}
			{user ? <input className='linksButton' type='button' value='logout' /> : null }
		</div><div>
			<p className='blogtext'>Blog app</p>
		</div></>
	)
}

export default Menu
