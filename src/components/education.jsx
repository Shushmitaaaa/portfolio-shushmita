import eduImg from '../assets/cit.jfif';

export default function Education() {
  return (
    <section className="education-section" style={{marginTop: '20px'}}>
      <p className="section-title">Education</p>
      
      <div className="simple-item">
        <div className="item-main-row">
          <div className="org-logo">
            <img src={eduImg} alt="College" />
          </div>
          <div className="item-info">
            <div className="item-header-top">
              <div className="title-group">
                <h3>Cambridge Institute Of Technology</h3>
                <span className="org-name">B.Tech in Artificial Intelligence and Machine Learning</span>
              </div>
              <span className="item-date">2023 — 2027 <br />CGPA:9.1/10</span>
            </div>
            <p className="about-text" style={{fontSize: '0.85rem', marginTop: '4px'}}>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}