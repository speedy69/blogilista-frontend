import React, { useEffect } from 'react'
import './styles/App.css'
import Login from './components/login'
import Blogs from './components/blogs/blogs'
import { initBlogs } from './redusers/blogsReduser'
import { initUsers } from './redusers/allUsersReduser'
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import Users from './components/users/users'
import Menu from './components/menu'
import User from './components/users/user'
import Blog from './components/blogs/blog'

function App() {
	const user = useSelector(state => state.user)
	const dispatch = useDispatch()

	useEffect( () => {
		dispatch(initBlogs())
		dispatch(initUsers())
	}, [])

	return (
		<>
			<Menu />
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
						test
					</div>
				</Route>
			</Switch>
		</>

	)
}

export default App