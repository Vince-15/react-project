import React from 'react'
import Login from '../view/login/login'
import Sign from '../view/login/sign'
import IndexWrap from '../view/login/index'
const blankRouter = [
  {
    path: '',
    element: <IndexWrap />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/sign',
        element: <Sign />,
      },
    ],
  },
]
export default blankRouter
