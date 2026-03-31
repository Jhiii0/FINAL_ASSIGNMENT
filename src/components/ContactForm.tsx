import { useForm } from "react-hook-form";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  let formHooks;
  try {
    formHooks = useForm<FormData>();
  } catch (err: any) {
    return (
      <div className="card" style={{ border: '2px solid red', padding: '1rem' }}>
        <h3 style={{ color: 'red' }}>⚠️ ContactForm Crash Detected</h3>
        <p>Error: {err.message || "Unknown hook error"}</p>
        <p>This usually happens due to a <strong>Duplicate React</strong> or <strong>Missing Dependency</strong> issue after merging.</p>
      </div>
    );
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = formHooks;

  const onSubmit = async (data: FormData) => {
    // Simulate network request
    await new Promise((res) => setTimeout(res, 1200));
    console.log("Form submitted:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="card fade-up" id="contact-form-card">
      <span className="section-label">Send a Message</span>
      <h3 className="section-title" style={{ marginTop: "0.5rem", marginBottom: "1.5rem" }}>
        Let's Talk
      </h3>

      {submitted && (
        <div className="form-success" id="form-success-msg" role="alert">
          ✅ Message sent successfully! I'll get back to you soon.
        </div>
      )}

      <form
        className="contact-form"
        onSubmit={handleSubmit(onSubmit)}
        id="contact-form"
        noValidate
      >
        {/* Name */}
        <div className="form-group">
          <label className="form-label" htmlFor="field-name">Full Name</label>
          <input
            id="field-name"
            className="form-input"
            type="text"
            placeholder="John Doe"
            aria-invalid={!!errors.name}
            {...register("name", {
              required: "Name is required.",
              minLength: { value: 2, message: "Name must be at least 2 characters." },
            })}
          />
          {errors.name && (
            <span className="form-error" role="alert">{errors.name.message}</span>
          )}
        </div>

        {/* Email */}
        <div className="form-group">
          <label className="form-label" htmlFor="field-email">Email Address</label>
          <input
            id="field-email"
            className="form-input"
            type="email"
            placeholder="john@example.com"
            aria-invalid={!!errors.email}
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address.",
              },
            })}
          />
          {errors.email && (
            <span className="form-error" role="alert">{errors.email.message}</span>
          )}
        </div>

        {/* Subject */}
        <div className="form-group">
          <label className="form-label" htmlFor="field-subject">Subject</label>
          <input
            id="field-subject"
            className="form-input"
            type="text"
            placeholder="Project Inquiry"
            aria-invalid={!!errors.subject}
            {...register("subject", {
              required: "Subject is required.",
            })}
          />
          {errors.subject && (
            <span className="form-error" role="alert">{errors.subject.message}</span>
          )}
        </div>

        {/* Message */}
        <div className="form-group">
          <label className="form-label" htmlFor="field-message">Message</label>
          <textarea
            id="field-message"
            className="form-textarea"
            placeholder="Tell me about your project..."
            aria-invalid={!!errors.message}
            {...register("message", {
              required: "Message is required.",
              minLength: { value: 20, message: "Message must be at least 20 characters." },
            })}
          />
          {errors.message && (
            <span className="form-error" role="alert">{errors.message.message}</span>
          )}
        </div>

        <button
          type="submit"
          id="contact-submit-btn"
          className="btn btn--primary"
          disabled={isSubmitting}
          style={{ width: "100%", justifyContent: "center" }}
        >
          {isSubmitting ? "Sending..." : "📤 Send Message"}
        </button>
      </form>
    </div>
  );
}
