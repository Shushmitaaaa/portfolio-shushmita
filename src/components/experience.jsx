import React from 'react';
import expImg from '../assets/isro.jfif';

export default function Experience() {
  return (
    <section className="experience-section">
      <p className="section-title">Experience</p>
      
      <div className="simple-item">
        <div className="item-main-row">
          <div className="org-logo">
            <img src={expImg} alt="ISRO" />
          </div>

          <div className="item-info">
            <div className="item-header-top">
              <div className="title-group">
                <h3>Indian Space Research Organization</h3>
                <span className="org-name">Research Intern | Machine Learning</span>
              </div>
              <span className="item-date">Oct 2025 — Present</span>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}