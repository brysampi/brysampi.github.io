import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="midSection flex justify-center">
        <div className="midSection_card">
          {/* Info */}
          <section>
            <div className="highlight text-[40px] font-bold">John Bryan Sampiano</div>
            <div className="highlight-sub text-[20px]  font-medium">but you can call me <span className="highlight">BELL</span></div>
            <div className="highlight mt-[20px] mb-[20px] text-[20px]  font-medium">Web Developer</div>
            <div className="highlight-sub mb-4">As a web developer, building digital experiences is very close to my heart.</div>
          </section>
          {/* About */}
          <section>
            <p className="pb-1"><span>ABOUT</span></p>
            <p className="pt-2 pb-2">I&apos;m a web developer who has a strong passion for creating digital experiences. I&apos;ve had the privilege of constructing web projects for a School to make things simple for students, from enrollment to subject management.</p>
            <p className="pt-2 pb-2">I began my career as a web developer when I recognised the magic of writing code that brings websites to life. The creative process of turning ideas into interactive, visually beautiful realities is what I find most intriguing about web development. Over the years, I&apos;ve honed my skills in front-end and back-end technologies like HTML, CSS, JavaScript, and PHP.</p>
            <p className="pt-2 pb-2">I appreciate you visiting my webpage. Please feel free to look through my portfolio and get in touch if you have any questions or would want to discuss a project or share your ideas. Together, let&apos;s make your web vision a reality.</p>
          </section>
          {/* Experience */}
          <section>
            <p><span>EXPERIENCE</span></p>
            {/* Experience Card */}
            <a href="" className="experience_card ">
              <div className="experience_card-year">FEB 2023 - FEB 2024</div>
              <div>
                <p className="experience_card-title">Web Development Engineer</p>
                <p className="experience_card-title_sub">St.Dominic College of Asia</p>
                <div className="experience_card-desc">
                  <p>Used the Codeigniter 3 Framework to create a variety of websites for students and staff.</p>
                  <p>All prior system modules (.NET) should be converted to a web-based system.</p>
                  <p>I am one of the programmers that construct the DOSE (Dominican One Stop Enrollment) / Admission portal, which students utilize to enroll themselves.</p>
                  <p>When there is a system upgrade, works with the team to develop presentations for my task.</p>
                  <div className="div_tag">
                    <div>CodeIgniter</div>
                    <div>PHP</div>
                    <div>SCSS/CSS</div>
                    <div>JavaScript</div>
                    <div>JQuery</div>
                  </div>
                </div>
              </div>
            </a>
            {/* Repeat Experience Card */}
            <a href="" className="experience_card">
              <div className="experience_card-year">FEB 2021 - FEB 2023</div>
              <div>
                <p className="experience_card-title">Intern : Web Developer</p>
                <p className="experience_card-title_sub">TSPG IT Solutions</p>
                <div className="experience_card-desc">
                  <p>Developed different websites with software division team for clients using Symfony 3 framework.</p>
                  <div className="div_tag">
                    <div>CodeIgniter</div>
                    <div>PHP</div>
                    <div>SCSS/CSS</div>
                    <div>JavaScript</div>
                    <div>JQuery</div>
                  </div>
                </div>
              </div>
            </a>
          </section>
          <section>
            <p><span>PROJECTS</span></p>
            <div className="project_container">
              {/* Project Card */}
              <div className="project_card">
                <Image src="projects/onestop.png" alt="" />
                <div className="project_card-desc">
                  <div className="project_card-title">Admission Portal</div>
                  <div className="project_card-title_sub">Onestop · DOSE · Co-op</div>
                  <div>
                    Collaborated with our three-person team to develop a one-stop enrollment solution that
                    allows students to sign up independently.
                  </div>
                  <div className="div_tag">
                    <div>PHP</div>
                    <div>CSS</div>
                    <div>JavaScript</div>
                    <div>CodeIgniter</div>
                    <div>JQuery</div>
                  </div>
                </div>
              </div>
              {/* Repeat Project Card */}
              <div className="project_card">
                <Image src="projects/webdose.png" alt="" />
                <div className="project_card-desc">
                  <div className="project_card-title">WebDose</div>
                  <div className="project_card-title_sub">Maintenance · Update · Co-op</div>
                  <div>
                    For convenient access from locations other than the premises, all modules from the local system have been converted to a web-based system.
                  </div>
                  <div className="div_tag">
                    <div>PHP</div>
                    <div>CSS</div>
                    <div>JavaScript</div>
                    <div>CodeIgniter</div>
                    <div>JQuery</div>
                  </div>
                </div>
              </div>
              <div className="project_card">
                <Image src="projects/application_form.png" alt="" />
                <div className="project_card-desc">
                  <div className="project_card-title">Application Form</div>
                  <div className="project_card-title_sub">DOSE · Co-op</div>
                  <div>
                    Various forms that applicants can use to submit their personal data for the admissions process.
                  </div>
                  <div className="div_tag">
                    <div>PHP</div>
                    <div>CSS</div>
                    <div>JavaScript</div>
                    <div>CodeIgniter</div>
                    <div>JQuery</div>
                  </div>
                </div>
              </div>
              <div className="project_card">
                <Image src="projects/portal.png" alt="" />
                <div className="project_card-desc">
                  <div className="project_card-title">Student Portal</div>
                  <div className="project_card-title_sub">Maintenance · Update</div>
                  <div>
                    I&apos;ve been entrusted with maintaining this system and adding and updating various features so that students can view their academic progress.
                  </div>
                  <div className="div_tag">
                    <div>PHP</div>
                    <div>CSS</div>
                    <div>JavaScript</div>
                    <div>CodeIgniter</div>
                    <div>JQuery</div>
                  </div>
                </div>
              </div>
              <div className="project_card">
                <Image src="projects/manipis.png" alt="" />
                <div className="project_card-desc">
                  <div className="project_card-title">Manipis Lying in Clinic</div>
                  <div className="project_card-title_sub">Capstone Project</div>
                  <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos facilis perspiciatis voluptate, odit, exercitationem earum porro velit accusantium nisi nostrum et dolorem possimus assumenda natus dignissimos maxime esse, quaerat explicabo.
                  </div>
                  <div className="div_tag">
                    <div>PHP</div>
                    <div>CSS</div>
                    <div>JavaScript</div>
                    <div>JQuery</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
