import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import EducationPage from './pages/EducationPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/education">Education</Link>
          <Link to="/projects">Projects</Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </main>
        <footer>
          <ContactSection />
          <div>© 2025 Tarun Srikumar</div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
