import './SectionStyles.css';
import { Link } from 'react-router-dom';

function EncryptID() {
  return (
    <div className="hack-card">
      <h4>IITM Paradox’24</h4>
      <span className="hack-date">2024</span>
      <p>Winner - EncryptID (online crypthunt | cyber security and forensics)</p>
      <p>Details: Focused on digital forensics and cryptographic techniques to solve challenges.</p>
    </div>
  );
}

function VashishtFlagship() {
  return (
    <div className="hack-card">
      <h4>IIITDM Vashisht</h4>
      <span className="hack-date">2025</span>
      <p>
        Winner - Vashisht 2.0 (Flagship Event - Miscellaneous category) - Our project: <Link to="/projects" style={{color: 'inherit', textDecoration: 'underline'}}>FlowSpeak</Link>
      </p>
    </div>
  );
}

function VashishtAIAnalytics() {
  return (
    <div className="hack-card">
      <h4>IIITDM Vashisht</h4>
      <span className="hack-date">2025</span>
      <p>
        Winner - AI Analytics Challenge (Best EDA) - We performed the best exploratory data analysis and handled class imbalanced dataset effectively.
      </p>
    </div>
  );
}

export default function HackathonSection() {
  return (
    <section className="section hackathon-section" id="hackathon-wins">
      <h2>🏆 Hackathon Wins</h2>
      <div className="hackathon-cards">
        <VashishtAIAnalytics />
        <VashishtFlagship />
        <EncryptID />
      </div>
    </section>
  );
}
