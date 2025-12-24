"use client"
import { 
  Atom, FileCode, Terminal, Database, Layers, Globe, Cpu, 
  Code2, Coffee, FlaskConical, Brain, BarChart3, Sparkles, 
  Layout, Palette, Search 
} from 'lucide-react';

const techIcons = [
  { Icon: Atom, name: "React", color: "#61dafb" },
  { Icon: FileCode, name: "TypeScript", color: "#3178c6" },
  { Icon: Terminal, name: "Node.js", color: "#339933" },
  { Icon: Cpu, name: "Python", color: "#3776ab" },
  { Icon: FlaskConical, name: "Flask", color: "#ffffff" },
  { Icon: Brain, name: "TensorFlow", color: "#FF6F00" },
  { Icon: BarChart3, name: "Scikit-Learn", color: "#F7931E" },
  { Icon: Globe, name: "Next.js", color: "#ffffff" },
  { Icon: Layers, name: "Tailwind", color: "#38bdf8" },
  { Icon: Search, name: "NLP", color: "#4CAF50" }
  
];

export default function Skills() {

  return (
    <section className="skill-part">
      <h2 className="section-title-skill">Tech Stack</h2>
      
      <div className="skills-bento-box">
        <div className="marquee-container">
          <div className="marquee-content">
            
            {[...techIcons].map((item, i) => (
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