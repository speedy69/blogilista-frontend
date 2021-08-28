import { getAll } from "./services/blog"
import { useState, useEffect } from 'react'
import './styles/App.css'
import Login from './components/login'
import Blogs from './components/blogs'

function App() {
  const [isHidden, setVisibility] = useState(false)
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null)

  useEffect( () => {
    getAll().then(res => {
      if(res.status === 200){
        setBlogs(res.data)
      }
    })
  }, [])

  return (
    <> 
      <div hidden={isHidden}>
      <Login setters={[setUser, setMessage, setVisibility]}  message={message}/>
      </div>
      <div hidden={!isHidden}>
      <Blogs setters={[setBlogs, setUser, setVisibility, setMessage]} blogList={blogs} user={user !== null && user} message={message} />
      </div>
    </>
  );
}

export default App;
