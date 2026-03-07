import { useState, useEffect } from 'react'
import { AiOutlineStar, AiOutlineFork } from 'react-icons/ai'
import SpotlightCard from './SpotlightCard'
import './Projects.css'

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

const Projects = () => {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

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
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=50`,
        { headers }
      )
      
      if (!response.ok) throw new Error('Failed to fetch repositories')
      const data = await response.json()
      
      // Filter out forked repos and get only original projects
      const originalRepos = data.filter((repo: Repository) => !repo.fork)
      
      setRepos(originalRepos)
      setLoading(false)
    } catch (err) {
      console.error('Error fetching repos:', err)
      setError('Unable to load projects. Please try again later.')
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="projects">
        <h2 className="section-title">Projects</h2>
        <div className="loading">Loading projects...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="projects">
        <h2 className="section-title">Projects</h2>
        <div className="error">{error}</div>
      </div>
    )
  }

  return (
    <div className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
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
    </div>
  )
}

export default Projects
