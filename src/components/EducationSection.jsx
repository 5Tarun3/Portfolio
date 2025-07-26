import './SectionStyles.css';

export default function EducationSection() {
  return (
    <section className="section education-section" id="education">
      <h2>Education</h2>
      <div className="edu-card">
        <h3>Bachelor of Technology<br />Computer Science Engineering</h3>
        <p>Vellore Institute of Technology, Chennai <span className="edu-dates">2023–2027</span></p>
        <p>CGPA: 9.57</p>
      </div>
      <div className="edu-card">
        <h3>Bachelor of Science<br />Data Science and Applications</h3>
        <p>Indian Institute of Technology, Madras <span className="edu-dates">2024–2027</span></p>
        <p>CGPA: 9.00</p>
      </div>
      <div className="edu-card">
        <h3>Secondary School</h3>
        <p>St John’s English School, Besant Nagar <span className="edu-dates">2019–2023</span></p>
        <ul>
          <li>Grade 10: 90.2%</li>
          <li>Grade 12: 96% (PCM + CS)</li>
        </ul>
      </div>
    </section>
  );
}
