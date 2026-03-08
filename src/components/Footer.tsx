import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import LaserFlow from './LaserFlow'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <LaserFlow
        color="#8a2be2"
        horizontalBeamOffset={0.0}
        verticalBeamOffset={0.5}
        wispDensity={1}
        wispSpeed={15}
        wispIntensity={5}
        flowSpeed={0.35}
        flowStrength={0.25}
        fogIntensity={0.45}
        fogScale={0.3}
        fogFallSpeed={-0.6}
        decay={1.1}
        falloffStart={1.2}
        verticalSizing={2.0}
        horizontalSizing={0.5}
      />
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <h3 className="footer-name">Sakshi Pawar</h3>
            <p className="footer-tagline">Software Engineer</p>
            <div className="footer-email">
              <FaEnvelope />
              <a href="mailto:sakshiiipawar10@gmail.com" className="cursor-target">sakshiiipawar10@gmail.com</a>
            </div>
          </div>

          <div className="footer-center">
            <div className="footer-links">
              <a href="#home" className="footer-link cursor-target">Home</a>
              <a href="#about" className="footer-link cursor-target">About</a>
              <a href="#projects" className="footer-link cursor-target">Projects</a>
              <a href="#contact" className="footer-link cursor-target">Contact</a>
            </div>
          </div>

          <div className="footer-right">
            <p className="footer-connect">Connect with me</p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/sakshi-pawar-b0638630b/" target="_blank" rel="noopener noreferrer" className="footer-social-icon cursor-target">
                <FaLinkedin />
              </a>
              <a href="https://github.com/sakshii893" target="_blank" rel="noopener noreferrer" className="footer-social-icon cursor-target">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <p>
              © {currentYear} Sakshi Pawar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
