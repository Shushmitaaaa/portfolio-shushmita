import React, { useState } from 'react';
import ttImg from '../assets/susjobs.png';
import moviehuntImg from '../assets/moviee.png';
import bmiImg from '../assets/bmiii.png';
import susJobsImg from '../assets/susjobss.png';
import authImg from '../assets/auth.png';
import pImg from '../assets/ppre.png';
import cliImg from '../assets/clii.png';


const projectList = [
  { name: "SusJobs", category: "major", tags: ["Rust", "CLI"], desc: "A version control system for Spotify playlists. Built with Rust for high-performance terminal UI interaction.", image: susJobsImg,website:"susjobs-3.onrender.com"},
  { name: "TubeTales", category: "major", tags: ["Python","Flask","Groq","Javascript","Llama 3"], desc: "An AI-Powered YouTube video Summarizer using LLaMA 3 (70B) on Groq LLM.", image: ttImg,github:"https://github.com/Shushmitaaaa/Tubetales.git",website:"https://tubetales-1.onrender.com/" },
  { name: "DocBot", category: "major", tags: ["Rust", "Security"], desc: "An AI-powered medical chatbot that predicts possible diseases based on user symptoms", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600",github:"https://github.com/Shushmitaaaa/DocBot.git",website:"https://github.com/Shushmitaaaa/DocBot.git" },
  { name: "MovieHunt", category: "major", tags: ["React.js", "JavaScript","TMDB API","Appwrite"], desc: "A movie search app which helps in searching for a specific movies based on some filters.", image: moviehuntImg,github:"https://github.com/Shushmitaaaa/MovieHunt.git",website:"movie-hunt-ksh2.vercel.app/" },
  { name: "Predictra", category: "fun", tags: ["HTML", "CSS","JavaScipt"], desc: "PREDICTRA uses machine learning to predict your placement chances based on your academics, skills, and projects.", image: pImg,github:"https://github.com/Shushmitaaaa/Tic-Tac-Toe.git",website:" https://shushmitaaaa.github.io/Tic-Tac-Toe/" },
  { name: "Gmail-cleaner-cli", category: "fun", tags: ["JS", "Design"], desc: "A command-line tool to declutter your Gmail inbox by deleting or summarizing emails based on filters", image: cliImg ,github:"https://github.com/Shushmitaaaa/gmail-cleaner-cli.git",website:"https://github.com/Shushmitaaaa/gmail-cleaner-cli.git"},
  { name: "User-authentication-app", category: "fun", tags: ["SQL", "ETL"], desc: "A simple user authentication app that supports user signup, login, and protected routes using middleware-based authentication.", image: authImg,github:"https://github.com/Shushmitaaaa/user-authentication-app.git",website:"user-authentication-apps.onrender.com" },
  { name: "BMI-calculator", category: "fun", tags: ["HTML", "CSS","JavaScript"], desc: " Enter your height and weight to get your BMI along with a color-coded chart indicating your health category.", image:bmiImg,github:"https://github.com/Shushmitaaaa/BMI-calculator.git",website:" https://shushmitaaaa.github.io/BMI-calculator/" },
  
];

export default function Projects() {
  const [view, setView] = useState('major'); 
  // const [layout, setLayout] = useState('grid');
  const [search, setSearch] = useState('');

  const filteredProjects = projectList.filter(p => 
    p.category === view && 
    (p.name.toLowerCase().includes(search.toLowerCase()) || 
     p.tags.some(t => t.toLowerCase().includes(search.toLowerCase())))
  );

  return (
    
      <section className="projects-section">
        <div className="projects-header">
          <div className="contactt-badge" >
            Proof of Work
          </div>
            <h2 className="header-title">Check out my latest work</h2>
            <p className="header-subtitle">
            I've worked on a variety of projects, here are some that I like.
            </p>
        </div>

     
      <div className="command-center-box">
        <div className="search-wrapper">
          <span className="terminal-prefix">$</span>
          <input 
            type="text" 
            placeholder="Search projects" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="controls-right">
          <div className="toggle-pill">
            <div className={`pill-slider ${view}`}></div>
            <button className={view === 'major' ? 'active' : ''} onClick={() => setView('major')}>Major</button>
            <button className={view === 'fun' ? 'active' : ''} onClick={() => setView('fun')}>Fun</button>
          </div>

          {/* <div className="layout-switcher">
            <button className={layout === 'grid' ? 'active' : ''} onClick={() => setLayout('grid')}>⊞</button>
            <button className={layout === 'list' ? 'active' : ''} onClick={() => setLayout('list')}>≡</button>
          </div> */}
        </div>
      </div> 

      
      <div className={`viewport-grid`}>
        {filteredProjects.map((proj) => (
          <div key={proj.name} className={`grid-item smooth-reveal`}>
            <div className="item-img">
               <img src={proj.image} alt={proj.name} />
            </div>
            
            <div className="item-details">
              <div className="item-header">
                <div className="title-row">
                  <h3>{proj.name}</h3>
                  <span className="year-pill">{proj.year}</span>
                </div>
                <div className="tags-row">
                  {proj.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>

              {/* {layout === 'grid' && <p className="item-desc">{proj.desc}</p>} */}
              <p className="item-desc">{proj.desc}</p>
              
              <div className="project-links">
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noreferrer" className="btn-github">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    GitHub
                  </a>
                )}
                
                {proj.website && (
                  <a href={proj.website} target="_blank" rel="noreferrer" className="btn-website">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                    Website
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}