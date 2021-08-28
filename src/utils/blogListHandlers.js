import { deleteBlog, updateBlog } from '../services/blog'

const handleClickView  = (e) => {
    document.getElementById(e.target.value +'a').hidden = false
    document.getElementById(e.target.value).hidden = true
}
const handleClickHide = (e) => {
    document.getElementById(e.target.value +'a').hidden = true
    document.getElementById(e.target.value).hidden = false
}

const handleClickDelete = async (id, token, blogs, setBlogs, setMessage) => {
    const res = await deleteBlog(id, token)
    if(res.status === 204){
        setBlogs(blogs.filter(f => f.id !== id))
        setMessage('blog deleted succesfully')
        setTimeout(() => {
            setMessage(null)
        }, 2500)
    }
}

const handleClickLike = async (id, blogs, setBlogs, setMessage) => {
    try {
        const res = await updateBlog(id)
        if(res.status === 200){
            const temp = [...blogs]
            temp.forEach(blog => {
                if(blog.id === id){
                    blog.likes = res.data.likes
                }
            })
            setBlogs(temp)
        }else {
            setMessage('Jotain meni pieleen')
            setTimeout(()=>{
                setMessage(null)
            }, 2500)
        }
    }catch(e){
        setMessage(e)
        setTimeout(() => {
            setMessage(null)
        }, 2500);
    }      
}

export { handleClickHide,
         handleClickView,
         handleClickLike,
         handleClickDelete }