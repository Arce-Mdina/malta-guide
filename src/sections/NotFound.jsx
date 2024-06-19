import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    let navigate = useNavigate()

  return (
    <div>
        <h1>404 - The page you searched for is not found.</h1>
        <h3>Click the Back button in the top left corner or click the link below to go back to the home page.</h3>
        <button onClick={() => navigate('/')}>Home</button>
    </div>
  )
}

export default NotFound