import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

const Blog = () => {
	const id = useParams().id
	const blog = useSelector(state => state.blogs.find(b => b.id === id))

	return(
		<div>
			<h2>{blog ? blog.title : null}</h2>
			{blog ? blog.url: null}
			{blog ? blog.likes : null} likes
		</div>
	)
}

export default Blog