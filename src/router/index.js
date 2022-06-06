import React from 'react'
import menuRouter from './menuRouter'
import blankRouter from './blankRouter'
import Layout from '../components/layout/layout'
import Blank from '../components/layout/blank'
const routerList = [
  {
    path: '/main',
    element: <Layout />,
    children: [...menuRouter],
  },
  {
    path: '/',
    element: <Blank />,
    children: [...blankRouter],
  },
]
export default routerList
