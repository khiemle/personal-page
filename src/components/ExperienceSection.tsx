import React, { useState } from 'react';
import Card from '@/components/Card';
import CardContent from '@/components/CardContent';

const ExperienceSection: React.FC<{ experience: any[] }> = ({ experience }) => {
  const [collapsed, setCollapsed] = useState<boolean[]>(experience.map(() => true));

  const toggleCollapse = (index: number) => {
    setCollapsed(collapsed.map((state, i) => (i === index ? !state : state)));
  };

  return (
    <section id="experience" className="w-full max-w-4xl mt-20">
      <h3 className="text-2xl font-bold mb-4">Experience</h3>
      {experience.map((exp, index) => (
        <Card key={index} className="bg-gray-800 text-white border border-lightBlue rounded-lg mt-4">
          <CardContent className="p-4">
            <div
              onClick={() => toggleCollapse(index)}
              className="cursor-pointer rounded-lg"
            >
              <h4 className="text-xl font-semibold text-ghost-white">
                <span className="font-normal text-light-gray">{exp.position}</span>
                <span className="font-normal text-light-gray"> at </span>
                <span className="font-semibold text-ghost-white">{exp.company}</span>
              </h4>
              <p className="mt-2 text-snow">{exp.startDate} - {exp.endDate}</p>
            </div>
            <div className={collapsed[index] ? 'fade-out' : 'fade-in'}>
              {!collapsed[index] && (
                <ul className="list-disc list-inside mt-2 text-light-gray">
                  {exp.responsibilities.map((responsibility: string, idx: number) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export default ExperienceSection;