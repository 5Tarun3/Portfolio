import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CompactComponents.css';
import profPhoto from '../assets/suitphotopfp.jpg';
import resumePdf from '../assets/TARUN SRIKUMAR CV.pdf';
export default function BioSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const personalityTraits = [
    { icon: '🧩', title: 'Problem Solver', description: 'Love tackling complex challenges' },
    { icon: '🚀', title: 'Innovator', description: 'Always pushing boundaries' },
    { icon: '⚡', title: 'Fast Learner', description: 'Quick to adapt new technologies' },
    { icon: '🎯', title: 'Detail-Oriented', description: 'Precision in every solution' }
  ];

  const achievements = [
    { number: '5+', label: 'Projects Completed', icon: '📁' },
    { number: '10+', label: 'Technologies Mastered', icon: '🛠️' },
    { number: '3', label: 'Hackathons Won', icon: '🏆' }
  ];

  return (
    <section className={`section bio-section-improved ${isVisible ? 'section-visible' : ''}`}>
      <div className="section-header">
        <h2 className="gradient-text">About Me</h2>
        <p className="section-subtitle">Passionate developer crafting innovative solutions</p>
        <div className="header-decoration"></div>
      </div>
      
      <div className="bio-main-container">
        {/* Left Column - Profile & Stats */}
        <div className="bio-left-column">
          <div className="profile-section-improved">
            <div className="profile-pic-wrapper">
              <img 
                src={profPhoto}
                alt="Profile" 
                className="profile-pic-improved"
              />
              <div className="profile-ring-animated"></div>
            </div>
            
            <div className="profile-intro-brief">
              <h3>Tarun Srikumar</h3>
              <p className="profile-tagline">Full Stack Developer & AI Enthusiast</p>
            </div>
          </div>

          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.label}
                className="achievement-card"
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-content">
                  <span className="achievement-number">{achievement.number}</span>
                  <span className="achievement-label">{achievement.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Column - Detailed Info */}
        <div className="bio-right-column">
          <div className="bio-tabs">
            <button 
              className={`bio-tab ${activeTab === 'about' ? 'active' : ''}`}
              onClick={() => setActiveTab('about')}
            >
              About
            </button>
            <button 
              className={`bio-tab ${activeTab === 'personality' ? 'active' : ''}`}
              onClick={() => setActiveTab('personality')}
            >
              Personality
            </button>
            <button 
              className={`bio-tab ${activeTab === 'approach' ? 'active' : ''}`}
              onClick={() => setActiveTab('approach')}
            >
              Approach
            </button>
          </div>

          <div className="bio-content-area">
            {activeTab === 'about' && (
              <div className="bio-about-content">
                <p className="bio-paragraph">
                  <span className="highlight-text">Driven by a passion</span> for puzzles, mathematics, and innovation, I 
                  specialize in engineering solutions that combine <span className="highlight-text">logical precision</span>, 
                  creative thinking, and cutting-edge technology to deliver impactful results.
                </p>
                
                <p className="bio-paragraph">
                  I focus on shaping meaningful outcomes and continuously advancing what comes next, 
                  pushing the boundaries of what's possible in <span className="highlight-text">web development</span> and 
                  <span className="highlight-text"> artificial intelligence</span>.
                </p>

                <div className="bio-highlights">
                  <div className="highlight-item">
                    <span className="highlight-icon">🎓</span>
                    <span>Computer Science Engineering</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">💡</span>
                    <span>AI/ML Research Enthusiast</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🏅</span>
                    <span>Hackathon Winner</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'personality' && (
              <div className="bio-personality-content">
                <div className="personality-grid">
                  {personalityTraits.map((trait, index) => (
                    <div 
                      key={trait.title}
                      className="personality-card"
                      style={{ '--delay': `${index * 0.1}s` }}
                    >
                      <div className="personality-icon">{trait.icon}</div>
                      <h4 className="personality-title">{trait.title}</h4>
                      <p className="personality-description">{trait.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'approach' && (
              <div className="bio-approach-content">
                <div className="approach-item">
                  <h4>🎯 Problem-First Thinking</h4>
                  <p>I start by deeply understanding the problem before jumping into solutions, ensuring every line of code serves a purpose.</p>
                </div>
                <div className="approach-item">
                  <h4>🔄 Iterative Development</h4>
                  <p>Believer in continuous improvement through rapid prototyping, testing, and refinement.</p>
                </div>
                <div className="approach-item">
                  <h4>🤝 Collaborative Innovation</h4>
                  <p>Best solutions emerge from diverse perspectives and collaborative problem-solving sessions.</p>
                </div>
              </div>
            )}
          </div>

          <div className="bio-actions">
            <a href={resumePdf} download className="cta-button primary-cta" target="_blank" rel="noopener noreferrer">
              <span>Download Resume</span>
            </a>
            <Link to="/projects" className="cta-button secondary-cta">
              <span>View Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
