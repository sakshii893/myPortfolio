import './About.css'

const About = () => {
  return (
    <div className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <p>
          Hi, I'm Sakshi Pawar, a full-stack developer passionate about building modern, scalable web applications. 
          I primarily work with the MERN stack using React, Next.js, Node.js, Express, and MongoDB, and I enjoy 
          designing systems that go beyond simple CRUD applications.
        </p>
        <p>
          My projects involve technologies like WebRTC for real-time communication, Redis for caching, Kafka for 
          event-driven systems, and cloud deployment using Docker, Kubernetes, and AWS. I am particularly interested 
          in backend architecture, distributed systems, and building reliable production-level platforms.
        </p>
        <p>
          I enjoy exploring how large-scale applications are designed and continuously improving my development 
          skills through real-world projects. My goal is to build robust, scalable systems that solve real problems 
          and deliver exceptional user experiences.
        </p>
      </div>
    </div>
  )
}

export default About
