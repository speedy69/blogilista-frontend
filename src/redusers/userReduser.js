
const userReduser = (state = null, action) => {

	switch(action.type){
	case 'USER':
		return { ...action.data }
	default:
		return state
	}
}

export const addUser = (user) => {
	return { type: 'USER', data: user }
}

export default userReduser