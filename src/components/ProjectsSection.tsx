import React from 'react';
import Card from '@/components/Card';
import CardContent from '@/components/CardContent';
import Button from '@/components/Button';

const ProjectsSection: React.FC<{ projects: any[] }> = ({ projects }) => (
  <section id="projects" className="w-full max-w-4xl mt-20">
    <h3 className="text-2xl font-bold mb-4">Projects</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project, index) => (
        <Card key={index} className="bg-gray-800 text-white border border-lightBlue rounded-lg">
          <CardContent className="p-4">
            <div>
              <h4 className="text-xl font-semibold">{project.name}</h4>
              <p className="mt-2">{project.description}</p>
              <Button className="mt-4 bg-lightBlue text-white hover:bg-darkBlue rounded-full py-3 px-6 text-lg" variant="default">
                <a href={project.link} target="_blank">View on Play Store</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default ProjectsSection;