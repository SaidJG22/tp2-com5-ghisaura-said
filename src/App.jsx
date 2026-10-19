import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import './styles/Layout.css'

function App() {
  const nombre = 'Said Ghisaura'

  return (
    <div className="layout">
     
      <Sidebar nombre={nombre} profesion="Full Stack Developer" />

      <main className="contenido">
        <Routes>
          <Route path="/" element={<Home nombre={nombre} />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact nombre={nombre} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
