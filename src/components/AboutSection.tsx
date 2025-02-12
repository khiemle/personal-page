import React from 'react';
import Card from '@/components/Card';
import CardContent from '@/components/CardContent';

const AboutSection: React.FC<{ about: any }> = ({ about }) => (
  <section id="about" className="w-full max-w-4xl mt-20">
    <h3 className="text-2xl font-bold mb-4">About Me</h3>
    <Card className="bg-gray-800 text-white border border-lightBlue rounded-lg">
      <CardContent className="p-4">
        <p>{about.description}</p>
        <p className="mt-4">{about.goals}</p>
      </CardContent>
    </Card>
  </section>
);

export default AboutSection;