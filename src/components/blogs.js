import CreateNewBlog from "./createNewBlog"
import Notification from "./notification"
import BlogList from "./blogList"


const Blogs = ({ setters, blogList, user, message,  }) => {
    const [setBlogs, setUser, setVisibility, setMessage] = setters
    
    const handleClick = () => {
        setUser(null)
        setVisibility(false)
    }

    return(
        <div className='blogs' >
            <p className='blogtext'>Blogs</p>
            <Notification message={message}/>
            <p className='sticky'>{user.name} logged in <button onClick={ handleClick }>logout</button></p>
            <p className='blogtext'>create new</p>
            <CreateNewBlog setters={[setBlogs, setMessage]} blogs={blogList} user={user}/>
            <BlogList blogs={blogList} setters={[setBlogs, setMessage]} token={user.token}/>
        </div>
    )
}

export default Blogs