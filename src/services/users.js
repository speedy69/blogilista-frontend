import axios from 'axios'

const url = 'http://localhost:3002/api/users'

const getAllUsers = async () => {
	try{
		const response = await axios.get(url)
		return response
	} catch(e){
		null
	}
}

export { getAllUsers }