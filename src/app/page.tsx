"use client";

import React, { useState, useEffect, useRef, FormEvent } from "react";
import Card from "@/components/Card";
import CardContent from "@/components/CardContent";
import Button from "@/components/Button";
import { Github, Terminal, ArrowUp } from "lucide-react";
import { profileData } from "@/data/profileData";
import ReactMarkdown from 'react-markdown';

const getAIResponse = async (message: string) => {
  const response = await fetch('/api/getAIResponse', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  });

  const data = await response.json();
  return data.response;
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
          {line.type === 'output' ? (
            <ReactMarkdown>{line.message}</ReactMarkdown>
          ) : (
            line.message
          )}
        </div>
      ))}
      <div ref={terminalEndRef} />
    </div>
  );
};

const Home: React.FC = () => {
  const { personalInfo, about, experience, education, skills, projects, contact } = profileData;
  const [terminalOutput, setTerminalOutput] = useState<{ type: string; message: string }[]>([
    { type: "command", message: "Type 'help' for available commands. Type 'about' to see my full CV" }
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
        newOutput.push({ type: "loading", message: "..." });
        setTerminalOutput(newOutput);

        const aiResponse = await getAIResponse(input);
        newOutput.pop(); // Remove loading message
        newOutput.push({ type: "output", message: aiResponse });
        break;
    }

    setTerminalOutput(newOutput);
    setInput("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTerminal = () => {
    setShowContent(false);
    const terminalSection = document.getElementById('terminal');
    if (terminalSection) {
      terminalSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-darkBlue text-lightGray flex flex-col items-center justify-center p-4 font-merriweather-sans">
      {!showContent ? (
        <>
          <section id="terminal" className="w-full max-w-4xl mt-20 md:mt-0 md:h-screen">
            <Card className="bg-gray-800 text-white border border-lightBlue rounded-lg h-full">
              <CardContent className="p-4 bg-black text-lightGray font-mono rounded-xl h-full">
                <TerminalOutput terminalOutput={terminalOutput} />
                <form onSubmit={handleCommand} className="flex items-center">
                  <span className="mr-2 text-lightGray">$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="bg-black text-lightGray outline-none w-full"
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
          <header className="w-full max-w-4xl flex justify-between items-center py-4 border-b border-lightBlue">
            <h1 className="text-4xl font-bold">{personalInfo.name}</h1>
            <nav className="hidden md:flex space-x-4">
              <a href="#about" className="hover:text-lightGray">About</a>
              <a href="#experience" className="hover:text-lightGray">Experience</a>
              <a href="#education" className="hover:text-lightGray">Education</a>
              <a href="#skills" className="hover:text-lightGray">Skills</a>
              <a href="#projects" className="hover:text-lightGray">Projects</a>
              <a href="#contact" className="hover:text-lightGray">Contact</a>
            </nav>
          </header>

          {/* Hero Section */}
          <section className="text-center mt-12">
            <h2 className="text-3xl md:text-5xl font-semibold">{personalInfo.title}</h2>
            <p className="mt-4 text-lg max-w-xl mx-auto">
              Collaborating to create scalable and impactful Android applications.
            </p>
            <Button className="mt-6 bg-lightBlue text-white hover:bg-darkBlue rounded-full py-3 px-6 text-lg" variant="default">
              <a href={personalInfo.github} target="_blank" className="flex items-center space-x-2">
                <Github className="w-6 h-6" />
                <span>View My GitHub</span>
              </a>
            </Button>
          </section>

          {/* About Section */}
          <section id="about" className="w-full max-w-4xl mt-20">
            <h3 className="text-2xl font-bold mb-4">About Me</h3>
            <Card className="bg-gray-800 text-white border border-lightBlue rounded-lg">
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
              <Card key={index} className="bg-gray-800 text-white border border-lightBlue rounded-lg mt-4">
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
              <Card key={index} className="bg-gray-800 text-white border border-lightBlue rounded-lg mt-4">
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

          {/* Projects Section */}
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

          {/* Contact Section */}
          <section id="contact" className="w-full max-w-4xl mt-20 mb-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
            <p className="mb-4">Feel free to reach out via email or connect on GitHub!</p>
            <Button className="border border-lightBlue text-lightBlue hover:bg-lightBlue hover:text-white rounded-full py-3 px-6 text-lg" variant="outline">
              <a href={`mailto:${contact.email}`}>Email Me</a>
            </Button>
          </section>

          {/* Footer */}
          <footer className="w-full text-center py-4 text-gray-500">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </footer>
        </>
      )}

      {/* Floating Buttons */}
      {showContent && (
        <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
          <button
            onClick={scrollToTerminal}
            className="bg-lightBlue text-white p-3 rounded-full shadow-lg hover:bg-darkBlue"
          >
            <Terminal className="w-6 h-6" />
          </button>
          <button
            onClick={scrollToTop}
            className="bg-lightBlue text-white p-3 rounded-full shadow-lg hover:bg-darkBlue"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;