import './App.css'
import Hero from './components/hero'
import Experience from './components/experience'
import Projects from './components/projects'
import Skills from './components/skills'
import Education from './components/education'
import {useState} from 'react'
import { Home, Github, Linkedin, Twitter, FileText, Moon } from 'lucide-react';

function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDockClick = () => {
    setIsExpanded(true);
    setTimeout(() => setIsExpanded(false), 300);
  };

  const writings = [
    {
      title: "What did I do with my first salary?",
      excerpt: "A reflection on milestones, financial independence, and that first taste of hard-earned reward...",
      link: "https://quora.com/your-link-1",
      date: "Nov 2024"
    },
    {
      title: "What do you want to become in your life?",
      excerpt: "Beyond titles and career ladders—finding the intersection of passion, purpose, and tech.",
      link: "https://quora.com/your-link-2",
      date: "Sept 2024"
    },
    {
      title: "What is love?",
      excerpt: "Exploring the most complex human emotion through the lens of logic, art, and life experience.",
      link: "https://quora.com/your-link-3",
      date: "Jan 2025"
    }
  ];
  return (
    <div className="portfolio-wrapper">
      <Hero />
      
      
      <section className="about-section" style={{marginTop:12}}>
        <p className="section-title" >About</p>
        <p className="about-text">
          I’m a 20-year-old CS student. I’m all about building things with code, breaking them down, and making them better. I’ve always had an interest in art, but I’m more focused on creating stuff that actually works and solving problems with technology. Robots catch my attention, and I love figuring out how they work. When I’m not coding, you’ll probably find me reading or messing around with my Japanese studies.
        </p>
      </section>

      <Experience /> 

      <Education />

      <Skills />
      
      <Projects />   

      <section className="writings-section">
  <div className="writing-header">
    <span className="contact-badge">WRITINGS</span>
    <h2 className="header-title">Born to be a writer forced to be an engineer :/</h2>
  </div>

    <div className="writings-thread">
      {writings.map((post, index) => (
        <div key={index} className="thread-item">
          <div className="thread-line">
            <div className="thread-dot"></div>
          </div>
          <a href={post.link} target="_blank" className="writing-card-vertical">
            <div className="card-header">
              <span className="writing-tag">{post.tag}</span>
              <span className="writing-date">{post.date}</span>
            </div>
            <h3 className="writing-card-title">{post.title}</h3>
            <p className="writing-excerpt">{post.excerpt}</p>
            <div className="read-link">Read full answer on Quora →</div>
          </a>
        </div>
      ))}
    </div>
  </section>

      <section className="contact-section">
          <div className="contact-badge">Contact</div>
          <h2 className="contact-title">Let's get in touch!</h2>
          <p className="contact-subtitle">
            Want to chat? Just shoot me a dm with a{" "}
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer">
              direct question on twitter
            </a>{" "}
            and I'll respond whenever I can.
          </p>
        </section>

      <nav 
        className={`nav-dock ${isExpanded ? 'dock-expand' : ''}`}
        onClick={handleDockClick}
      >
        <a href="#" target="_blank" title="Home"><Home size={20} strokeWidth={2.2} /></a>
        <a href="https://github.com/Shushmitaaaa" target="_blank" title="GitHub"><Github size={20} strokeWidth={2.2} /></a>
        <a href="#" target="_blank" title="LinkedIn"><Linkedin size={20} strokeWidth={2.2} /></a>
        <a href="#" target="_blank" title="X (Twitter)"><Twitter size={20} strokeWidth={2.2} /></a>
        <a href="#" target="_blank" title="Resume"><FileText size={20} strokeWidth={2.2} /></a>
        
        <span className="separator"></span>
        
        <button className="theme-toggle" title="Toggle Theme">
          <Moon size={20} strokeWidth={2.2} />
        </button>
      </nav>
    </div>
  )
}

export default App