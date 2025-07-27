import './SectionStyles.css';

const hobbies = [
  { name: 'Puzzle Solving', icon: '🧩', description: 'Complex mathematical and logical challenges' },
  { name: 'Chess Strategy', icon: '♟️', description: 'Advanced tactical gameplay and analysis' },
  { name: 'Competitive Programming', icon: '💻', description: 'Algorithm optimization and contests' },
  { name: 'Machine Learning Research', icon: '🤖', description: 'Exploring cutting-edge AI techniques' },
  { name: 'Creative Coding', icon: '🎨', description: 'Building interactive visual experiences' },
  { name: 'Tech Innovation', icon: '🚀', description: 'Exploring emerging technologies' }
];

export default function HobbiesSection() {
  return (
    <section className="section hobbies-section">
      <div className="section-header">
        <h2 className="gradient-text">🎯 Interests & Hobbies</h2>
        <p className="section-subtitle">Passions that fuel my creativity and growth</p>
        <div className="header-decoration"></div>
      </div>

      <div className="hobbies-grid">
        {hobbies.map((hobby, index) => (
          <div 
            key={hobby.name}
            className="hobby-card"
            style={{ '--animation-delay': `${index * 0.1}s` }}
          >
            <div className="hobby-icon">{hobby.icon}</div>
            <h3 className="hobby-name">{hobby.name}</h3>
            <p className="hobby-description">{hobby.description}</p>
            <div className="hobby-glow"></div>
          </div>
        ))}
      </div>
    </section>
  );
}