import React from 'react';

export default function Experience() {
  return (
    <section className="experience-section">
      <p className="section-title">Experience</p>
      
      <div className="simple-item">
        <div className="item-main-row">
          <div className="org-logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcHHP28T27cC4skKqLxNFP0U4iNyqKhh8bKA&s" alt="ISRO" />
          </div>

          <div className="item-info">
            <div className="item-header-top">
              <div className="title-group">
                <h3>INDIAN SPACE RESEARCH ORGANISATION</h3>
                <span className="org-name">Machine Learning Intern</span>
              </div>
              <span className="item-date">Oct 2025 — Present</span>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}