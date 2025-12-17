import './App.css'
import Hero from './components/hero'
import Skills from './components/skills'

function App() {
  return (
    <div className="portfolio-wrapper">
      <Hero />
      
      <section style={{marginBottom: '0px'}}>
        <h2 style={{color: 'white', fontSize: '1.1rem', marginBottom: '1rem'}}>About</h2>
        <p style={{lineHeight: '1.7', fontSize: '1.05rem'}}>
          I'm a CS student focused on building clean, functional applications. 
          I love exploring how things work under the hood. When I'm not coding, 
          you'll probably find me reading or messing around with new designs.
        </p>
      </section>
      <Skills />

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