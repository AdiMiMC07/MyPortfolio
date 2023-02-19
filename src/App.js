import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import MainSection from './components/MainSection';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <MainSection/>
      <About/>
      <Skills />
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
