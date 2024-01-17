import Image from 'next/image'
import Projects from './components/Project'
import Experience from './components/Experience'

export default function Home() {
  return (
    <main>
      <div className="side_social-1">
        <div>
          <p><a href="mailto:bryansampiano@gmail.com">bryansampiano@gmail.com</a></p>
        </div>
      </div>
      <div className="side_social-2">
        <ul>
          <li>
            <a href="https://github.com/brysampi" target="_blank">
              <Image src="svg/github-512-filled.svg" alt="" width={50} height={50} className='p-2' />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/bryansampiano/" target="_blank">
              <Image src="svg/linkedin-500-filled.svg" alt="" width={50} height={50} className='p-2' />
            </a>
          </li>
        </ul>
      </div>
      <div className='change_color overflow-hidden w-12 h-12 fixed top-20 right-7 rounded-full flex justify-center items-center z-10'>
        <Image src="logos/JBv3_web.svg" alt="" fill />
        <div className='popup relative'>
          <div className='popup-1'></div>
          <div className='popup-2'></div>
          <div className='popup-3'></div>
          <div className='popup-4'></div>
        </div>
      </div>

      <div className="midSection flex justify-center">
        <div className="midSection_card">
          {/* Info */}
          <section>
            <div className="highlight text-[40px] font-bold">JOHN BRYAN SAMPIANO</div>
            <div className="highlight-sub text-[20px]  font-medium">but you can call me <span className="highlight">BELL</span></div>
            <div className="highlight mt-[20px] mb-[20px] text-[20px]  font-medium">Web Developer</div>
            <div className="highlight-sub mb-4">As a web developer, building digital experiences is very close to my heart.</div>
          </section>
          <section>
            <p className="pb-1"><span>ABOUT</span></p>
            <p className="pt-2 pb-2">I&apos;m a web developer who has a strong passion for creating digital experiences. I&apos;ve had the privilege of constructing web projects for a School to make things simple for students, from enrollment to subject management.</p>
            <p className="pt-2 pb-2">I began my career as a web developer when I recognised the magic of writing code that brings websites to life. The creative process of turning ideas into interactive, visually beautiful realities is what I find most intriguing about web development. Over the years, I&apos;ve honed my skills in front-end and back-end technologies like HTML, CSS, JavaScript, and PHP.</p>
            <p className="pt-2 pb-2">I appreciate you visiting my webpage. Please feel free to look through my portfolio and get in touch if you have any questions or would want to discuss a project or share your ideas. Together, let&apos;s make your web vision a reality.</p>
          </section>

          <Experience />

          <Projects />

          <section className='mt-40'>
            <div>
              <p>Coded in <a href="https://code.visualstudio.com" className='highlight'>Visual Studio Code</a>. Build with <a href="https://nextjs.org" className='highlight'>Next.js</a> and <a href="https://tailwindcss.com" className='highlight'>Tailwind CSS</a>, deployed with <a href="https://pages.github.com" className='highlight'>Github pages</a>.</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
