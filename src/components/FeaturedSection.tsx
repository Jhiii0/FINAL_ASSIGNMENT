const features = [
  {
    id: "feat-frontend",
    icon: "🎨",
    title: "Frontend Development",
    desc: "Building responsive, pixel-perfect UIs with React, TypeScript, and modern CSS techniques including animations and glassmorphism.",
  },
  {
    id: "feat-backend",
    icon: "⚙️",
    title: "Backend Development",
    desc: "Designing scalable REST APIs and microservices using Node.js, Express, and managing data with SQL and NoSQL databases.",
  },
  {
    id: "feat-devops",
    icon: "🚀",
    title: "DevOps & Deployment",
    desc: "Containerizing apps with Docker, setting up CI/CD pipelines, and deploying to cloud platforms like Vercel and AWS.",
  },
];

export default function FeaturedSection() {
  return (
    <section className="section" id="featured-section" aria-label="Featured skills">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-label fade-up">What I Do</span>
          <h2 className="section-title fade-up fade-up--delay-1">My Core Expertise</h2>
          <p className="section-subtitle fade-up fade-up--delay-2" style={{ margin: "0 auto" }}>
            Specializing in end-to-end web development with a focus on performance,
            scalability, and exceptional user experiences.
          </p>
        </div>

        <div className="grid-3">
          {features.map((feat, i) => (
            <article
              key={feat.id}
              id={feat.id}
              className={`card fade-up fade-up--delay-${i + 1}`}
            >
              <div className="featured-card__icon" aria-hidden="true">{feat.icon}</div>
              <h3 className="featured-card__title">{feat.title}</h3>
              <p>{feat.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
