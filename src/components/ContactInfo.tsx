const contactItems = [
  {
    id: "info-email",
    icon: "✉️",
    label: "Email",
    value: "jhiro.delacruz@dev.com",
    href: "mailto:jhiro.delacruz@dev.com",
  },
  {
    id: "info-location",
    icon: "📍",
    label: "Location",
    value: "Putatan, Muntinlupa City",
    href: null,
  },
  {
    id: "info-availability",
    icon: "🟢",
    label: "Availability",
    value: "Open to freelance & full-time",
    href: null,
  },
];

export default function ContactInfo() {
  return (
    <div className="fade-up fade-up--delay-1">
      <span className="section-label">Reach Out</span>
      <h3 className="section-title" style={{ marginTop: "0.5rem", marginBottom: "0.75rem" }}>
        Get In Touch
      </h3>
      <p style={{ marginBottom: "2rem" }}>
        Have a project in mind or just want to say hello? I'm always open to discussing
        new opportunities, creative ideas, or ways to collaborate.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {contactItems.map((item) => (
          <div key={item.id} id={item.id} className="contact-info-item">
            <div className="contact-info-item__icon" aria-hidden="true">{item.icon}</div>
            <div>
              <div className="contact-info-item__label">{item.label}</div>
              {item.href ? (
                <a href={item.href} className="contact-info-item__value" style={{ color: "var(--text-primary)" }}>
                  {item.value}
                </a>
              ) : (
                <span className="contact-info-item__value">{item.value}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
