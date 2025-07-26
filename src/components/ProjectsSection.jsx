import './SectionStyles.css';

export default function ProjectsSection() {
  return (
    <section className="section projects-section" id="projects">
      <h2>💡 Projects</h2>
      <div className="proj-cards">
        <div className="proj-card">
          <h3><a href="https://github.com/5Tarun3/personal-finance-tracker" target="_blank" rel="noopener noreferrer">Finance Tracking & Budget Management Application</a></h3>
          <ul>
            <li>Engineered a full-stack, desktop-first finance tracker using MERN stack with custom animations and a dynamic budgeting dashboard.</li>
            <li>Real-time expense tracking, category-wise budgeting, and interactive data visualizations.</li>
            <li>Robust authentication and secure transaction history management.</li>
            <li>AI-powered chatbot provides personalized financial insights on demand.</li>
          </ul>
        </div>
        <div className="proj-card">
          <h3><a href="https://github.com/DerrickUnleashed/Stutter-Detection-and-Therapy" target="_blank" rel="noopener noreferrer">FlowSpeak</a></h3>
          <ul>
            <li>Utilizes a pre-trained deep learning model (Wave2vec) to analyze audio input and classify different types of stutters (e.g., repetitions, prolongations, and blocks).</li>
            <li>Provides real-time feedback to users with visual and audio indicators.</li>
            <li>Incorporates a fine-tuned BERT model to suggest corrections and alternatives for detected stuttered speech.</li>
            <li>Generates context-aware suggestions to guide users in improving speech fluency.</li>
            <li>Interactive speech therapy exercises with configuration options to modify pacing according to the user's stutter profile.</li>
            <li>MERN stack with BERT transformer; frontend in ReactJS, backend API with Python + Flask.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
