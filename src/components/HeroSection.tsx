import React from 'react';
import Button from '@/components/Button';
import { Github } from 'lucide-react';

const HeroSection: React.FC<{ personalInfo: any }> = ({ personalInfo }) => (
  <section className="text-center mt-12">
    <h2 className="text-3xl md:text-5xl font-semibold">{personalInfo.title}</h2>
    <p className="mt-4 text-lg max-w-xl mx-auto">
      Crafting high-performance Android applications that scale seamlessly.
    </p>
    <Button className="mt-6 bg-lightBlue text-white hover:bg-darkBlue rounded-full py-3 px-6 text-lg" variant="default">
      <a href={personalInfo.github} target="_blank" className="flex items-center space-x-2">
        <Github className="w-6 h-6" />
        <span>View My GitHub</span>
      </a>
    </Button>
  </section>
);

export default HeroSection;