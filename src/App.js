// import logo from './logo.svg';
import './App.css'
// import 'antd/dist/antd.lss'
import { Route, Routes } from 'react-router-dom'
import routerList from './router'
import Layout from './components/layout/layout'

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
      <Routes>
        <Route path="/layout" element={<Layout />}>
          {routerList.map((item) => {
            return (
              <Route
                path={item.path}
                element={item.element}
                key={item.path}
              ></Route>
            )
          })}
        </Route>
      </Routes>
    </div>
  )
}

export default App
