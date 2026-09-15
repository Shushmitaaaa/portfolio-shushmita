import React from 'react';
import expImg from '../assets/isro.jfif';
import powerupImg from '../assets/powerup.png';

export default function Experience() {
  return (
    <section className="experience-section">
      <p className="section-title">Experience</p>

      <div className="simple-item">
        <div className="item-main-row">
          <div className="org-logo">
            <img src={powerupImg} alt="PowerUp Money" />
          </div>

          <div className="item-info">
            <div className="item-header-top">
              <div className="title-group">
                <h3>PowerUp Money</h3>
                <span className="org-name">AI Engineer Intern</span>
              </div>
              <span className="item-date">Jun 2026 — Sep 2026</span>
            </div>
          </div>
        </div>
      </div>

      <div className="simple-item">
        <div className="item-main-row">
          <div className="org-logo">
            <img src={expImg} alt="ISRO" />
          </div>

          <div className="item-info">
            <div className="item-header-top">
              <div className="title-group">
                <h3>Indian Space Research Organization</h3>
                <span className="org-name">Machine Learning Intern</span>
              </div>
              <span className="item-date">Nov 2025 — Feb 2026</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}