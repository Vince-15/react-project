import Home from '../view/home/home'
import About from '../view/about/about'
import Login from '../view/login/login'
const routerList = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/login', element: <Login /> },
]
export default routerList
