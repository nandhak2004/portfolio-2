import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
const navigate=useNavigate();

function handlepro(){
  navigate('/project')
}
  return (
    <div>
      <section className="hero">
  <div className="hero-content">
    <h1>Full Stack Developer</h1>
    <p>Crafting fast, clean & scalable web experiences using React.
</p>
    <button onClick={handlepro}>View Projects</button>
  </div>
</section>

    </div>
  )
}

export default Home

