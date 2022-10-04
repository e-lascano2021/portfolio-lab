import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import NavBar from './elements/NavBar'
import ProjectDetails from './pages/ProjectDetails'
import Footer from './elements/Footer'
import Technologies from './pages/Technologies'
import TechnologyDetails from './pages/TechnologyDetails'


function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="resume" element={<Resume/>}/>
        <Route path="projects" element={<Projects/>}/>
        <Route path="projects/:projectDetails" element={<ProjectDetails/>}/>
        <Route path="technologies" element={<Technologies/>}/>
        <Route path="technologies/:technologiesDetails" element={<TechnologyDetails/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
