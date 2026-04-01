import type { UseFormRegister, UseFormHandleSubmit, FieldErrors, SubmitHandler } from "react-hook-form";
import type { ContactValues } from "../pages/Contact.tsx";

type Props = {
  register: UseFormRegister<ContactValues>;
  handleSubmit: UseFormHandleSubmit<ContactValues>;
  onSubmit: SubmitHandler<ContactValues>;
  errors: FieldErrors<ContactValues>;
};

export default function ContactForm({ register, handleSubmit, onSubmit, errors }: Props) {
  return (
    <section className="contact-section">
      <h2>Got an idea? Let's talk.</h2>
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="sender">Name</label>
          <input 
            type="text" 
            id="sender" 
            placeholder="Jane Doe" 
            {...register("sender", { required: true })} 
          />
          {errors.sender && <span className="error-text">Current Name is required.</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            placeholder="jane@example.com" 
            {...register("email", { required: true })} 
          />
          {errors.email && <span className="error-text">A valid email is required.</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            rows={4} 
            placeholder="How can I help you?" 
            {...register("message", { required: true })}
          ></textarea>
          {errors.message && <span className="error-text">Please provide a message.</span>}
        </div>
        
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </section>
  );
}
