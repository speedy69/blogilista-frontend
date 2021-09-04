import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../styles/blogList.css'

const BlogList = () => {
	const blogs = useSelector(state => state.blogs)

	return(
		<div>
			{blogs.map((blog) => {
				return <div key={blog.id} className='blogList' >
					<Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
					{blog.author}
				</div>
			})}
		</div>
	)
}

export default BlogList