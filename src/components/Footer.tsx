import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/brysampi', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/brysampi', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com/brysampi', label: 'Twitter' },
  ]

  return (
    <footer className="bg-gaming-dark border-t border-yellow-500/20 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-gray-400">
              © {currentYear} <span className="text-gaming-yellow font-bold">Brysam Pi</span>. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-400 hover:text-gaming-yellow transition-all duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]"
                  aria-label={social.label}
                >
                  <Icon />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

