export default function ContactForm() {
  return (
    <section className="contact-section">
      <h2>Got an idea? Let's talk.</h2>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Jane Doe" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="jane@example.com" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows={4} placeholder="How can I help you?" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </section>
  );
}
