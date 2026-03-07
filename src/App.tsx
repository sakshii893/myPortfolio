import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Dock from './components/Dock'
import GradualBlur from './components/GradualBlur'
import TargetCursor from './components/TargetCursor'
import Login from './components/Login'
import { HiHome, HiUser, HiBriefcase, HiMail } from 'react-icons/hi'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const dockItems = [
    {
      icon: <HiHome size={24} />,
      label: 'Home',
      onClick: () => {
        setActiveSection('home')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      },
      className: activeSection === 'home' ? 'active' : ''
    },
    {
      icon: <HiUser size={24} />,
      label: 'About',
      onClick: () => {
        setActiveSection('about')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      },
      className: activeSection === 'about' ? 'active' : ''
    },
    {
      icon: <HiBriefcase size={24} />,
      label: 'Projects',
      onClick: () => {
        setActiveSection('projects')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      },
      className: activeSection === 'projects' ? 'active' : ''
    },
    {
      icon: <HiMail size={24} />,
      label: 'Contact',
      onClick: () => {
        setActiveSection('contact')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      },
      className: activeSection === 'contact' ? 'active' : ''
    }
  ]

  if (!isAuthenticated) {
    return (
      <div className="app">
        <TargetCursor
          targetSelector=".cursor-target"
          spinDuration={2}
          hideDefaultCursor={true}
          hoverDuration={0.2}
          parallaxOn={true}
        />
        <Login onLogin={handleLogin} />
      </div>
    )
  }

  return (
    <div className="app">
      <TargetCursor
        targetSelector=".cursor-target"
        spinDuration={2}
        hideDefaultCursor={true}
        hoverDuration={0.2}
        parallaxOn={true}
      />
      <main className="main-content">
        {activeSection === 'home' && <Home onNavigate={setActiveSection} />}
        {activeSection === 'about' && <About />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <Contact />}
        <Footer />
      </main>
      <GradualBlur
        target="page"
        position="bottom"
        height="15rem"
        strength={3}
        divCount={6}
        curve="bezier"
        exponential
        opacity={1}
        zIndex={900}
      />
      <Dock
        items={dockItems}
        panelHeight={68}
        baseItemSize={60}
        magnification={80}
        distance={150}
      />
    </div>
  )
}

export default App
