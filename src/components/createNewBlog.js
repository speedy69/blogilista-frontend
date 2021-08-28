import React, { useState } from "react"
import { postBlog } from "../services/blog"


const CreateNewBlog = ({ setters, blogs, user }) => {
    const [setBlogs, setMessage] = setters
    const [newTitle, setTitle] = useState('')
    const [newAuthor, SetAuthor] = useState('')
    const [newUrl, setUrl] = useState('')
    const [isHidden, setHidden] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        try{
            const promise = await postBlog({ title: newTitle, author: newAuthor, url: newUrl, user: {name: user.name}}, user.token)
            if(promise && promise.status === 200){
                setTitle(''); setUrl(''); SetAuthor('')
                setBlogs(blogs.concat(promise.data))
                setHidden([!isHidden[0], !isHidden[1]])
                setMessage(`a new blog ${newTitle} by ${newAuthor}`)
                setTimeout(() =>{
                    setMessage(null)
                }, 3500)
            }
        }catch(e){  }       
    }

    return(
        <>
        <button hidden={isHidden} onClick={() => setHidden(!isHidden)}>crete new blog</button>
        <form onSubmit={handleSubmit} hidden={!isHidden}>
            <table><tbody>
                <tr>
                    <td>title:</td><td><input type='text' value={newTitle} onChange={(event) => setTitle(event.target.value)} /></td>
                </tr>
                <tr>
                    <td>author:</td><td><input type='text' value={newAuthor} onChange={(event) => SetAuthor(event.target.value)} /></td>
                </tr>
                <tr>
                    <td>url:</td><td><input type='text' value={newUrl} onChange={(event) => setUrl(event.target.value)} /></td>
                </tr>
                <tr>
                <td><button type='submit' >create</button></td>                
                </tr>
            </tbody></table>
        </form>
        <button onClick={() => setHidden(!isHidden)} hidden={!isHidden}>cancel</button>
        </>
    )
}

export default CreateNewBlog