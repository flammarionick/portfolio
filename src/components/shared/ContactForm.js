import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
  padding: 30px;
  background: linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%);
  border-radius: 6px;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  margin-bottom: 12px;
  background: #333;
  border: 1px solid #444;
  border-radius: 4px;
  color: #fff;
  font-size: 0.95rem;
  transition: border-color 0.2s;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #e50914;
  }

  &::placeholder {
    color: #888;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 14px 16px;
  margin-bottom: 12px;
  background: #333;
  border: 1px solid #444;
  border-radius: 4px;
  color: #fff;
  font-size: 0.95rem;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.2s;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #e50914;
  }

  &::placeholder {
    color: #888;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 14px;
  background: #e50914;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #b20710;
  }
`;

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
      console.log('Email sent:', result.text);
      alert('Message sent! Thank you for reaching out.');
      formRef.current.reset();
    }).catch((error) => {
      console.error('EmailJS Error:', error);
      alert('Oops, something went wrong. Please try again later.');
    });
  };

  return (
    <Form ref={formRef} onSubmit={sendEmail}>
      <Input
        type="text"
        name="from_name"
        placeholder="Your Name"
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Your Email"
        required
      />
      <TextArea
        name="message"
        placeholder="Your Message"
        required
        rows="5"
      />
      <SubmitButton type="submit">
        Send Message
      </SubmitButton>
    </Form>
  );
};

export default ContactForm;
