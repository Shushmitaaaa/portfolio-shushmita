import React, { useState } from 'react';

export default function Experience() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="experience-section">
      <p className="section-title">Experience</p>
      
      <div className={`exp-card ${isOpen ? 'is-open' : ''}`}>
        {/* Header - Clicking this toggles the state */}
        <div className="exp-card-header" onClick={() => setIsOpen(!isOpen)}>
          <div className="exp-left-group">
            <button className={`arrow-toggle-btn ${isOpen ? 'active' : ''}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
            <div className="exp-titles">
              <h3>Research Intern</h3>
              <span className="company-tag">ISRO</span>
            </div>
          </div>
          
          <div className="exp-meta-info">
            <span className="exp-date">Jul 2024 — Present</span>
            <span className="exp-location">Bengaluru, India</span>
          </div>
        </div>

        {/* Collapsible Content */}
        <div className={`exp-collapse-wrapper ${isOpen ? 'visible' : ''}`}>
          <div className="exp-inner-content">
            <ul className="work-bullet-list">
              <li>Developing high-performance spatial algorithms for satellite data processing.</li>
              <li>Optimizing backend storage modules using C++ and Rust for native speed.</li>
              <li>Collaborating with senior scientists on distributed compute clusters for imagery analysis.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}