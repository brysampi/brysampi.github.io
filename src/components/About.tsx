const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black text-gaming-yellow text-glow mb-4">
            ABOUT ME
          </h2>
          <div className="w-24 h-1 bg-gaming-yellow mx-auto"></div>
        </div>

        <div className="bg-gaming-dark/50 backdrop-blur-sm border border-yellow-500/20 rounded-lg p-8 md:p-12 shadow-yellow-glow">
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg md:text-xl">
              Welcome to my digital realm! I'm a <span className="text-gaming-yellow font-bold">Web Developer</span> who 
              transforms ideas into interactive experiences. Like a skilled gamer mastering different levels, 
              I've leveled up my skills across the full stack of web development.
            </p>
            <p className="text-lg md:text-xl">
              My journey started with curiosity and has evolved into a passion for creating 
              <span className="text-gaming-yellow"> cutting-edge web applications</span>. I specialize in 
              React, TypeScript, and modern web technologies, always staying ahead of the curve.
            </p>
            <p className="text-lg md:text-xl">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community. 
              <span className="text-gaming-yellow"> Ready to team up and build something epic?</span>
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Projects', value: '50+' },
              { label: 'Technologies', value: '20+' },
              { label: 'Experience', value: '3+ Years' },
              { label: 'Level', value: 'Expert' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 bg-gaming-darker border border-yellow-500/20 rounded-lg hover:border-yellow-500/50 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-gaming-yellow mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

