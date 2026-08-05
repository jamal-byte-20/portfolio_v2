import { ArrowUpRight } from 'lucide-react'
import { projects } from '../../data/portfolioData'
import ProjectCard from '../ui/ProjectCard'

export default function Projects() {
  return (
    <section className="projects-section frame-shadow" id="projects">
      <div className="section-heading">
        <h2>Selected projects</h2>
        <a href="https://github.com/jamal-byte-20?tab=repositories" target="_blank" rel="noreferrer">View all projects <ArrowUpRight aria-hidden="true" /></a>
      </div>
      <div className="projects-grid">{projects.map((project) => <ProjectCard key={project.number} project={project} />)}</div>
    </section>
  )
}
