import React from 'react'
import './Skills.css'

function Skills() {
  return (
    <div>
      <div id="skillpage">
<h1>My Skills</h1>
<p>My technical skills and tools i use to build websites</p>
<div className="skill">
  <div className="skill-info">
    <div class="cube">
<div class="front"><img src="HTML5.svg" alt="html" /></div>
<div class="back"><img src="HTML5.svg" alt="html" /></div>
<div class="right"><img src="HTML5.svg" alt="html" /></div>
<div class="left"><img src="HTML5.svg" alt="html" /></div>
<div class="top"><img src="HTML5.svg" alt="html" /></div>
<div class="bottom"><img src="HTML5.svg" alt="html" /></div>
</div>
    <h2 className='html'>HTML</h2>
    {/* <input type="range" /> */}
  </div>
  <div className="skill-info">
    <div class="cube">
   
<div class="front"> <img src="CSS3.svg" alt="css" /></div>
<div class="back"><img src="CSS3.svg" alt="css" /></div>
<div class="right"><img src="CSS3.svg" alt="css" /></div>
<div class="left"><img src="CSS3.svg" alt="css" /></div>
<div class="top"><img src="CSS3.svg" alt="css" /></div>
<div class="bottom"><img src="CSS3.svg" alt="css" /></div>
</div>
    <h2 className='same'>CSS</h2>
    {/* <input type="range" /> */}


  </div>
  <div className="skill-info">
    <div class="cube">
   <div class="front"> <img src="JavaScript.svg" alt="Javascript" /></div>  
<div class="back"><img src="JavaScript.svg" alt="Javascript" /></div>
<div class="right"><img src="JavaScript.svg" alt="Javascript" /></div>
<div class="left"><img src="JavaScript.svg" alt="Javascript" /></div>
<div class="top"><img src="JavaScript.svg" alt="Javascript" /></div>
<div class="bottom"><img src="JavaScript.svg" alt="Javascript" /></div>
</div>
    <h2 className='js'>JavaScript</h2>

    {/* <p>  <input type="range" onChange={()=>setRange(range+1)} />   {range}%</p> */}


  </div>
  <div className="skill-info">
    <img src="React.svg" alt="React" className='react'/>
    <h2 className='same'>React</h2>
    {/* <input type="range" /> */}
  </div>
</div>
</div>

    </div>
  )
}

export default Skills
