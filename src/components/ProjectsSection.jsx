import { useState, useRef, useEffect } from 'react';
import './SectionStyles.css';
import portfolioImage from '../assets/selfloop.png';  
import finflowImage from '../assets/finflow.png';
import flowspeakImage from '../assets/flowspeak.png';

const projects = [
  {
    id: 'finance-tracker',
    title: 'Finance Tracking & Budget Management',
    category: 'Full Stack',
    description: 'Engineered a full-stack, desktop-first finance tracker using MERN stack with custom animations and dynamic budgeting dashboard.',
    features: [
      'Real-time expense tracking with category-wise budgeting',
      'Interactive data visualizations with Chart.js',
      'Robust authentication and encrypted data storage',
      'AI-powered chatbot for personalized financial insights'
    ],
    techStack: ['React-vite','Node.js', 'MongoDB', 'Express','Firebase', 'Chart.js', 'JWT'],
    outcomes: [
      'Indepth visualization of financial analysis and planning',
      'Simple interface for expense and income management',
      'Enhanced user engagement with personalized AI insights'
    ],
    image: finflowImage,
    demoLink: 'https://finflow-sigma.vercel.app/demo',
    codeLink: 'https://github.com/5Tarun3/personal-finance-tracker',
    status: 'Completed',
    timeline: '4 months'
  },
  {
    id: 'flowspeak',
    title: 'FlowSpeak - AI Speech Therapy',
    category: 'AI/ML',
    description: 'AI-powered speech therapy application utilizing Wave2vec and BERT models for stutter detection and correction.',
    features: [
      'Real-time audio analysis with Wave2vec model',
      'Stutter classification (repetitions, prolongations, blocks)',
      'BERT-based speech correction suggestions',
      'Interactive therapy exercises with adaptive pacing'
    ],
    techStack: ['Python', 'TensorFlow', 'BERT', 'React-vite', 'Flask', 'WebRTC','Wave2Vec'],
    outcomes: [
      'Achieved 87% accuracy in stutter detection & classification',
      'Easy to use interactive real-time interface for speech therapy',
      'Won Vashisht 2.0 Hackathon - 1st Place'
    ],
    image: flowspeakImage,
    demoLink: 'https://github.com/DerrickUnleashed/Stutter-Detection-and-Therapy',
    codeLink: 'https://github.com/DerrickUnleashed/Stutter-Detection-and-Therapy',
    status: 'Completed',
    timeline: '2 days',
    award: 'Winner - Vashisht 2.0'
  },
  {
    id: 'portfolio-3d',
    title: '3D Interactive Portfolio',
    category: 'Frontend',
    description: 'Advanced portfolio website showcasing cutting-edge frontend development with 3D animations and interactive effects.',
    features: [
      'Advanced 3D CSS animations and transformations',
      'Particle system and glassmorphism effects',
      'Matrix rain and holographic overlays',
      'Responsive design with accessibility features'
    ],
    techStack: ['React-vite', 'CSS3', 'JavaScript', 'Three.js'],
    outcomes: [
      'Learned advanced CSS techniques',
      'Showcased in-depth personal achievements and projects',
      'Enhanced user engagement with interactive 3D elements'
    ],
    image: portfolioImage,
    demoLink: 'https://taruns-portfolio-lime.vercel.app',
    codeLink: 'https://github.com/5Tarun3/Portfolio',
    status: 'In Progress',
    timeline: '2 days'
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  const categories = ['All', 'Full Stack', 'AI/ML', 'Frontend'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-projects');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section projects-section" ref={sectionRef}>
      <div className="section-header">
        <h2 className="gradient-text">💡 Featured Projects</h2>
        <p className="section-subtitle">Innovative solutions that make a difference</p>
        <div className="header-decoration"></div>
      </div>

      {/* Project Filters */}
      <div className="project-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            onClick={() => setActiveFilter(category)}
          >
            <span>{category}</span>
            <div className="filter-glow"></div>
          </button>
        ))}
      </div>

      {/* Projects Layout */}
      <div className="projects-layout">
        {/* Project Cards */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card enhanced-project-card ${
                selectedProject.id === project.id ? 'selected' : ''
              } ${hoveredProject === project.id ? 'hovered' : ''}`}
              style={{ '--animation-delay': `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-status">{project.status}</div>
                  {project.award && (
                    <div className="project-award">🏆 {project.award}</div>
                  )}
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech-preview">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="tech-more">+{project.techStack.length - 3}</span>
                  )}
                </div>
              </div>
              
              <div className="project-glow"></div>
            </div>
          ))}
        </div>

        {/* Project Details */}
        <div className="project-details">
          <div className="project-details-header">
            <h3>{selectedProject.title}</h3>
            <div className="project-meta">
              <span className="project-timeline">📅 {selectedProject.timeline}</span>
              <span className="project-category-badge">{selectedProject.category}</span>
            </div>
          </div>

          <div className="project-description-full">
            <p>{selectedProject.description}</p>
          </div>

          {/* Key Features */}
          <div className="project-features">
            <h4>🚀 Key Features</h4>
            <ul>
              {selectedProject.features.map((feature, index) => (
                <li key={index} className="feature-item">
                  <span className="feature-bullet">▶</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="project-tech-stack">
            <h4>🛠️ Technology Stack</h4>
            <div className="tech-stack-grid">
              {selectedProject.techStack.map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>

          {/* Business Outcomes */}
          <div className="project-outcomes">
            <h4>📈 Outcomes & Impact</h4>
            <ul>
              {selectedProject.outcomes.map((outcome, index) => (
                <li key={index} className="outcome-item">
                  <span className="outcome-bullet">✓</span>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="project-actions">
            <a 
              href={selectedProject.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button primary-cta"
            >
              <span>🌐 Live Demo</span>
              <div className="button-glow"></div>
            </a>
            <a 
              href={selectedProject.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button secondary-cta"
            >
              <span>📂 Source Code</span>
              <div className="button-glow"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
