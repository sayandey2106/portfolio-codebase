
import './App.css';
import NavBar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Resume from './pages/Resume/Resume';
// import Hobbies from './components/Hobbies/Hobbies';
import AboutMe from './pages/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import ProjectFilter from './components/ProjectFilter/ProjectFilter';
import MyServices from './components/MyServices/MyServices';
import Projects from './pages/Projects/Projects';
import Services from './pages/Services/Services';
import ContactMeForm from './components/ContactMeForm/ContactMeForm';
import ParticlesBackground from './pages/Home/ParticlesBackground';

function App() {
  return (
    <div className="App">
    
   

  <Home id="home-section"/>
    
  <AboutMe id="aboutme-section"/>

  <Resume id="resume-section"/>


<Projects id="home-section"/>
 <Services id="services-section"/>
      <ContactMeForm id="contact-section"/>

    </div>
  );
}

export default App;
