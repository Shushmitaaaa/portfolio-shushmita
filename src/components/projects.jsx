import React, { useState } from 'react';

const projectList = [
  { name: "Grit", category: "major", year: "2025", tags: ["Rust", "CLI"], desc: "A version control system for Spotify playlists. Built with Rust for high-performance terminal UI interaction.", image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&w=600" },
  { name: "PixTorrent", category: "major", year: "2024", tags: ["Go", "P2P"], desc: "Distributed peer-to-peer file sharing system implementing the core BitTorrent protocol from scratch.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600" },
  { name: "Vaultify", category: "major", year: "2024", tags: ["Rust", "Security"], desc: "End-to-end encrypted secrets management tool with an emphasis on speed and developer experience.", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600" },
  { name: "NebulaDB", category: "major", year: "2023", tags: ["C++", "Storage"], desc: "A custom LSM-tree based key-value store optimized for high-write throughput environments.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=600" },
  { name: "CHUG", category: "fun", year: "2024", tags: ["SQL", "ETL"], desc: "A quirky, high-speed data sync tool for moving PostgreSQL records into ClickHouse analytics.", image: "https://images.unsplash.com/photo-1551288049-bbbda536ad89?auto=format&fit=crop&w=600" },
  { name: "UptimeX", category: "fun", year: "2023", tags: ["Next.js", "SSL"], desc: "A clean dashboard for monitoring server health with native Discord and Telegram webhooks.", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600" },
  { name: "ZenTab", category: "fun", year: "2024", tags: ["JS", "Design"], desc: "A browser extension that replaces your new tab with generative art and a focus timer.", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600" },
  { name: "MochiSynth", category: "fun", year: "2025", tags: ["Python", "DSP"], desc: "A digital synthesizer that converts hand movements via webcam into lo-fi beats.", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600" }
];

export default function Projects() {
  const [view, setView] = useState('major'); 
  const [layout, setLayout] = useState('grid');
  const [search, setSearch] = useState('');

  const filteredProjects = projectList.filter(p => 
    p.category === view && 
    (p.name.toLowerCase().includes(search.toLowerCase()) || 
     p.tags.some(t => t.toLowerCase().includes(search.toLowerCase())))
  );

  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>

      {/* --- COMMAND CENTER (The Box Styling) --- */}
      <div className="command-center-box">
        <div className="search-wrapper">
          <span className="terminal-prefix">$</span>
          <input 
            type="text" 
            placeholder="filter_projects..." 
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

          <div className="layout-switcher">
            <button className={layout === 'grid' ? 'active' : ''} onClick={() => setLayout('grid')}>⊞</button>
            <button className={layout === 'list' ? 'active' : ''} onClick={() => setLayout('list')}>≡</button>
          </div>
        </div>
      </div>

      {/* --- DYNAMIC VIEWPORT --- */}
      <div className={`viewport-${layout}`}>
        {filteredProjects.map((proj) => (
          <div key={proj.name} className={`${layout}-item smooth-reveal`}>
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

              {layout === 'grid' && <p className="item-desc">{proj.desc}</p>}
              
              <a href="#" className="launch-btn">
                Launch <span className="arrow">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}