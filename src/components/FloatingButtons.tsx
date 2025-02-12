import React from 'react';
import { Terminal, ArrowUp } from 'lucide-react';

const FloatingButtons: React.FC<{ scrollToTerminal: () => void, scrollToTop: () => void }> = ({ scrollToTerminal, scrollToTop }) => (
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
);

export default FloatingButtons;