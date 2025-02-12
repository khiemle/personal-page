import React from 'react';
import Card from '@/components/Card';
import CardContent from '@/components/CardContent';

const EducationSection: React.FC<{ education: any[] }> = ({ education }) => (
  <section id="education" className="w-full max-w-4xl mt-20">
    <h3 className="text-2xl font-bold mb-4">Education</h3>
    {education.map((edu, index) => (
      <Card key={index} className="bg-gray-800 text-white border border-lightBlue rounded-lg mt-4">
        <CardContent className="p-4">
          <h4 className="text-xl font-semibold">{edu.degree}</h4>
          <p className="mt-2">{edu.institution}, {edu.startDate} - {edu.endDate}</p>
        </CardContent>
      </Card>
    ))}
  </section>
);

export default EducationSection;