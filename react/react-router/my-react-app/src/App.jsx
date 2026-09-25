import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Course from './components/Course'
import Fees from './components/Fees'
import './App.css'
// function Home(){
//   return <h1>This is my Home page</h1>
// }
// function About(){
//   return <h1>This is my About page</h1>
// }


const App = () => {
  return (
    <BrowserRouter>
      <div className="app">

        <nav className="navbar">
          <h2 className="logo">My College</h2>

          <div className="nav-links">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/course">COURSE</Link>
            <Link to="/fees">FEES</Link>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/course" element={<Course />} />
            <Route path="/fees" element={<Fees />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}

export default App
