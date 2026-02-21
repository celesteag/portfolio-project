import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Project from './components/project/Project'
import Privacy from "./components/privacy/Privacy";
import Cookies from "./components/cookies/Cookies";
import Terms from "./components/terms/Terms";
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
