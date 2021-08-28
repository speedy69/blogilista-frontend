import '../styles/message.css'

const Notification = ({ message, messageType }) => {

    if(message === null){
        return null
    }
    return(
        <div className='error'>
            {message}
        </div>
    )
}

export default Notification