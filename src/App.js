// import logo from './logo.svg';
import './App.css'
// import 'antd/dist/antd.lss'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import routerList from './router'
// import Layout from './components/layout/layout'
const getMenuNodes = (menuList) =>
  menuList.map((item) => {
    if (!item.children) {
      return <Route path={item.path} element={item.element} key={item.path}></Route>
    } else {
      return (
        <Route path={item.path} element={item.element} key={item.path}>
          {getMenuNodes(item.children)}
        </Route>
      )
    }
  })

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Routes>{getMenuNodes(routerList)}</Routes>
    </div>
  )
}

export default App
