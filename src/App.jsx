import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import PrivateRoute from './components/private-route/PrivateRoute'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Privacy from "./components/privacy/Privacy"
import Cookies from "./components/cookies/Cookies"
import Terms from "./components/terms/Terms"
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Project from './pages/project/Project'
import News from './pages/news/News'
import Login from './pages/login/Login'

function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
          <Route path="/projects" element={<PrivateRoute><Project /></PrivateRoute>} />
          <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
          <Route path="/news" element={<PrivateRoute><News /></PrivateRoute>} />
          <Route path="/news/:id" element={<PrivateRoute><News /></PrivateRoute>} />
          <Route path="/privacy" element={<PrivateRoute><Privacy /></PrivateRoute>} />
          <Route path="/cookies" element={<PrivateRoute><Cookies /></PrivateRoute>} />
          <Route path="/terms" element={<PrivateRoute><Terms /></PrivateRoute>} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </HashRouter>
    </AuthProvider>
  )
}

export default App