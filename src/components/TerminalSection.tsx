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
    <div className="overflow-y-auto mb-4 terminal-scrollbar h-full">
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

const TerminalSection: React.FC<TerminalSectionProps> = ({ terminalOutput, input, setInput, handleCommand, inputRef }) => {
  useEffect(() => {
    const focusInput = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    document.addEventListener('click', focusInput);
    document.addEventListener('touchstart', focusInput);

    return () => {
      document.removeEventListener('click', focusInput);
      document.removeEventListener('touchstart', focusInput);
    };
  }, [inputRef]);

  return (
    <section id="terminal" className="w-full h-full">
      <Card className="bg-gray-800 text-white border border-lightBlue rounded-lg h-full">
        <CardContent className="p-4 bg-black text-lightGray font-mono rounded-xl h-full flex flex-col">
          <div className="flex-grow overflow-y-auto">
            <TerminalOutput terminalOutput={terminalOutput} />
          </div>
          <form onSubmit={handleCommand} className="flex items-center mt-4">
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
};

export default TerminalSection;