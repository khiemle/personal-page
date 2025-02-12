import React from 'react';
import Card from '@/components/Card';
import CardContent from '@/components/CardContent';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const EducationSection: React.FC<{ education: any[] }> = ({ education }) => (
  <section id="education" className="w-full max-w-4xl mt-20">
    <h3 className="text-2xl font-bold mb-4">Education</h3>
    {education.map((edu, index) => (
      <Card key={index} className="bg-white text-black border border-gray-300 rounded-lg shadow-lg mt-4">
        <CardContent className="p-6 rounded-lg border border-gray-200">
          <div className="text-center">
            <div className="flex justify-center items-center mb-2">
              <FaGraduationCap className="w-6 h-6 text-gray-600 mr-2" />
              <h4 className="text-3xl font-bold">{edu.degree}</h4>
            </div>
            <div className="flex justify-center items-center mb-1">
              <FaSchool className="w-6 h-6 text-gray-600 mr-2" />
              <p className="text-xl">{edu.institution}</p>
            </div>
            <p className="text-md text-gray-600">{edu.startDate} - {edu.endDate}</p>
          </div>
        </CardContent>
      </Card>
    ))}
  </section>
);

export default EducationSection;