import Header from "../components/Header.tsx";
import ContactForm from "../components/ContactForm.tsx";
import Footer from "../components/Footer.tsx";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

export type ContactValues = { sender: string; message: string; email: string };

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactValues>();

  const onSubmit: SubmitHandler<ContactValues> = (data) => {
    alert("Message sent! Thanks for reaching out, " + data.sender + ".");
  };

  return (
    <div className="page-container fade-in">
      <Header title="Contact Me" />
      <main className="content-wrap">
        <ContactForm 
          register={register} 
          handleSubmit={handleSubmit} 
          onSubmit={onSubmit} 
          errors={errors} 
        />
      </main>
      <Footer />
    </div>
  );
}
