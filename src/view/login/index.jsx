import React from 'react'
import './index.css'
import { Outlet } from 'react-router-dom'
export default function Wrap() {
  return (
    <div className="container">
      <Outlet />
    </div>
  )
}
