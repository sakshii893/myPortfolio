import { useState, useEffect } from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { AiOutlineStar, AiOutlineFork } from 'react-icons/ai'
import ProfileCard from './ProfileCard'
import SpotlightCard from './SpotlightCard'
import LogoLoop from './LogoLoop'
import './Home.css'

interface Repository {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string
  topics: string[]
  language: string
  stargazers_count: number
  forks_count: number
  fork: boolean
  updated_at: string
  created_at: string
}

interface HomeProps {
  onNavigate?: (section: string) => void
}

const Home = ({ onNavigate }: HomeProps) => {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchGitHubRepos()
  }, [])

  const fetchGitHubRepos = async () => {
    try {
      const username = import.meta.env.VITE_GITHUB_USERNAME || 'sakshii893'
      
      const headers: HeadersInit = {
        'Accept': 'application/vnd.github.v3+json'
      }
      
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=20`,
        { headers }
      )
      
      if (!response.ok) throw new Error('Failed to fetch repositories')
      const data = await response.json()
      
      // Filter out forked repos and get only original projects
      const originalRepos = data.filter((repo: Repository) => !repo.fork)
      
      // Take first 3 original repos
      setRepos(originalRepos.slice(0, 3))
      setLoading(false)
    } catch (err) {
      console.error('Error fetching repos:', err)
      setLoading(false)
    }
  }

  const handleContactClick = () => {
    if (onNavigate) {
      onNavigate('contact')
    }
  }

  const handleSeeAllProjects = () => {
    if (onNavigate) {
      onNavigate('projects')
    }
  }

  return (
    <div className="home">
      <div className="home-container">
        <div className="profile-section">
          <ProfileCard
            avatarUrl="https://res.cloudinary.com/di7srgawv/image/upload/w_600,q_auto,f_auto/v1772919144/panda_qckqsv.webp"
            name="Sakshi Pawar"
            title="Software Engineer"
            handle="sakshipawar"
            status="Online"
            contactText="Contact"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={handleContactClick}
            behindGlowColor="rgba(138, 43, 226, 0.67)"
            behindGlowEnabled={true}
            innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
          />
          <div className="profile-content">
            <p className="bio">
              Hi, I'm Sakshi Pawar, a full-stack developer passionate about building modern, scalable web applications. 
              I primarily work with the MERN stack using React, Next.js, Node.js, Express, and MongoDB, and I enjoy 
              designing systems that go beyond simple CRUD applications. My projects involve technologies like WebRTC 
              for real-time communication, Redis for caching, Kafka for event-driven systems, and cloud deployment 
              using Docker, Kubernetes, and AWS. I am particularly interested in backend architecture, distributed 
              systems, and building reliable production-level platforms. I enjoy exploring how large-scale applications 
              are designed and continuously improving my development skills through real-world projects.
            </p>
            <div className="action-buttons">
              <button className="btn-primary cursor-target" onClick={handleContactClick}>Get in Touch</button>
              <a 
                href="https://drive.google.com/file/d/156cQn2jmnPmhyCzmJP8ip5K96CH7y4ST/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary cursor-target"
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
              >
                Download CV
              </a>
            </div>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/sakshi-pawar-b0638630b/" target="_blank" rel="noopener noreferrer" className="social-icon cursor-target">
                <FaLinkedin />
              </a>
              <a href="https://github.com/sakshii893" target="_blank" rel="noopener noreferrer" className="social-icon cursor-target">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="featured-projects">
          <h2 className="featured-title">Featured Projects</h2>
          {loading ? (
            <div className="loading-projects">Loading projects...</div>
          ) : (
            <>
              <div className="projects-grid-home">
                {repos.map((repo) => (
                  <SpotlightCard 
                    key={repo.id}
                    spotlightColor="rgba(138, 43, 226, 0.2)"
                    className="cursor-target"
                  >
                    <div className="card-header">
                      <h3 className="project-title">{repo.name}</h3>
                      {repo.language && (
                        <span className="language-badge">{repo.language}</span>
                      )}
                    </div>
                    <p className="project-description">
                      {repo.description || 'No description available'}
                    </p>
                    <div className="project-stats">
                      <span className="stat"><AiOutlineStar /> {repo.stargazers_count}</span>
                      <span className="stat"><AiOutlineFork /> {repo.forks_count}</span>
                    </div>
                    <div className="project-links">
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="project-link cursor-target">
                        View Code
                      </a>
                      {repo.homepage && (
                        <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="project-link cursor-target">
                          Live Demo
                        </a>
                      )}
                    </div>
                  </SpotlightCard>
                ))}
              </div>
              <button className="see-all-btn cursor-target" onClick={handleSeeAllProjects}>
                See All Projects
              </button>
            </>
          )}
        </div>

        <div className="skills-section">
          <h2 className="skills-title">Skills</h2>
          <LogoLoop />
        </div>
      </div>
    </div>
  )
}

export default Home
