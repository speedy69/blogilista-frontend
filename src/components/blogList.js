import '../styles/bloglist.css'
import { handleClickView, handleClickHide, handleClickLike, handleClickDelete } from '../utils/blogListHandlers' 

const BlogList = ({blogs, setters, token}) => {
    const [setBlogs, setMessage] = setters
   
    const handleClick = (e) => {
        if(e.target.className === 'like'){
            handleClickLike(e.target.value, blogs, setBlogs, setMessage)
        }
        if(e.target.className === 'delete'){
            handleClickDelete(e.target.value, token, blogs, setBlogs, setMessage)
        }
    }

    return(
        <>
        {blogs.map((b, i) =>               
            <div key={b.id} className='bloglist'>
                <p hidden={false} id={i}>{b.title} {b.author} <button value={i} onClick={handleClickView}>view</button></p>
                <p hidden={true} id={i+'a'}>{b.title} {b.author} <button value={i} onClick={handleClickHide}>hide</button><br/>
                    {b.url}<br/>{b.likes} <button value={b.id} className='like' onClick={handleClick}>like</button><br/>
                    {b.user.name}<br/>
                    <button value={b.id} className='delete' onClick={handleClick}>remove</button>
                </p>
            </div>                 
            )}
        </>
    )
}

export default BlogList