import './App.css'
import Hero from './components/hero'
import Experience from './components/experience'
import Projects from './components/projects'
import Skills from './components/skills'
import Education from './components/education'
import {useState,useEffect} from 'react'
import { Home, Github, Linkedin, Twitter, FileText, Moon , Sun} from 'lucide-react';

function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(true);


  const toggleTheme = (e) => {
    e.stopPropagation(); 
    setIsDarkMode(!isDarkMode);
  };

  
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  }, [isDarkMode]);

  const handleDockClick = () => {
    setIsExpanded(true);
    setTimeout(() => setIsExpanded(false), 300);
  };

  const writings = [
    {
      title: "First Salary",
      excerpt: "A reflection on milestones, financial independence, and that first taste of hard-earned reward...",
      link: "https://qr.ae/pCWrbN",
      date: "Nov 2024"
    },
    {
      title: "Hidden Aspiration",
      excerpt: "Beyond titles and career ladders—finding the intersection of passion, purpose, and tech.",
      link: "https://qr.ae/pCWrbu",
      date: "Jun 2025"
    },
    {
      title: "Love",
      excerpt: "Exploring the most complex human emotion through the lens of logic, art, and life experience.",
      link: "https://qr.ae/pCWr5u",
      date: "Jan 2024"
    }
  ];
  return (
    <div className="portfolio-wrapper">
      <Hero />
      
      
      <section className="about-section" >
        <p className="section-title" >About</p>
        <p className="about-text">
          I like building things with code and figuring out how they actually work.
          Right now, I’m deep into machine learning and the magic of teaching machines to think.
          I love working on projects that feel real, not just done for the sake of it.
          When I’m not coding, I’m usually writing messy, honest stuff on Quora or Medium, very active on X.
        </p>
      </section>

      <Experience /> 

      <Education />

      <Skills />
      
      <Projects />   

      <section className="writings-section">
        <div className="writing-header">
          <span className="contact-write-badge">Blogs</span>
          <h2 className="header-title">Sometimes, I write.</h2>
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
                <div className="read-link">Read →</div>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section">
          <div className="contact-badge">Contact</div>
          <h2 className="contact-title">Let's get in touch!</h2>
          <p className="contact-subtitle">
            If you have any inquiries, please feel free to reach out. You can contact me via {" "}
            <a href="shushmitatiwari718@gmail.com" target="_blank" rel="noreferrer">
              email.
            </a>{" "}
           
          </p>
        </section>

      <nav 
        className={`nav-dock ${isExpanded ? 'dock-expand' : ''}`}
        onClick={handleDockClick}
      >
        <a href="#" target="_blank" title="Home"><Home size={20} strokeWidth={2.2} /></a>
        <a href="https://github.com/Shushmitaaaa" target="_blank" title="GitHub"><Github size={20} strokeWidth={2.2} /></a>
        <a href="https://www.linkedin.com/in/shushmita-tiwari-811906273/" target="_blank" title="LinkedIn"><Linkedin size={20} strokeWidth={2.2} /></a>
        <a href="https://x.com/Shushmitaaa?s=20" target="_blank" title="X (Twitter)"><Twitter size={20} strokeWidth={2.2} /></a>
        <a href="resume_shushmita.pdf" target="_blank" title="Resume"><FileText size={20} strokeWidth={2.2} /></a>
        
        <span className="separator"></span>
        
        <button className="theme-toggle" title="Toggle Theme" onClick={toggleTheme}>
      {isDarkMode ? <Sun size={20} strokeWidth={2.2} /> : <Moon size={20} strokeWidth={2.2} />}
    </button>
      </nav>
    </div>
  )
}

export default App