import React, { useEffect } from 'react'
import './styles/App.css'
import { initBlogs } from './redusers/blogsReduser'
import { initUsers } from './redusers/allUsersReduser'
import { useDispatch, useSelector } from 'react-redux'
import Notification from './components/notification'
import Menu from './components/menu'
import { Switch, Route, Redirect } from 'react-router-dom'
import User from './components/users/user'
import Blog from './components/blogs/blog'
import Login from './components/login'
import Blogs from './components/blogs/blogs'
import Users from './components/users/users'


function App() {
	const dispatch = useDispatch()
	const user = useSelector(state => state.user)

	useEffect(() => {
		dispatch(initBlogs())
		dispatch(initUsers())
	}, [])

	return (
		<div>
			<Menu />
			<Notification />
			<Switch>
				<Route path='/blogs/:id'>
					<Blog />
				</Route>
				<Route path='/blogs'>
					<div>
						<Blogs />
					</div>
				</Route>
				<Route path='/users/:id'>
					<User />
				</Route>
				<Route path='/users'>
					<div>
						{user ? <Users /> : <Redirect to='/login' />}
					</div>
				</Route>
				<Route path='/login'>
					<Login />
				</Route>
				<Route path='/'>
					<div>
						{user ? <p>test</p> : <Redirect to='/login' />}
					</div>
				</Route>
			</Switch>
		</div>
	)
}

export default App