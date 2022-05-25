import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
const Login = () => {
  const navigate = useNavigate()
  const onLogin = () => {
    navigate('/home')
  }
  return (
    <div>
      <h1>Login</h1>
      {/* <button onClick={onLogin}>登录</button> */}
      <Button type="primary" onClick={onLogin}>
        登录
      </Button>
    </div>
  )
}

export default Login
