import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { addLike } from '../../redusers/blogsReduser'
import { updateBlog } from '../../services/blog'

const Blog = () => {
	const id = useParams().id
	const blog = useSelector(state => state.blogs).find(blog => blog.id === id)
	const dispatch = useDispatch()

	if(!blog) return null

	return (
		<div>
			<h2>{blog.title}</h2>
			<a href={blog.url}>{blog.url}</a>
			<br></br>
			{blog.likes} likes
			<input type='button' value='vote' onClick={() => updateBlog(id).then(res => dispatch(addLike(id, res.data.likes)))} style={{ marginLeft: 5 }}/>
			<br></br>
			added by {blog.user.name}
			<h3>comments</h3>
			<input />
			<input type='button' value='add comment' />
		</div>
	)
}

export default Blog