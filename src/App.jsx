import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Project from './components/Portfolio'
import Skills from './components/Skills'
import 'react-tooltip/dist/react-tooltip.css'
import AOS from 'aos';
import 'aos/dist/aos.css'


function App() {
  
  return (
    <div className='px-10 py-10 w-[90%] mx-auto'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  )
}

export default App
