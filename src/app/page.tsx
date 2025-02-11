"use client";

import React, { useState, useEffect, useRef, FormEvent } from "react";
import Card from "@/components/Card";
import CardContent from "@/components/CardContent";
import Button from "@/components/Button";
import { Github, Terminal } from "lucide-react";
import { profileData } from "@/data/profileData";

// Mock AI response function
const getAIResponse = async (message: string): Promise<string> => {
  // Simulate an AI response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`AI Response to: "${message}"`);
    }, 1000);
  });
};

interface TerminalOutputProps {
  terminalOutput: { type: string; message: string }[];
}

const TerminalOutput: React.FC<TerminalOutputProps> = ({ terminalOutput }) => {
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalOutput]);

  return (
    <div className="overflow-y-auto mb-4 terminal-scrollbar" style={{ maxHeight: '60vh' }}>
      {terminalOutput.map((line, index) => (
        <div key={index} className={line.type}>
          {line.message}
        </div>
      ))}
      <div ref={terminalEndRef} />
    </div>
  );
};

const Home: React.FC = () => {
  const { personalInfo, about, experience, education, skills, projects, contact } = profileData;
  const [terminalOutput, setTerminalOutput] = useState<{ type: string; message: string }[]>([
    { type: "command", message: "Type 'help' for available commands." }
  ]);
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [showContent, setShowContent] = useState<boolean>(false);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [terminalOutput]);

  const handleCommand = async (e: FormEvent) => {
    e.preventDefault();
    const newOutput = [...terminalOutput, { type: "command", message: `$ ${input}` }];

    switch (input.trim().toLowerCase()) {
      case "who":
        newOutput.push({ type: "output", message: personalInfo.name });
        break;
      case "do":
        newOutput.push({ type: "output", message: "Android app development, Software Engineering, Coffee lover" });
        break;
      case "projects":
        newOutput.push({ type: "output", message: projects.map(project => project.name).join("\n") });
        break;
      case "contact":
        newOutput.push({ type: "output", message: `Email: ${contact.email}\nGitHub: ${contact.github}` });
        break;
      case "help":
        newOutput.push({ type: "output", message: "Available commands: who, do, projects, contact, about, clear" });
        break;
      case "clear":
        setTerminalOutput([]);
        setInput("");
        return;
      case "about":
        setShowContent(true);
        return;
      default:
        // If the command is not recognized, get AI response
        newOutput.push({ type: "loading", message: "Loading AI response..." });
        setTerminalOutput(newOutput);

        const aiResponse = await getAIResponse(input);
        newOutput.pop(); // Remove loading message
        newOutput.push({ type: "output", message: aiResponse });
        break;
    }

    setTerminalOutput(newOutput);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-terminalBackground text-terminalGreen flex flex-col items-center justify-center p-4">
      {!showContent ? (
        <>
          <section id="terminal" className="w-full max-w-4xl mt-20">
            <Card className="bg-gray-800 text-white border border-green-600 rounded-lg">
              <CardContent className="p-4 bg-black text-green-400 font-mono rounded-xl">
                <TerminalOutput terminalOutput={terminalOutput} />
                <form onSubmit={handleCommand} className="flex items-center">
                  <span className="mr-2 text-green-400">$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="bg-black text-green-400 outline-none w-full"
                    autoFocus
                  />
                </form>
              </CardContent>
            </Card>
          </section>
        </>
      ) : (
        <>
          {/* Header */}
          <header className="w-full max-w-4xl flex justify-between items-center py-4 border-b border-terminalGreen">
            <h1 className="text-4xl font-bold">{personalInfo.name}</h1>
            <nav className="space-x-4">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#experience" className="hover:text-white">Experience</a>
              <a href="#education" className="hover:text-white">Education</a>
              <a href="#skills" className="hover:text-white">Skills</a>
              <a href="#projects" className="hover:text-white">Projects</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
          </header>

          {/* Hero Section */}
          <section className="text-center mt-12">
            <h2 className="text-3xl md:text-5xl font-semibold">{personalInfo.title}</h2>
            <p className="mt-4 text-lg max-w-xl mx-auto">
              I build scalable applications for Android devices.
            </p>
            <Button className="mt-6 bg-green-600 text-white hover:bg-green-700 rounded-full py-3 px-6 text-lg" variant="default">
              <a href={personalInfo.github} target="_blank" className="flex items-center space-x-2">
                <Github className="w-6 h-6" />
                <span>View My GitHub</span>
              </a>
            </Button>
          </section>

          {/* About Section */}
          <section id="about" className="w-full max-w-4xl mt-20">
            <h3 className="text-2xl font-bold mb-4">About Me</h3>
            <Card className="bg-gray-800 text-white border border-green-600 rounded-lg">
              <CardContent className="p-4">
                <p>{about.description}</p>
                <p className="mt-4">{about.goals}</p>
              </CardContent>
            </Card>
          </section>

          {/* Experience Section */}
          <section id="experience" className="w-full max-w-4xl mt-20">
            <h3 className="text-2xl font-bold mb-4">Experience</h3>
            {experience.map((exp, index) => (
              <Card key={index} className="bg-gray-800 text-white border border-green-600 rounded-lg mt-4">
                <CardContent className="p-4">
                  <h4 className="text-xl font-semibold">{exp.position} at {exp.company}</h4>
                  <p className="mt-2">{exp.startDate} - {exp.endDate}</p>
                  <ul className="list-disc list-inside mt-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </section>

          {/* Education Section */}
          <section id="education" className="w-full max-w-4xl mt-20">
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            {education.map((edu, index) => (
              <Card key={index} className="bg-gray-800 text-white border border-green-600 rounded-lg mt-4">
                <CardContent className="p-4">
                  <h4 className="text-xl font-semibold">{edu.degree}</h4>
                  <p className="mt-2">{edu.institution}, {edu.startDate} - {edu.endDate}</p>
                </CardContent>
              </Card>
            ))}
          </section>

          {/* Skills Section */}
          <section id="skills" className="w-full max-w-4xl mt-20">
            <h3 className="text-2xl font-bold mb-4">Skills</h3>
            <Card className="bg-gray-800 text-white border border-green-600 rounded-lg">
              <CardContent className="p-4">
                <ul className="list-disc list-inside">
                  {skills.map((skill, index) => (
                    <li key={index}>{skill.name} - {skill.level}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Projects Section */}
          <section id="projects" className="w-full max-w-4xl mt-20">
            <h3 className="text-2xl font-bold mb-4">Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <Card key={index} className="bg-gray-800 text-white border border-green-600 rounded-lg">
                  <CardContent className="p-4">
                    <div>
                      <h4 className="text-xl font-semibold">{project.name}</h4>
                      <p className="mt-2">{project.description}</p>
                      <Button className="mt-4 bg-green-600 text-white hover:bg-green-700 rounded-full py-3 px-6 text-lg" variant="default">
                        <a href={project.link} target="_blank">View on Play Store</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="w-full max-w-4xl mt-20 mb-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
            <p className="mb-4">Feel free to reach out via email or connect on GitHub!</p>
            <Button className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-full py-3 px-6 text-lg" variant="outline">
              <a href={`mailto:${contact.email}`}>Email Me</a>
            </Button>
          </section>

          {/* Footer */}
          <footer className="w-full text-center py-4 text-gray-500">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </footer>
        </>
      )}
    </div>
  );
};

export default Home;