import React from 'react';
import Button from '@/components/Button';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const ContactSection: React.FC<{ contact: any }> = ({ contact }) => (
  <section id="contact" className="w-full max-w-4xl mt-20 mb-12 text-center">
    <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
    <p className="mb-4">Feel free to reach out via email or connect on LinkedIn!</p>
    <div className="flex justify-center space-x-4">
      <Button className="border border-lightBlue text-lightBlue hover:bg-lightBlue hover:text-white rounded-full py-3 px-6 text-lg" variant="outline">
        <a href={`mailto:${contact.email}`} className="flex items-center justify-center">
          <FaEnvelope className="w-6 h-6" />
        </a>
      </Button>
      <Button className="border border-lightBlue text-lightBlue hover:bg-lightBlue hover:text-white rounded-full py-3 px-6 text-lg" variant="outline">
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
          <FaLinkedin className="w-6 h-6" />
        </a>
      </Button>
    </div>
  </section>
);

export default ContactSection;