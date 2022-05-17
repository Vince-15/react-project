// import logo from './logo.svg';
import './App.css'
import { Route, Routes } from 'react-router-dom'
import routerList from './router'

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
        {/* <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route> */}
        {routerList.map((item) => (
          <Route
            path={item.path}
            element={item.element}
            key={item.path}
          ></Route>
        ))}
      </Routes>
    </div>
  )
}

export default App
