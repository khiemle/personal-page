import React from 'react';
import Card from '@/components/Card';
import CardContent from '@/components/CardContent';

const SkillsSection: React.FC<{ skills: any[] }> = ({ skills }) => (
  <section id="skills" className="w-full max-w-4xl mt-20">
    <h3 className="text-2xl font-bold mb-4">Skills</h3>
    <Card className="bg-gray-800 text-white border border-lightBlue rounded-lg">
      <CardContent className="p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-700 text-white py-2 px-4 rounded-full text-center inline-flex justify-center items-center"
            >
              {skill.name}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </section>
);

export default SkillsSection;