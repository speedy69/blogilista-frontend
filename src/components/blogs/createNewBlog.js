import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useField } from '../../hooks'
import { addBlog } from '../../redusers/blogsReduser'
import { setMessage } from '../../redusers/nofificationReducer'


const CreateNewBlog = () => {
	const user = useSelector(state => state.user)
	const dispatch = useDispatch()

	const newTitle = useField('text')
	const newAuthor = useField('text')
	const newUrl = useField('text')
	const [isHidden, setHidden] = useState(false)

	const handleSubmit = (event) => {
		event.preventDefault()
		dispatch(addBlog({ title: newTitle.value, author: newAuthor.value, url: newUrl.value, user: { name: user.name } }, user.token))
		dispatch(setMessage(`new blog ${newTitle.value} added`, 'normal'))
		setHidden([!isHidden[0], !isHidden[1]])
	}

	return(
		<>
			<input type='button' value='create new' hidden={isHidden} onClick={() => setHidden(!isHidden)} />
			<form onSubmit={handleSubmit} hidden={!isHidden}>
				<table><tbody>
					<tr><td>title:</td><td><input {...newTitle} /></td></tr>
					<tr><td>author:</td><td><input {...newAuthor}/></td></tr>
					<tr><td>url:</td><td><input {...newUrl} /></td></tr>
					<tr><td><button type='submit' >create</button></td></tr>
				</tbody></table>
			</form>
			<input type='button' value='cancel' hidden={!isHidden} onClick={() => setHidden(!isHidden)} />
		</>
	)
}

export default CreateNewBlog