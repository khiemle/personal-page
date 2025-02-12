import React from 'react';
import Card from '@/components/Card';
import CardContent from '@/components/CardContent';

const ExperienceSection: React.FC<{ experience: any[] }> = ({ experience }) => (
  <section id="experience" className="w-full max-w-4xl mt-20">
    <h3 className="text-2xl font-bold mb-4">Experience</h3>
    {experience.map((exp, index) => (
      <Card key={index} className="bg-gray-800 text-white border border-lightBlue rounded-lg mt-4">
        <CardContent className="p-4">
          <h4 className="text-xl font-semibold">{exp.position} at {exp.company}</h4>
          <p className="mt-2">{exp.startDate} - {exp.endDate}</p>
          <ul className="list-disc list-inside mt-2">
            {exp.responsibilities.map((responsibility: string, idx: number) => (
              <li key={idx}>{responsibility}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    ))}
  </section>
);

export default ExperienceSection;