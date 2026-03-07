import { useState } from 'react'
import { HiHome, HiUser, HiBriefcase, HiMail } from 'react-icons/hi'
import './BottomNav.css'

interface BottomNavProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const BottomNav = ({ activeSection, setActiveSection }: BottomNavProps) => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  const navItems = [
    { id: 'home', label: 'Home', Icon: HiHome },
    { id: 'about', label: 'About', Icon: HiUser },
    { id: 'projects', label: 'Projects', Icon: HiBriefcase },
    { id: 'contact', label: 'Contact', Icon: HiMail }
  ]

  return (
    <nav className="bottom-nav">
      <div className="nav-container">
        {navItems.map((item) => {
          const Icon = item.Icon
          return (
            <button
              key={item.id}
              className={`nav-icon ${activeSection === item.id ? 'active' : ''} ${
                hoveredIcon === item.id ? 'hovered' : ''
              }`}
              onClick={() => setActiveSection(item.id)}
              onMouseEnter={() => setHoveredIcon(item.id)}
              onMouseLeave={() => setHoveredIcon(null)}
              aria-label={item.label}
            >
              <Icon className="icon-svg" />
              <span className="icon-label">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default BottomNav
