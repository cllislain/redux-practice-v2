import { useSelector} from 'react-redux'
import '../styles/Profile.css'

function Profile() {

  const user = useSelector((state) => state.user.value)
  const themeColor = useSelector((state) => state.theme.value)
  
  return (
    <div className='profile' style={{color: themeColor}}>
        <h1>Profile Page</h1>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
    </div>
  )
}

export default Profile