import './Project.css'
import portfolio from "../assets/Screenshot5.png"
import perfumy from "../assets/Screenshot5.png"
import events from "../assets/Screenshot5.png"



import React from 'react'

function Project() {
  return (

    <div id='projectpage'>

      <div className="propara">
        <h1>My Projects</h1>
        <p>Here are some of the projects i have worked on.</p>
      </div>
      <div className="proboxgrid">
        <div className="probox">
          <img src={portfolio} alt="project" />
          <h2>Personal Porfolio</h2>

          <p>A responsive personal portfolio website built using HTML, CSS and JavaScript,React.
            It includes sections like Home, About, Skills, Projects and Contact.</p>
        <a href="https://nandhak2004.github.io/Personal-portfolio/" target='blank' rel='noopener noreferrer' className='btn1'> view project</a>
        </div>
        <div className="probox">
          <img src={perfumy} alt="project" />
          <h2>Perfume</h2>
          <p>A responsive Perfume website built using HTML and CSS.
            It includes sections like Home, Products, About Us and Contact Us.</p>
             <a href=" https://nandhak2004.github.io/profumy-project/" target='blank' rel='noopener noreferrer' className='btn2'> view project</a>

        </div>
        <div className="probox">
          <img src={events} alt="project" />
          <h2>Upcoming Events</h2>

          <p>A responsive Upcoming Events website built using HTML and CSS. </p>
           <a href="https://nandhak2004.github.io/events-project/  " target='blank' rel='noopener noreferrer' className='btn3'> view project</a>
        </div>  
      </div>
    </div>
  )
}

export default Project
