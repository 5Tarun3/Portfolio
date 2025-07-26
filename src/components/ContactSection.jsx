import './SectionStyles.css';
import githubLogo from '../assets/github.svg';
import linkedinLogo from '../assets/linkedin.png';

export default function ContactSection() {
  return (
    <section className="section contact-section" id="contact">
      <h2>Contact</h2>
      <ul className="contact-list">
        <li>📞 (+91) 9087744578</li>
        <li>✉️ tarun.devrath@gmail.com</li>
        <li>📍 Chennai, Tamil Nadu, India</li>
        <li>
          <a href="https://github.com/5Tarun3" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" className="contact-icon" />GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/tarun-srikumar-273585282/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className="contact-icon" />LinkedIn
          </a>
        </li>
      </ul>
    </section>
  );
}
