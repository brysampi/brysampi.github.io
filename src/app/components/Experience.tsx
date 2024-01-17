export default function experience() {
    return (
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
    )
}