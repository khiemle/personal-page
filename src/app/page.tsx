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