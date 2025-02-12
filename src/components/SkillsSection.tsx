import React, { JSX } from 'react';
import Card from '@/components/Card';
import CardContent from '@/components/CardContent';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaJava, FaAndroid, FaTools, FaCogs, FaGitAlt, FaNetworkWired, FaRobot } from 'react-icons/fa';
import { SiKotlin } from 'react-icons/si';

const iconMapping: { [key: string]: JSX.Element } = {
  React: <FaReact className="w-6 h-6 mr-2" />,
  NodeJS: <FaNodeJs className="w-6 h-6 mr-2" />,
  HTML: <FaHtml5 className="w-6 h-6 mr-2" />,
  CSS: <FaCss3Alt className="w-6 h-6 mr-2" />,
  Javascript: <FaJsSquare className="w-6 h-6 mr-2" />,
  Python: <FaPython className="w-6 h-6 mr-2" />,
  Java: <FaJava className="w-6 h-6 mr-2" />,
  Android: <FaAndroid className="w-6 h-6 mr-2" />,
  "CI/CD": <FaTools className="w-6 h-6 mr-2" />,
  "Automation scripts": <FaCogs className="w-6 h-6 mr-2" />,
  Kotlin: <SiKotlin className="w-6 h-6 mr-2" />,
  "System design": <FaNetworkWired className="w-6 h-6 mr-2" />,
  Git: <FaGitAlt className="w-6 h-6 mr-2" />,
  "Prompt engineering": <FaRobot className="w-6 h-6 mr-2" />,
};

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
              <div className="flex items-center">
                <div className="block sm:hidden">
                  {iconMapping[skill.name] || null}
                </div>
                <span className="hidden sm:flex items-center">
                  {iconMapping[skill.name] || null}
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </section>
);

export default SkillsSection;