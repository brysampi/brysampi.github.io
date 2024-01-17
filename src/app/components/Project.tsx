export default function project() {
    return (
        <section>
            <p><span>PROJECTS</span></p>
            <div className="project_container">
                {/* Project Card */}
                <div className="project_card">
                    <div className='relative'>
                        <img className="project_card-image" src="projects/onestop.png" alt="" />
                    </div>

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
                    <img className="project_card-image" src="projects/webdose.png" alt="" />
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
                    <img className="project_card-image" src="projects/application_form.png" alt="" />
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
                    <img className="project_card-image" src="projects/portal.png" alt="" />
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
                    <img className="project_card-image" src="projects/manipis.png" alt="" />
                    <div className="project_card-desc">
                        <div className="project_card-title">Manipis Lying in Clinic</div>
                        <div className="project_card-title_sub">Capstone Project</div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
    )
}