import { useEffect, useRef } from 'react'
import { 
  SiMongodb, 
  SiExpress, 
  SiReact, 
  SiNodedotjs, 
  SiApachekafka, 
  SiKubernetes, 
  SiSocketdotio, 
  SiDocker,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiPostgresql
} from 'react-icons/si'
import './LogoLoop.css'

const techStack = [
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <SiExpress />, name: 'Express' },
  { icon: <SiReact />, name: 'React' },
  { icon: <SiNodedotjs />, name: 'Node.js' },
  { icon: <SiApachekafka />, name: 'Kafka' },
  { icon: <SiKubernetes />, name: 'Kubernetes' },
  { icon: <SiSocketdotio />, name: 'Socket.io' },
  { icon: <SiDocker />, name: 'Docker' },
  { icon: <SiTypescript />, name: 'TypeScript' },
  { icon: <SiJavascript />, name: 'JavaScript' },
  { icon: <SiPython />, name: 'Python' },
  { icon: <SiPostgresql />, name: 'PostgreSQL' }
]

const LogoLoop = () => {
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    // Duplicate items for seamless loop
    const scrollerInner = scroller.querySelector('.logo-loop-inner')
    if (!scrollerInner) return

    const scrollerContent = Array.from(scrollerInner.children)
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true)
      scrollerInner.appendChild(duplicatedItem)
    })
  }, [])

  return (
    <div className="logo-loop" ref={scrollerRef}>
      <div className="logo-loop-inner">
        {techStack.map((tech, index) => (
          <div key={index} className="logo-item cursor-target">
            <div className="logo-icon">{tech.icon}</div>
            <span className="logo-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoLoop
