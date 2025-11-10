import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa'

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/brysampi', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/brysampi', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com/brysampi', label: 'Twitter' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-gaming-yellow text-glow">
            BRYSAM PI
          </h1>
          <div className="text-2xl md:text-4xl font-bold mb-4 text-gray-300">
            <span className="text-gaming-yellow">Web Developer</span>
            <span className="text-gray-500 mx-2">|</span>
            <span className="text-gray-400">Code Warrior</span>
          </div>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with code. Building the future, one line at a time.
            <br />
            <span className="text-gaming-yellow">Ready to level up your project?</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => {
                const element = document.getElementById('projects')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="gaming-button px-8 py-4 bg-gaming-yellow text-gaming-darker font-bold rounded-lg hover:shadow-yellow-glow-lg transition-all duration-300 transform hover:scale-105 border-2 border-gaming-yellow"
            >
              VIEW MY WORK
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('contact')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="gaming-button px-8 py-4 bg-transparent text-gaming-yellow font-bold rounded-lg border-2 border-gaming-yellow hover:bg-gaming-yellow hover:text-gaming-darker transition-all duration-300 transform hover:scale-105"
            >
              CONTACT ME
            </button>
            <button className="gaming-button px-8 py-4 bg-transparent text-gaming-yellow font-bold rounded-lg border-2 border-gaming-yellow hover:bg-gaming-yellow hover:text-gaming-darker transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <FaDownload />
              RESUME
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-gray-400 hover:text-gaming-yellow transition-all duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]"
                  aria-label={social.label}
                >
                  <Icon />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

