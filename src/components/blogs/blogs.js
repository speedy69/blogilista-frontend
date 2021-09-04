/* eslint-disable react/react-in-jsx-scope */
import CreateNewBlog from './createNewBlog'
import BlogList from './blogList'

const Blogs = () => {
	return(
		<div className='blogs' >
			<CreateNewBlog />
			<BlogList />
		</div>
	)
}

export default Blogs