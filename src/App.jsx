import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectPage from './pages/ProjectPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import projects from './data/projects'

function App() {
  const location = useLocation()

  return (
    <Layout>
      <ScrollToTop pathname={location.pathname} />
      <Routes>
        <Route path="/" element={<HomePage projects={projects} />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/projetos" element={<ProjectsPage projects={projects} />} />
        <Route path="/projetos/:slug" element={<ProjectPage projects={projects} />} />
        <Route path="/contato" element={<ContactPage />} />
      </Routes>
    </Layout>
  )
}

export default App
