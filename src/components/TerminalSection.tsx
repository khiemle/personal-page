import React, { useRef, useEffect, FormEvent } from 'react';
import Card from '@/components/Card';
import CardContent from '@/components/CardContent';
import ReactMarkdown from 'react-markdown';

interface TerminalSectionProps {
    terminalOutput: { type: string; message: string }[];
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
    handleCommand: (e: FormEvent) => void;
    inputRef: React.RefObject<HTMLInputElement | null>;
  }

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

interface TerminalSectionProps {
  terminalOutput: { type: string; message: string }[];
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  handleCommand: (e: FormEvent) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}

const TerminalSection: React.FC<TerminalSectionProps> = ({ terminalOutput, input, setInput, handleCommand, inputRef }) => (
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
);

export default TerminalSection;