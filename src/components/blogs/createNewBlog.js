import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBlog } from '../../redusers/blogsReduser'
import { setMessage } from '../../redusers/nofificationReducer'


const CreateNewBlog = () => {
	const user = useSelector(state => state.user)
	const dispatch = useDispatch()

	const [newTitle, setTitle] = useState('')
	const [newAuthor, SetAuthor] = useState('')
	const [newUrl, setUrl] = useState('')
	const [isHidden, setHidden] = useState(false)

	const handleSubmit = async (event) => {
		event.preventDefault()
		const test = dispatch(addBlog({ title: newTitle, author: newAuthor, url: newUrl, user: { name: user.name } }, user.token))
		console.log(test)
		dispatch(setMessage(`new blog ${newTitle} added`, 'normal'))
		setHidden([!isHidden[0], !isHidden[1]])

	}

	return(
		<>
			<button hidden={isHidden} onClick={() => setHidden(!isHidden)}>crete new blog</button>
			<form onSubmit={handleSubmit} hidden={!isHidden}>
				<table><tbody>
					<tr>
						<td>title:</td><td><input type='text' value={newTitle} onChange={(event) => setTitle(event.target.value)} /></td>
					</tr>
					<tr>
						<td>author:</td><td><input type='text' value={newAuthor} onChange={(event) => SetAuthor(event.target.value)} /></td>
					</tr>
					<tr>
						<td>url:</td><td><input type='text' value={newUrl} onChange={(event) => setUrl(event.target.value)} /></td>
					</tr>
					<tr>
						<td><button type='submit' >create</button></td>
					</tr>
				</tbody></table>
			</form>
			<button onClick={() => setHidden(!isHidden)} hidden={!isHidden}>cancel</button>
		</>
	)
}

export default CreateNewBlog