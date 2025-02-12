import React from 'react';
import Card from '@/components/Card';
import CardContent from '@/components/CardContent';

const EducationSection: React.FC<{ education: any[] }> = ({ education }) => (
  <section id="education" className="w-full max-w-4xl mt-20">
    <h3 className="text-2xl font-bold mb-4">Education</h3>
    {education.map((edu, index) => (
      <Card key={index} className="bg-white text-black border border-gray-300 rounded-lg shadow-lg mt-4">
        <CardContent className="p-6 rounded-lg border border-gray-200">
          <div className="text-center">
            <h4 className="text-3xl font-bold mb-2">{edu.degree}</h4>
            <p className="text-xl mb-1">{edu.institution}</p>
            <p className="text-md text-gray-600">{edu.startDate} - {edu.endDate}</p>
          </div>
        </CardContent>
      </Card>
    ))}
  </section>
);

export default EducationSection;