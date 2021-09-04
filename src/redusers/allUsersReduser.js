import { getAllUsers } from '../services/users'

const usersReduser = (state = [], action) => {

	switch(action.type){

	case 'INIT_USERS':
		return action.data

	default:
		return state
	}
}

export const initUsers = () => {
	return async dispatch => {
		const response = await getAllUsers()
		dispatch({ type: 'INIT_USERS', data: response.data })
	}

}

export default usersReduser