import axios from 'axios'

const url = 'http://localhost:3002/api/blogs/'

const getAll =  async () => {
	const promise = await axios.get(url)
	return promise
}

const setToken = token => {
	return `bearer ${token}`
}

const postBlog = async (data, token) => {
	try{
		const promise = await axios.post(url, data, { headers: { Authorization: setToken(token) } })
		return promise
	}catch(e){
		return { status: 400, data: 'cant´t do' }
	}
}

const updateBlog = async (id, data) => {
	try{
		const promise = await axios.put(`${url}${id}`, data)
		return promise
	}catch(e){
		return { status: 400, data: 'invalid id' }
	}
}

const removeBlog = async (id, token) => {
	try{
		const promise = await axios.delete(`${url}${id}`, { headers: { Authorization: setToken(token) } })

		return promise
	}catch(e){
		return { status: 400, data: e }
	}
}


export { getAll, postBlog, updateBlog, removeBlog }