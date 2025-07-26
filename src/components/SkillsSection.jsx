import './SectionStyles.css';

const skills = [
  "Critical Reasoning", "Data Science & Machine Learning",
  "Full Stack Web Development", "Data Structures and Algorithms",
  "Problem-Solving", "Communication Skills", "Management Skills"
];
export default function SkillsSection() {
  return (
    <section className="section skills-section" id="skills">
      <h2>Technical & Soft Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div className="skill-card" key={idx}>{skill}</div>
        ))}
      </div>
    </section>
  );
}
