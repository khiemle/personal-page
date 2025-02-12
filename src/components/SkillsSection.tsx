import React from 'react';
import Card from '@/components/Card';
import CardContent from '@/components/CardContent';

const SkillsSection: React.FC<{ skills: any[] }> = ({ skills }) => (
  <section id="skills" className="w-full max-w-4xl mt-20">
    <h3 className="text-2xl font-bold mb-4">Skills</h3>
    <Card className="bg-gray-800 text-white border border-lightBlue rounded-lg">
      <CardContent className="p-4">
        <ul className="list-disc list-inside">
          {skills.map((skill, index) => (
            <li key={index}>{skill.name} - {skill.level}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </section>
);

export default SkillsSection;