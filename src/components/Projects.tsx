import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  category: string
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce platform with user authentication, product management, and payment integration. Built with modern web technologies.',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/brysampi/project1',
      liveUrl: 'https://project1-demo.com',
      category: 'Full Stack',
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates and drag-and-drop functionality. Features dark mode and offline support.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      githubUrl: 'https://github.com/brysampi/project2',
      liveUrl: 'https://project2-demo.com',
      category: 'Frontend',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description:
        'A beautiful weather dashboard that displays current weather and forecasts for multiple cities. Features interactive maps and charts.',
      technologies: ['React', 'JavaScript', 'API Integration'],
      githubUrl: 'https://github.com/brysampi/project3',
      liveUrl: 'https://project3-demo.com',
      category: 'Frontend',
    },
    {
      id: 4,
      title: 'Social Media API',
      description:
        'RESTful API for a social media platform with user profiles, posts, comments, and real-time notifications. Built with Node.js and Express.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      githubUrl: 'https://github.com/brysampi/project4',
      category: 'Backend',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black text-gaming-yellow text-glow mb-4">
            PROJECTS
          </h2>
          <div className="w-24 h-1 bg-gaming-yellow mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-gaming-dark border border-yellow-500/20 rounded-lg overflow-hidden hover:border-yellow-500/50 transition-all duration-300 hover:shadow-yellow-glow transform hover:scale-105"
            >
              <div className="h-48 bg-gradient-to-br from-gaming-yellow/20 to-yellow-600/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gaming-yellow/10 to-transparent transform rotate-45 translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
                <h3 className="text-2xl font-bold text-gaming-yellow text-glow z-10">
                  {project.title}
                </h3>
                <div className="absolute top-4 right-4 px-3 py-1 bg-gaming-darker border border-yellow-500/50 rounded text-xs text-gaming-yellow">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gaming-darker border border-yellow-500/30 text-gaming-yellow rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-gaming-yellow transition-colors group"
                  >
                    <FaGithub className="group-hover:scale-110 transition-transform" />
                    <span>Code</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-gaming-yellow transition-colors group"
                    >
                      <FaExternalLinkAlt className="group-hover:scale-110 transition-transform" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

