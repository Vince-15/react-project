import Home from '../view/home/home'
import About from '../view/about/about'
import Login from '../view/login/login'
import Main from '../view/main/main'
// import Layout from '../components/layout/layout'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  ApartmentOutlined,
} from '@ant-design/icons'
const routerList = [
  {
    path: '',
    element: <Main />,
    icon: <ApartmentOutlined />,
    name: 'main',
  },
  {
    path: '/layout/home',
    element: <Home />,
    name: 'home',
    icon: <UserOutlined />,
  },
  {
    path: '/layout/about',
    element: <About />,
    name: 'about',
    icon: <VideoCameraOutlined />,
  },
  {
    path: '/layout/login',
    element: <Login />,
    name: 'login',
    icon: <UploadOutlined />,
  },
  // { path: 'layout', element: <Layout />, key: '4' },
]
export default routerList
