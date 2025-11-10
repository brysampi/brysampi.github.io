interface Experience {
  id: number
  title: string
  company: string
  period: string
  description: string[]
  type: string
}

const Experience = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Tech Company Inc.',
      period: '2023 - Present',
      type: 'Full-time',
      description: [
        'Developed and maintained responsive web applications using React and TypeScript',
        'Collaborated with cross-functional teams to deliver high-quality products',
        'Implemented modern UI/UX designs with Tailwind CSS',
        'Optimized application performance and improved user experience by 40%',
      ],
    },
    {
      id: 2,
      title: 'Junior Web Developer',
      company: 'StartupXYZ',
      period: '2022 - 2023',
      type: 'Full-time',
      description: [
        'Built interactive web interfaces using React and JavaScript',
        'Worked on RESTful API integration and data management',
        'Participated in code reviews and agile development processes',
        'Learned and applied best practices in web development',
      ],
    },
    {
      id: 3,
      title: 'Web Development Intern',
      company: 'Digital Agency',
      period: '2021 - 2022',
      type: 'Internship',
      description: [
        'Assisted in developing client websites using HTML, CSS, and JavaScript',
        'Learned modern web development frameworks and tools',
        'Contributed to team projects and gained real-world experience',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-gaming-dark/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black text-gaming-yellow text-glow mb-4">
            EXPERIENCE
          </h2>
          <div className="w-24 h-1 bg-gaming-yellow mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-gaming-dark border border-yellow-500/20 rounded-lg p-6 md:p-8 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-yellow-glow"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gaming-yellow mb-2">{exp.title}</h3>
                  <p className="text-xl text-gray-300 mb-2">{exp.company}</p>
                  <span className="inline-block px-3 py-1 bg-gaming-darker border border-yellow-500/30 text-gaming-yellow rounded text-sm">
                    {exp.type}
                  </span>
                </div>
                <p className="text-gaming-yellow font-semibold mt-2 md:mt-0">{exp.period}</p>
              </div>
              <ul className="space-y-2 text-gray-300">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-gaming-yellow mr-3 mt-1">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

