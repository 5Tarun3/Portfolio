import './SectionStyles.css';
import profilePic from '../assets/profile.png'; // Add your image to src/assets

export default function BioSection() {
  return (
    <section className="section bio-section" id="bio">
      <div className="bio-container">
        <img src={profilePic} alt="Tarun Srikumar" className="profile-pic" />
        <div className="intro">
          <h1>Hi! I'm Tarun Srikumar</h1>
          <p>
            Driven by a passion for puzzles, mathematics, and innovation, I
specialize in engineering solutions that combine logical precision,
creative thinking, and cutting-edge technology to deliver impactful
results. <br /> I focus on shaping meaningful outcomes and continuously
advancing what comes next.
          </p>
          <div className="hobbies">
            <h3>Hobbies & Interests</h3>
            <ul>
              <li>Arts and Crafts / Sketching</li>
              <li>Nature Exploration</li>
              <li>Game Development</li>
              <li>Puzzles</li>
              <li>Mathematics</li>
              <li>Fiction</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
