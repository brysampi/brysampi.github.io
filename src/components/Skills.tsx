import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiVite, SiMongodb, SiNextdotjs } from 'react-icons/si'

interface Skill {
  name: string
  icon: React.ComponentType<{ className?: string }>
  level: number
  category: string
}

const Skills = () => {
  const skills: Skill[] = [
    { name: 'React', icon: FaReact, level: 90, category: 'Frontend' },
    { name: 'TypeScript', icon: SiTypescript, level: 85, category: 'Language' },
    { name: 'JavaScript', icon: FaJs, level: 90, category: 'Language' },
    { name: 'Next.js', icon: SiNextdotjs, level: 80, category: 'Framework' },
    { name: 'Node.js', icon: FaNodeJs, level: 80, category: 'Backend' },
    { name: 'HTML5', icon: FaHtml5, level: 95, category: 'Frontend' },
    { name: 'CSS3', icon: FaCss3Alt, level: 90, category: 'Frontend' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85, category: 'Styling' },
    { name: 'Vite', icon: SiVite, level: 80, category: 'Tool' },
    { name: 'Git', icon: FaGitAlt, level: 85, category: 'Tool' },
    { name: 'GitHub', icon: FaGithub, level: 90, category: 'Tool' },
    { name: 'MongoDB', icon: SiMongodb, level: 75, category: 'Database' },
  ]

  const categories = ['All', 'Frontend', 'Backend', 'Language', 'Framework', 'Styling', 'Tool', 'Database']

  return (
    <section id="skills" className="py-20 px-4 bg-gaming-dark/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black text-gaming-yellow text-glow mb-4">
            SKILLS & TECH
          </h2>
          <div className="w-24 h-1 bg-gaming-yellow mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.name}
                className="group bg-gaming-dark border border-yellow-500/20 p-6 rounded-lg hover:border-yellow-500/50 transition-all duration-300 hover:shadow-yellow-glow transform hover:scale-105"
              >
                <div className="text-center">
                  <Icon className="text-5xl mx-auto mb-4 text-gaming-yellow group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold text-white mb-3">{skill.name}</h3>
                  <div className="w-full bg-gaming-darker rounded-full h-2 mb-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-gaming-yellow to-yellow-400 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-400">{skill.level}%</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills

