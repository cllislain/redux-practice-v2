import { useDispatch } from "react-redux"
import { login, logout } from "../features/user"
import '../styles/login.css'

function Login() {
  const dispatch = useDispatch()

  return (
    <div className="container">
        <button className="login" onClick={() => {
          dispatch(login({name: "Claze", age: 21, email: "lislain@gmail.com"}))
        }}>Login</button>

        <button className="logout" onClick={() => {
          dispatch(logout())
        }}>Logout</button>
    </div>
  )
}

export default Login