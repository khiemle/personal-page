import React from 'react';
import { FaTerminal, FaArrowUp } from 'react-icons/fa';

const FloatingButtons: React.FC<{ scrollToTerminal: () => void, scrollToTop: () => void }> = ({ scrollToTerminal, scrollToTop }) => (
  <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
    <button
      onClick={scrollToTerminal}
      className="bg-lightBlue text-white p-3 rounded-full shadow-lg hover:bg-darkBlue"
    >
      <FaTerminal className="w-6 h-6" />
    </button>
    <button
      onClick={scrollToTop}
      className="bg-lightBlue text-white p-3 rounded-full shadow-lg hover:bg-darkBlue"
    >
      <FaArrowUp className="w-6 h-6" />
    </button>
  </div>
);

export default FloatingButtons;