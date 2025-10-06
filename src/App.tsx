import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import IssuePage from './pages/IssuePage'
import AboutPage from './pages/AboutPage'
import TestPdfPage from './pages/TestPdfPage'
import VisionPage from './pages/VisionPage'
import MissionPage from './pages/MissionPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="issues/:slug" element={<IssuePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="vision" element={<VisionPage />} />
        <Route path="mission" element={<MissionPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="test-pdf" element={<TestPdfPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
