import React, { useState } from "react";
import styles from "./contactForm.module.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "your_service_id",
        "your_template_id",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "your_user_id"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setIsSent(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("Error sending email:", error.text);
        }
      );
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContent}>
        <div className={styles.leftSection}>
          <h2 className={styles.title}>Contact Me</h2>
        </div>
        <div className={styles.rightSection}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={styles.input}
              required
            />

            <label htmlFor="email" className={styles.label}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@example.com"
              className={styles.input}
              required
            />

            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can I help?"
              className={styles.textarea}
              required
            ></textarea>

            <div className={styles.buttonContainer}>
              <button type="submit" className={styles.button}>
                Send Message
              </button>
            </div>

            {isSent && (
              <p className={styles.successMessage}>
                Message sent successfully!
              </p>
            )}
          </form>
          <div className={styles.directEmail}>
            <a
              href="mailto:your-email@example.com"
              className={styles.emailLink}
            >
              Send me an email directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
