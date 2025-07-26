import './SectionStyles.css';
import python from '../assets/tech/python.svg';
import c from '../assets/tech/c.svg';
import cpp from '../assets/tech/cpp.svg';
import html from '../assets/tech/html5.svg';
import css from '../assets/tech/css.svg';
import js from '../assets/tech/javascript.svg';
import java from '../assets/tech/java.png';
import r from '../assets/tech/r.svg';
import matlab from '../assets/tech/matlab.png';
import asm from '../assets/tech/assembly.svg';
import sql from '../assets/tech/sqlite.svg';
// ...frameworks icons: add to /assets/tech

const languages = [
  {name:"Python", icon:python}, {name:"C", icon:c}, {name:"C++", icon:cpp},
  {name:"HTML", icon:html}, {name:"CSS", icon:css}, {name:"JavaScript", icon:js},
  {name:"Java", icon:java}, {name:"R", icon:r}, {name:"Matlab", icon:matlab},
  {name:"Assembly", icon:asm}, {name:"SQLite", icon:sql}
];

const frameworks = [
  // Add your technology icons similarly here, e.g.
  // {name: "React", icon:reactIcon}
];

export default function TechStackSection() {
  return (
    <section className="section techstack-section" id="tech-stack">
      <h2>Tech Stack</h2>
      <div className="stack-category">
        <h4>Languages</h4>
        <div className="tech-icons">
          {languages.map((item, idx) =>
            <img src={item.icon} alt={item.name} title={item.name} key={idx} className="tech-icon" />
          )}
        </div>
      </div>
      <div className="stack-category">
        <h4>Frameworks & Technologies</h4>
        <div className="tech-icons">
          {/* Repeat for frameworks */}
        </div>
      </div>
    </section>
  );
}
