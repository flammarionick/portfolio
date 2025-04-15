import React from 'react';
import Projects from '../DeveloperView/Projects';
import ContactForm from '../shared/ContactForm';
import About from '../DeveloperView/About';


function ClientPage() {
  return (
    <>
      <About />
      <Projects />
      <div>
      <h2 style={{ textAlign: 'center', marginTop: '60px' }}>Request Services</h2>
      <ContactForm />
    </div>    </>
  );
}

export default ClientPage;
