"use client";

import React, { useState, useEffect, useRef, FormEvent } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import FloatingButtons from "@/components/FloatingButtons";
import TerminalSection from "@/components/TerminalSection";
import { profileData } from "@/data/profileData";

const getAIResponse = async (message: string) => {
  const response = await fetch('/api/getAIResponse', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  });

  const data = await response.json();
  return data.response;
};

const Home: React.FC = () => {
  const { personalInfo, about, experience, education, skills, projects, contact } = profileData;
  const [terminalOutput, setTerminalOutput] = useState<{ type: string; message: string }[]>([
    { type: "command", message: "Type 'help' for available commands. Type 'about' to show profile" }
  ]);
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [showContent, setShowContent] = useState<boolean>(false);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [terminalOutput]);

  const commands: { [key: string]: string } = {
    "whoami": personalInfo.name + " - " + "Android app development, Software Engineering, Coffee lover",
    "skills": skills.map(skill => skill.name).join(", "),
    "portfolio": projects.map(project => project.name).join(", "),
    "contact": `Email: ${contact.email}\nGitHub: ${contact.github}`,
    "help": "Available commands:\n- whoami: Display personal information\n- skills: Show technical skills and interests\n- portfolio: List all projects\n- contact: Show contact information\n- clear: Clear terminal output"
  };

  const handleCommand = async (e: FormEvent) => {
    e.preventDefault();
    const newOutput = [...terminalOutput, { type: "command", message: `$ ${input}` }];
    const command = input.trim().toLowerCase();

    if (commands[command]) {
      newOutput.push({ type: "output", message: commands[command] });
    } else if (command === "clear") {
      setTerminalOutput([]);
      setInput("");
      return;
    } else if (command === "about") {
      setShowContent(true);
      return;
    } else if (command === "help") {
      const availableCommands = Object.keys(commands).join(", ");
      newOutput.push({ type: "output", message: `Available commands: ${availableCommands}, about, clear` });
    } else {
      // If the command is not recognized, get AI response
      newOutput.push({ type: "loading", message: "..." });
      setTerminalOutput(newOutput);

      const aiResponse = await getAIResponse(input);
      newOutput.pop(); // Remove loading message
      newOutput.push({ type: "output", message: aiResponse });
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
        <TerminalSection
          terminalOutput={terminalOutput}
          input={input}
          setInput={setInput}
          handleCommand={handleCommand}
          inputRef={inputRef}
        />
      ) : (
        <>
          <Header personalInfo={personalInfo} />
          <HeroSection personalInfo={personalInfo} />
          <AboutSection about={about} />
          <ExperienceSection experience={experience} />
          <EducationSection education={education} />
          <SkillsSection skills={skills} />
          <ProjectsSection projects={projects} />
          <ContactSection contact={contact} />
          <footer className="w-full text-center py-4 text-gray-500">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </footer>
        </>
      )}

      {showContent && (
        <FloatingButtons scrollToTerminal={scrollToTerminal} scrollToTop={scrollToTop} />
      )}
    </div>
  );
};

export default Home;