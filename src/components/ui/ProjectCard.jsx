import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project }) {
  const Icon = project.icon

  return (
    <a className="project-card frame-shadow" href={project.url} target="_blank" rel="noreferrer" aria-label={`View ${project.name} project`}>
      <span className="project-number">{project.number}</span>
      <span className={`project-icon ${project.tone}`}><Icon aria-hidden="true" /></span>
      <span className="project-copy"><strong>{project.name}</strong><small>{project.type}</small></span>
      <span className="project-arrow"><ArrowUpRight aria-hidden="true" /></span>
    </a>
  )
}
