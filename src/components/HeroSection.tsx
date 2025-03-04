import React from 'react';
import Button from '@/components/Button';
import { FaGithub } from 'react-icons/fa';

const HeroSection: React.FC<{ personalInfo: any }> = ({ personalInfo }) => (
  <section className="text-center mt-12">
    <h2 className="text-3xl md:text-5xl font-semibold">{personalInfo.title}</h2>
    <p className="mt-4 text-lg max-w-xl mx-auto text-light-gray">
      Collaborating to create scalable and impactful Android applications.
    </p>
    <Button className="mt-6 bg-lightBlue text-white hover:bg-darkBlue rounded-full py-3 px-6 text-lg" variant="default">
      <a href={personalInfo.github} target="_blank" className="flex items-center justify-center">
        <FaGithub className="w-6 h-6" />
      </a>
    </Button>
  </section>
);

export default HeroSection;