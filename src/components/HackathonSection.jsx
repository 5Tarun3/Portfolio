import './SectionStyles.css';

export default function HackathonSection() {
  return (
    <section className="section hackathon-section" id="hackathon-wins">
      <h2>🏆 Hackathon Wins</h2>
      <div className="hackathon-cards">
        <div className="hack-card">
          <h4>IITM Paradox’24</h4>
          <span className="hack-date">2024</span>
          <p>Winner - EncryptID (online crypthunt | cyber security and forensics)</p>
        </div>
        <div className="hack-card">
          <h4>IIITDM Vashisht </h4>
          <span className="hack-date">2024</span>
          <p>Winner - Vashisht 2.0 (Flagship Event - Miscellaneous category)</p>
          <p>Winner - AI Analytics Challenge (Best EDA)</p>
        </div>
      </div>
    </section>
  );
}
