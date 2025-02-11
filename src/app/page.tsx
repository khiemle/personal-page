"use client";

import React, { useState, useEffect, useRef, FormEvent } from "react";
import Card from "@/components/Card";
import CardContent from "@/components/CardContent";
import Button from "@/components/Button";
import { Github, Terminal } from "lucide-react";

interface TerminalOutputProps {
  terminalOutput: string[];
}

const TerminalOutput: React.FC<TerminalOutputProps> = ({ terminalOutput }) => (
  <div className="overflow-y-auto mb-4" style={{ maxHeight: '60vh' }}>
    {terminalOutput.map((line, index) => (
      <div key={index}>{line}</div>
    ))}
  </div>
);

const Home: React.FC = () => {
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "Type 'help' for available commands."
  ]);
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [showContent, setShowContent] = useState<boolean>(false);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [terminalOutput]);

  const handleCommand = (e: FormEvent) => {
    e.preventDefault();
    const newOutput = [...terminalOutput];

    switch (input.trim().toLowerCase()) {
      case "who":
        newOutput.push(">$ who", "Khiem Le");
        break;
      case "do":
        newOutput.push(">$ do", "Android app development, Software Engineering, Coffee lover");
        break;
      case "projects":
        newOutput.push(">$ projects", "1. Music Platform\n2. Android Task Manager\n3. Personal Website");
        break;
      case "contact":
        newOutput.push(">$ contact", "Email: khiemlq@gmail.com\nGitHub: github.com/khiemle");
        break;
      case "help":
        newOutput.push(">$ help", "Available commands: who, do, projects, contact, about, clear");
        break;
      case "clear":
        setTerminalOutput([]);
        setInput("");
        return;
      case "about":
        setShowContent(true);
        return;
      default:
        newOutput.push(`$ ${input}`, "Command not found. Type 'help' for available commands.");
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
            <h1 className="text-4xl font-bold">Khiem Le</h1>
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
            <h2 className="text-3xl md:text-5xl font-semibold">Software Engineer</h2>
            <p className="mt-4 text-lg max-w-xl mx-auto">
              I build scalable applications for Android devices.
            </p>
            <Button className="mt-6 bg-green-600 text-white hover:bg-green-700 rounded-full py-3 px-6 text-lg" variant="default">
              <a href="https://github.com/khiemle" target="_blank" className="flex items-center space-x-2">
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
                <p>
                  My goal in joining this company is to work in a positive and stimulating environment that encourages continuous learning and growth. I hope to contribute my past experiences and skills towards creating value for the company.
                </p>
                <p className="mt-4">
                  In addition, I am looking forward to opportunities for professional development and advancement within the company over time. While I am not necessarily seeking a specific position within the IT industry, my ultimate goal is to gain the skills and knowledge necessary to eventually own my own business and have more control over my time.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Experience Section */}
          <section id="experience" className="w-full max-w-4xl mt-20">
            <h3 className="text-2xl font-bold mb-4">Experience</h3>
            <Card className="bg-gray-800 text-white border border-green-600 rounded-lg">
              <CardContent className="p-4">
                <h4 className="text-xl font-semibold">Software Engineer at XYZ Company</h4>
                <p className="mt-2">Jan 2020 - Present</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Developed and maintained Android applications.</li>
                  <li>Collaborated with cross-functional teams to define, design, and ship new features.</li>
                  <li>Worked on bug fixing and improving application performance.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 text-white border border-green-600 rounded-lg mt-4">
              <CardContent className="p-4">
                <h4 className="text-xl font-semibold">Junior Developer at ABC Corp</h4>
                <p className="mt-2">Jun 2018 - Dec 2019</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Assisted in the development of web applications using React and Node.js.</li>
                  <li>Participated in code reviews and contributed to improving code quality.</li>
                  <li>Worked closely with senior developers to learn best practices and improve skills.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 text-white border border-green-600 rounded-lg mt-4">
              <CardContent className="p-4">
                <h4 className="text-xl font-semibold">Intern at DEF Inc.</h4>
                <p className="mt-2">Jan 2018 - May 2018</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Assisted in the development of internal tools using JavaScript and Python.</li>
                  <li>Conducted testing and debugging of applications.</li>
                  <li>Collaborated with team members to gather requirements and provide solutions.</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Education Section */}
          <section id="education" className="w-full max-w-4xl mt-20">
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            <Card className="bg-gray-800 text-white border border-green-600 rounded-lg">
              <CardContent className="p-4">
                <h4 className="text-xl font-semibold">Bachelor of Science in Computer Science</h4>
                <p className="mt-2">University of ABC, 2016 - 2020</p>
              </CardContent>
            </Card>
          </section>

          {/* Skills Section */}
          <section id="skills" className="w-full max-w-4xl mt-20">
            <h3 className="text-2xl font-bold mb-4">Skills</h3>
            <Card className="bg-gray-800 text-white border border-green-600 rounded-lg">
              <CardContent className="p-4">
                <ul className="list-disc list-inside">
                  <li>Android Development</li>
                  <li>Kotlin</li>
                  <li>Java</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>SQL</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Projects Section */}
          <section id="projects" className="w-full max-w-4xl mt-20">
            <h3 className="text-2xl font-bold mb-4">Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-gray-800 text-white border border-green-600 rounded-lg">
                <CardContent className="p-4">
                  <div>
                    <h4 className="text-xl font-semibold">Music Platform</h4>
                    <p className="mt-2">A platform for music distribution and streaming.</p>
                    <Button className="mt-4 bg-green-600 text-white hover:bg-green-700 rounded-full py-3 px-6 text-lg" variant="default">
                      <a href="https://play.google.com/store/apps/details?id=app1" target="_blank">View on Play Store</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 text-white border border-green-600 rounded-lg">
                <CardContent className="p-4">
                  <div>
                    <h4 className="text-xl font-semibold">Android Task Manager</h4>
                    <p className="mt-2">A task management app for Android devices.</p>
                    <Button className="mt-4 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-full py-3 px-6 text-lg" variant="outline">
                      <a href="https://play.google.com/store/apps/details?id=app2" target="_blank">View on Play Store</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="w-full max-w-4xl mt-20 mb-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
            <p className="mb-4">Feel free to reach out via email or connect on GitHub!</p>
            <Button className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-full py-3 px-6 text-lg" variant="outline">
              <a href="mailto:khiemlq@gmail.com">Email Me</a>
            </Button>
          </section>

          {/* Footer */}
          <footer className="w-full text-center py-4 text-gray-500">
            © {new Date().getFullYear()} Khiem Le. All rights reserved.
          </footer>
        </>
      )}
    </div>
  );
};

export default Home;