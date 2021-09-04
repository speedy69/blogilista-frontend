import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const BlogList = () => {
	const blogs = useSelector(state => state.blogs)

	return(
		<div>
			{blogs.map((blog) => {
				return <li key={blog.id} >
					<Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
				</li>
			})}
		</div>
	)
}

export default BlogList