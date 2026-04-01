export default function SkillsSection() {
  const skills = [
    { name: "React / Next.js", level: "90%" },
    { name: "TypeScript", level: "85%" },
    { name: "Node.js", level: "80%" },
    { name: "CSS / Tailwind", level: "95%" },
    { name: "UI/UX Design", level: "75%" },
    { name: "PostgreSQL", level: "70%" },
  ];

  return (
    <section className="section" id="skills-section">
      <div className="container">
        <span className="section-label">My Expertise</span>
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item">
              <div className="skill-item__header">
                <span className="skill-item__name">{skill.name}</span>
                <span className="skill-item__pct">{skill.level}</span>
              </div>
              <div className="skill-bar">
                <div className="skill-bar__fill" style={{ width: skill.level }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
