import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { addLike } from '../../redusers/blogsReduser'
import { updateBlog } from '../../services/blog'

const Blog = () => {
	const id = useParams().id
	const blog = useSelector(state => state.blogs).find(blog => blog.id === id)
	const dispatch = useDispatch()

	return (
		<div>
			<h2>{blog ? blog.title : null}</h2>
			<a href={blog ? blog.url : null}>{blog ? blog.url : null}</a>
			<br></br>
			{blog ? blog.likes : null} likes
			<input type='button' value='vote' onClick={() => updateBlog(id).then(res => dispatch(addLike(id, res.data.likes)))} style={{ marginLeft: 5 }}/>
			<br></br>
			added by {blog ? blog.user.name : null}
		</div>
	)
}

export default Blog