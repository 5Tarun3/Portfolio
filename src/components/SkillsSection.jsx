import { useState, useRef, useEffect } from 'react';
import './SectionStyles.css';

const skillCategories = {
  'Full Stack Development': [
    { name: 'React & Next.js', level: 95, color: '#61DAFB' },
    { name: 'Node.js & Express', level: 85, color: '#68A063' },
    { name: 'MongoDB & SQL', level: 85, color: '#47A248' },
    { name: 'TypeScript', level: 80, color: '#3178C6' }
  ],
  'AI & Machine Learning': [
    { name: 'Python & TensorFlow', level: 90, color: '#FF6F00' },
    { name: 'Exploratory Data Analysis', level: 95, color: '#FF4081' },
    { name: 'Computer Vision', level: 80, color: '#9C27B0' },
    { name: 'NLP & BERT', level: 85, color: '#673AB7' }
  ],
  'Core Programming': [
    { name: 'Data Structures & Algorithms', level: 90, color: '#F44336' },
    { name: 'System Design', level: 85, color: '#FF9800' },
    { name: 'Problem Solving', level: 95, color: '#4CAF50' },
    { name: 'Code Optimization', level: 90, color: '#2196F3' }
  ],
  'Soft Skills': [
    { name: 'Critical Reasoning', level: 95, color: '#E91E63' },
    { name: 'Communication', level: 90, color: '#9C27B0' },
    { name: 'Leadership & Management', level: 85, color: '#673AB7' },
    { name: 'Team Collaboration', level: 95, color: '#3F51B5' }
  ]
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('Full Stack Development');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-skills');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section skills-section" ref={sectionRef}>
      <div className="section-header">
        <h2 className="gradient-text">Technical & Soft Skills</h2>
        <p className="section-subtitle">Expertise across multiple domains</p>
        <div className="header-decoration"></div>
      </div>

      {/* Category Tabs */}
      <div className="skill-categories">
        {Object.keys(skillCategories).map((category) => (
          <button
            key={category}
            className={`category-tab ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            <span>{category}</span>
            <div className="tab-glow"></div>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid enhanced-skills-grid">
        {skillCategories[activeCategory].map((skill, index) => (
          <div
            key={skill.name}
            className={`skill-card enhanced-skill-card ${hoveredSkill === skill.name ? 'hovered' : ''}`}
            style={{
              '--skill-color': skill.color,
              '--animation-delay': `${index * 0.1}s`
            }}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="skill-content">
              <h3 className="skill-name">{skill.name}</h3>
              
              {/* Circular Progress */}
              <div className="skill-progress-circle">
                <svg width="120" height="120" className="progress-ring">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    className="progress-ring-bg"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    className="progress-ring-fill"
                    style={{
                      strokeDasharray: `${2 * Math.PI * 50}`,
                      strokeDashoffset: `${2 * Math.PI * 50 * (1 - skill.level / 100)}`
                    }}
                  />
                </svg>
                <div className="skill-percentage">
                  <span className="percentage-number">{skill.level}</span>
                  <span className="percentage-symbol">%</span>
                </div>
              </div>
              
              {/* Skill Level Bar */}
              <div className="skill-level-bar">
                <div 
                  className="skill-level-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
            
            <div className="skill-glow"></div>
            <div className="skill-particles">
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Skill Summary */}
      <div className="skills-summary">
        <div className="summary-item">
          <div className="summary-icon">🚀</div>
          <div className="summary-content">
            <h4>Fast Learning</h4>
            <p>Quickly adapt to new technologies and frameworks</p>
          </div>
        </div>
        <div className="summary-item">
          <div className="summary-icon">🎯</div>
          <div className="summary-content">
            <h4>Result-Oriented</h4>
            <p>Focus on delivering high-quality, scalable solutions</p>
          </div>
        </div>
        <div className="summary-item">
          <div className="summary-icon">🔥</div>
          <div className="summary-content">
            <h4>Passionate</h4>
            <p>Driven by curiosity and love for clean, efficient code</p>
          </div>
        </div>
      </div>
    </section>
  );
}
