import axios from 'axios'

const userLogin = async (data) => {
    try{
        const promise = await axios.post('http://localhost:3002/api/login', data)
        return promise.data
    } catch(e) {}
}

export default userLogin