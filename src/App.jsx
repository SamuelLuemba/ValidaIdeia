import {Routes, Route, HashRouter} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Questions from './components/Questions'
import Result from './components/result'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function App() {
  
  return (
    <div id="root">
     <Navbar />
     <main>
      <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      </HashRouter>
      </main>
      <Footer className="footer" />
    </div>
  )
}

export default App
