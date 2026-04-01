import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Nav from './components/Nav'
import Skills from './components/Skills'
import Project from './components/Project'
// import Abiconectiondata from './components/Abiconectiondata'


function App() {

  return (
    <>
     <BrowserRouter basename='/portfolio-2'>
     <Nav/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/project' element={<Project/>}  />
      <Route path='/skills' element={<Skills/>} />
      <Route path='/contact' element={<Contact/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
