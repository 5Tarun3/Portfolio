import './SectionStyles.css';

const languages = ["English", "German", "Tamil", "Hindi"];
export default function LanguagesSection() {
  return (
    <section className="section languages-section" id="languages">
      <h2>Languages Spoken</h2>
      <div className="languages-list">
        {languages.map((lang, idx) => <span className="language-badge" key={idx}>{lang}</span>)}
      </div>
    </section>
  );
}
