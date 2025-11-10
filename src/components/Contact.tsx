import { useState, FormEvent } from 'react'
import { FaPaperPlane } from 'react-icons/fa'

interface FormData {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend or email service
    console.log('Form submitted:', formData)
    alert('Message sent! I will get back to you soon. 🎮')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black text-gaming-yellow text-glow mb-4">
            CONTACT ME
          </h2>
          <div className="w-24 h-1 bg-gaming-yellow mx-auto"></div>
          <p className="text-gray-400 mt-4">
            Ready to start a new project? Let's connect and build something amazing!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-bold text-gaming-yellow mb-2"
            >
              NAME
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gaming-dark border border-yellow-500/20 rounded-lg focus:ring-2 focus:ring-gaming-yellow focus:border-gaming-yellow text-white placeholder-gray-500 transition-all duration-300"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold text-gaming-yellow mb-2"
            >
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gaming-dark border border-yellow-500/20 rounded-lg focus:ring-2 focus:ring-gaming-yellow focus:border-gaming-yellow text-white placeholder-gray-500 transition-all duration-300"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-bold text-gaming-yellow mb-2"
            >
              MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-gaming-dark border border-yellow-500/20 rounded-lg focus:ring-2 focus:ring-gaming-yellow focus:border-gaming-yellow text-white placeholder-gray-500 transition-all duration-300 resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="gaming-button w-full px-6 py-4 bg-gaming-yellow text-gaming-darker font-bold rounded-lg hover:shadow-yellow-glow-lg transition-all duration-300 transform hover:scale-105 border-2 border-gaming-yellow flex items-center justify-center gap-2"
          >
            <FaPaperPlane />
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

