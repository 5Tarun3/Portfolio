import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import EducationPage from './pages/EducationPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactSection from './components/ContactSection';

function App() {
  useEffect(() => {
    // Initialize advanced interactive effects
    const initializeEffects = () => {
      // 3D Mouse Movement Effect
      document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;
        
        // Apply parallax effect to 3D shapes
        const shapes = document.querySelectorAll('.shape');
        shapes.forEach((shape, index) => {
          const speed = (index + 1) * 0.3;
          shape.style.transform = `translate3d(${x * speed * 30}px, ${y * speed * 20}px, 0) rotateX(${y * 10}deg) rotateY(${x * 10}deg)`;
        });
        
        // Apply subtle rotation to App container
        const app = document.querySelector('.App');
        if (app) {
          app.style.transform = `perspective(1200px) rotateX(${y * 1}deg) rotateY(${x * 1}deg)`;
        }
      });

      // Dynamic Fire Particles
      const createFireParticle = () => {
        const fireContainer = document.querySelector('.fire-container');
        if (!fireContainer) return;
        
        const particle = document.createElement('div');
        particle.className = 'fire-particle dynamic-fire';
        particle.style.left = (Math.random() * 80 + 10) + '%';
        particle.style.width = (Math.random() * 8 + 4) + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `radial-gradient(circle, hsl(${Math.random() * 60 + 10}, 100%, 65%), transparent)`;
        particle.style.animation = `fireRise ${2 + Math.random() * 2}s ease-out forwards`;
        
        fireContainer.appendChild(particle);
        
        setTimeout(() => {
          if (particle.parentNode) {
            particle.remove();
          }
        }, 4000);
      };
      
      // Create fire particles every 300ms
      setInterval(createFireParticle, 300);
    };

    initializeEffects();
  }, []);

  return (
    <Router>
      {/* Ultimate 3D Animated Background System */}
      <div className="animated-background">
        <div className="enhanced-grid"></div>
        <div className="holographic-overlay"></div>
        
        {/* Fire Particle System */}
        <div className="fire-container">
          <div className="fire-particle fire-particle-1"></div>
          <div className="fire-particle fire-particle-2"></div>
          <div className="fire-particle fire-particle-3"></div>
          <div className="fire-particle fire-particle-4"></div>
          <div className="fire-particle fire-particle-5"></div>
        </div>
        
        {/* Lightning Effects */}
        <div className="lightning-container">
          <div className="lightning-bolt lightning-1"></div>
          <div className="lightning-bolt lightning-2"></div>
        </div>
        
        {/* Advanced 3D Shapes */}
        <div className="shape shape-cube"></div>
        <div className="shape shape-pyramid"></div>
        <div className="shape shape-sphere"></div>
        <div className="shape shape-torus"></div>
        
        {/* Matrix Rain Effect */}
        <div className="matrix-rain">
          <div className="matrix-column" style={{left: '10%', animationDelay: '0s'}}>01001</div>
          <div className="matrix-column" style={{left: '20%', animationDelay: '1s'}}>11010</div>
          <div className="matrix-column" style={{left: '30%', animationDelay: '2s'}}>00110</div>
          <div className="matrix-column" style={{left: '40%', animationDelay: '3s'}}>10101</div>
          <div className="matrix-column" style={{left: '50%', animationDelay: '4s'}}>01110</div>
          <div className="matrix-column" style={{left: '60%', animationDelay: '5s'}}>11001</div>
          <div className="matrix-column" style={{left: '70%', animationDelay: '6s'}}>00101</div>
          <div className="matrix-column" style={{left: '80%', animationDelay: '7s'}}>10110</div>
          <div className="matrix-column" style={{left: '90%', animationDelay: '8s'}}>01011</div>
        </div>
        
        {/* Neon Floating Particles */}
        <div className="neon-particle neon-particle-1"></div>
        <div className="neon-particle neon-particle-2"></div>
        <div className="neon-particle neon-particle-3"></div>
      </div>

      <div className="App">
        {/* Enhanced Navigation */}
        <nav className="navbar">
          <Link to="/" className="nav-link">
            <span>Home</span>
            <div className="nav-glow"></div>
          </Link>
          <Link to="/skills" className="nav-link">
            <span>Skills</span>
            <div className="nav-glow"></div>
          </Link>
          <Link to="/education" className="nav-link">
            <span>Education</span>
            <div className="nav-glow"></div>
          </Link>
          <Link to="/projects" className="nav-link">
            <span>Projects</span>
            <div className="nav-glow"></div>
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>

        <ContactSection />
      </div>
    </Router>
  );
}

export default App;
