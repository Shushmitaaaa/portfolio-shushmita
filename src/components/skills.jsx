"use client"
import { Atom, FileCode, Terminal, Database, Github, Layers, Globe, Cpu } from 'lucide-react';

const techIcons = [
  { Icon: Atom, name: "React", color: "#61dafb" },
  { Icon: FileCode, name: "TypeScript", color: "#3178c6" },
  { Icon: Terminal, name: "Node.js", color: "#339933" },
  { Icon: Database, name: "PostgreSQL", color: "#336791" },
  { Icon: Globe, name: "Next.js", color: "#ffffff" },
  { Icon: Github, name: "GitHub", color: "#ffffff" },
  { Icon: Layers, name: "Tailwind", color: "#38bdf8" },
  { Icon: Cpu, name: "Python", color: "#3776ab" },
];

export default function Skills() {
  return (
    <section className="portfolio-wrapper">
      <h2 className="section-title">Skills</h2>
      
      <div className="skills-bento-box">
        <div className="marquee-container">
          <div className="marquee-content">
            
            {[...techIcons, ...techIcons].map((item, i) => (
              <div key={i} className="marquee-pair">
                <item.Icon size={22} style={{ color: item.color }} />
                <span className="marquee-text">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}