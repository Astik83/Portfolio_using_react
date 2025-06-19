import './Contact.css';
import { useState, useRef } from 'react';

export function Contact() {
  const [success, setSuccess] = useState(false);
  const formRef = useRef();

  const handleSubmit = () => {
    setSuccess(true);

    // Optionally reset the form after a delay
    setTimeout(() => {
      formRef.current.reset();
      setSuccess(false);
    }, 3000);
  };

  return (
    <>
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <p>Feel free to reach out via the form below.</p>

        <div className="contact-form">
          <h3>Send Me a Message</h3>

          <form
            id="contactForm"
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScSiRCtVvRk0wCINxLYc0zX95Jt7tlxa_T7_juX8FQjpcsBKg/formResponse"
            method="POST"
            target="hidden_iframe"
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="entry.985409477"
              required
              pattern="[A-Za-z\s]+"
              title="Only letters allowed"
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="entry.757463970"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="entry.1883601620"
              rows="4"
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        {success && (
          <div
            style={{
              display: 'block',
              backgroundColor: '#4caf50',
              color: 'white',
              padding: '10px',
              textAlign: 'center',
              borderRadius: '5px',
              marginTop: '10px',
            }}
          >
            Thanks for your message! I’ll get back to you shortly.
          </div>
        )}
      </section>

      <iframe name="hidden_iframe" style={{ display: 'none' }}></iframe>
    </>
  );
}
