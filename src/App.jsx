import './App.css'
import Hero from './components/hero'
import Experience from './components/experience'
import Projects from './components/projects'
import Skills from './components/skills'
import Education from './components/education'

function App() {
  return (
    <div className="portfolio-wrapper">
      <Hero />
      
      {/* ADDED THE CLASS NAME HERE */}
      <section className="about-section" style={{marginTop:12}}>
        <p className="section-title" >About</p>
        <p className="about-text">
          I’m a 20-year-old CS student. I’m all about building things with code, breaking them down, and making them better. I’ve always had an interest in art, but I’m more focused on creating stuff that actually works and solving problems with technology. Robots catch my attention, and I love figuring out how they work. When I’m not coding, you’ll probably find me reading or messing around with my Japanese studies.
        </p>
      </section>

      <Experience /> {/* Component 1 */}

      <Education />

      <Skills />
      
      <Projects />   {/* Component 2 */}

      <nav className="nav-dock">
        <button>🏠</button>
        <button>👤</button>
        <button>📁</button>
        <div style={{width: '1px', height: '20px', background: 'var(--border)'}}></div>
        <button>🐙</button>
        <button>📧</button>
        <button>🌙</button>
      </nav>
    </div>
  )
}

export default App