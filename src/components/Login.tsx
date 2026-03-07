import { useState, useEffect, useRef } from 'react'
import './Login.css'

interface LoginProps {
  onLogin: () => void
}

const Login = ({ onLogin }: LoginProps) => {
  const [progress, setProgress] = useState(0)
  const pandaRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    // Start loading animation
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2 // Increment by 2% every 100ms = 5 seconds total
      })
    }, 100)

    // Auto-login after 5 seconds
    const timer = setTimeout(() => {
      onLogin()
    }, 5000)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [onLogin])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!pandaRef.current) return
      
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      // Calculate movement (very subtle)
      const moveX = (clientX / innerWidth - 0.5) * 20 // Max 10px movement
      const moveY = (clientY / innerHeight - 0.5) * 20 // Max 10px movement
      
      pandaRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <div className="loading-content">
            <h1 className="loading-title">Loading...</h1>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="loading-percentage">{progress}%</p>
          </div>
        </div>

        <div className="login-right">
          <div className="panda-container">
            <img ref={pandaRef} src="/panda.webp" alt="Panda" className="panda-image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
