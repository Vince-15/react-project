import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  ApartmentOutlined,
  AuditOutlined,
} from '@ant-design/icons'
import Home from '../view/home/home'
import About from '../view/about/about'
import Login from '../view/login/login'
import Main from '../view/main/main'
import User from '../view/user/user'
const menuRouter = [
  {
    path: '',
    element: <Main />,
    icon: <ApartmentOutlined />,
    name: 'main',
  },
  {
    path: '/main/home',
    element: <Home />,
    name: 'home',
    icon: <UserOutlined />,
  },
  {
    path: '/main/about',
    element: <About />,
    name: 'about',
    icon: <VideoCameraOutlined />,
  },
  {
    path: '/main/login',
    element: <Login />,
    name: 'login',
    icon: <UploadOutlined />,
  },
  {
    path: '/main/user',
    element: <User />,
    name: 'user',
    icon: <AuditOutlined />,
  },
]
export default menuRouter
