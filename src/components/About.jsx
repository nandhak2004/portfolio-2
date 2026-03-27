import React from 'react'

function About() {
  return (
    <div>
      <section className="about-container">
        <div className="about-left">
          <img
            src="src/assets/pro3.jpg"
            alt="profile"
            className="profile-img"
          />
        </div>

        <div className="about-right">
          <h1>About Me</h1>
          <h2>Frontend Developer</h2>

          <p>
            I'm a passionate frontend developer who builds clean, fast and
            modern websites using React. I focus on UI, performance and user
            experience.
          </p>

          <div className="about-info">
            <div><b>Name:</b> Nandha Kumar</div>
            <div><b>Location:</b> Tamil Nadu, India</div>
            <div><b>Experience:</b> Fresher / Trainee</div>
            <div><b>Tech:</b> React, HTML, CSS, JS</div>
          </div>

          <a href="/resume.pdf" className="btn">Download Resume</a>
        </div>
      </section>
 
    </div>
  )
}

export default About
