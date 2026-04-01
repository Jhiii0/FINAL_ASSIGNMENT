import { useState } from "react";

export default function BioContent() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="section" id="bio-section" aria-label="About me biography">
      <div className="container">
        <div className="bio-content">
          {/* Avatar Column */}
          <div className="bio-avatar fade-up">
            <div className="bio-avatar__img" aria-label="Profile photo of Jhiro Dela Cruz">
              {!imgError ? (
                <img
                  src="/profile.jpg"
                  alt="Jhiro Dela Cruz"
                  onError={() => setImgError(true)}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "22px",
                    display: "block",
                  }}
                />
              ) : (
                <span style={{ fontSize: "5rem" }} aria-hidden="true">👤</span>
              )}
            </div>
            <div className="bio-avatar__ring" aria-hidden="true" />
          </div>

          {/* Text Column */}
          <div>
            <span className="bio-text__tag fade-up">📍 Putatan, Muntinlupa City</span>
            <span className="section-label fade-up" style={{ display: "block", marginBottom: "0.75rem" }}>
              About Me
            </span>
            <h2 className="section-title fade-up fade-up--delay-1">
              Passionate Developer &amp; Lifelong Learner
            </h2>
            <p className="fade-up fade-up--delay-2" style={{ marginBottom: "1rem" }}>
              Hi! I'm <strong style={{ color: "var(--accent-primary)" }}>Jhiro Dela Cruz</strong>, a
              full-stack developer passionate about building modern web applications.
              I thrive at the intersection of design and engineering, creating intuitive products
              that users love.
            </p>
            <p className="fade-up fade-up--delay-3" style={{ marginBottom: "2rem" }}>
              Currently pursuing a Bachelor's degree in Computer Science as part of an Elective course
              focused on modern frontend development. I believe in writing clean, maintainable code
              and continuously learning emerging technologies to deliver the best solutions possible.
            </p>

            {/* Quick Stats */}
            <div
              className="grid-3 fade-up fade-up--delay-4"
              style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "2rem" }}
            >
              {[
                { value: "3+", label: "Years Exp." },
                { value: "20+", label: "Projects" },
                { value: "10+", label: "Clients" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="card"
                  style={{ textAlign: "center", padding: "1.25rem 1rem" }}
                >
                  <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--accent-primary)", lineHeight: 1 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
