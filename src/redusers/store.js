import { applyMiddleware, combineReducers, createStore } from 'redux'
import blogsReduser from './blogsReduser'
import notificatioReducer from './nofificationReducer'
import userReduser from './userReduser'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import usersReduser from './allUsersReduser'

const reduser = combineReducers({
	blogs: blogsReduser,
	user: userReduser,
	notification: notificatioReducer,
	users: usersReduser,
})

export default createStore(reduser, composeWithDevTools(applyMiddleware(thunk)))