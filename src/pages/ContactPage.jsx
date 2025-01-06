import React from "react";
import ContactForm from "../components/contactPage/ContactForm";
import { useEffect } from "react";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ContactForm />
    </>
  );
};

export default ContactPage;
