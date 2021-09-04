/* eslint-disable react/react-in-jsx-scope */
import CreateNewBlog from './createNewBlog'
import Notification from '../notification'
import BlogList from './blogList'


const Blogs = () => {


	return(
		<div className='blogs' >
			<Notification />
			<p className='blogtext'>create new</p>
			<CreateNewBlog />
			<BlogList />
		</div>
	)
}

export default Blogs