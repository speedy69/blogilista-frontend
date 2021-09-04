
const notificatioReducer = (state = { message: null, type: 'normal' }, action) => {

	switch(action.type){
	case 'SET_MSG':
		return { message: action.message, type: action.messageType }
	default:
		return state
	}
}

let timeoutID
export const setMessage = (msg, type) => {
	return dispatch => {
		clearTimeout(timeoutID)
		dispatch({ type: 'SET_MSG', message: msg, messageType: type })
		setTimeout(() => {
			dispatch({ type: 'SET_MSG', message: null, messageType: type })
		}, 2500)
	}
}

export default notificatioReducer