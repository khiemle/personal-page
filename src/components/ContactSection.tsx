import React from 'react';
import Button from '@/components/Button';

const ContactSection: React.FC<{ contact: any }> = ({ contact }) => (
  <section id="contact" className="w-full max-w-4xl mt-20 mb-12 text-center">
    <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
    <p className="mb-4">Feel free to reach out via email or connect on GitHub!</p>
    <Button className="border border-lightBlue text-lightBlue hover:bg-lightBlue hover:text-white rounded-full py-3 px-6 text-lg" variant="outline">
      <a href={`mailto:${contact.email}`}>Email Me</a>
    </Button>
  </section>
);

export default ContactSection;