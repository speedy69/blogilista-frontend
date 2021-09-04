/* eslint-disable no-case-declarations */
import { getAll, postBlog } from '../services/blog'
const stateAtFirst = [{ title: 'not loaded yet or connection to server is down', author: 'db-server', url: 'http://localhost', user: { name: 'down' }, id:'1', likes: 0 }]

const blogsReduser = (state = stateAtFirst, action) => {

	switch(action.type){
	case 'INIT_BLOGS':
		return action.data

	case 'ADD_LIKE':
		const temp = [...state]
		temp.forEach(find => {
			find.id === action.id ? find.likes = action.likes : null
		})
		return temp

	case 'ADD_BLOG':
		return state.concat(action.data)

	case 'DELETE_BLOG':
		return state.filter(f => f.id !== action.id)

	default:
		return state
	}

}

export const addLike = (id, likes) => {
	return { type: 'ADD_LIKE', id: id, likes: likes }
}

export const deleteBlog = (id) => {
	return { type: 'DELETE_BLOG', id: id }
}

export const initBlogs = () => {
	return async dispatch => {
		const response = await getAll()
		dispatch({ type: 'INIT_BLOGS', data: response.data })
	}
}

export const addBlog = (blog, token) => {
	return async dispatch => {
		const response = await postBlog(blog, token)
		dispatch({ type: 'ADD_BLOG' , data: response.data })
	}
}

export default blogsReduser