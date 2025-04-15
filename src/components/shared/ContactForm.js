import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then((result) => {
      console.log('✅ Email sent:', result.text);
      alert('🎉 Message sent! Thank you for reaching out.');
      formRef.current.reset();
    }).catch((error) => {
      console.error('❌ EmailJS Error:', error);
      alert('😥 Oops, something went wrong. Please check your internet or try again later.');
    });
    
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      style={{
        maxWidth: '500px',
        margin: '40px auto',
        padding: '20px',
        backgroundColor: '#121212',
        color: '#fff',
        borderRadius: '8px'
      }}
    >
      <h3>Contact Me</h3>
      <input
        type="text"
        name="from_name"
        placeholder="Your Name"
        required
        style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px' }}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px' }}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        rows="5"
        style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px' }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: '#e50914',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '4px'
        }}
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
