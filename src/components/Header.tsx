import React from 'react';

const Header: React.FC<{ personalInfo: any }> = ({ personalInfo }) => (
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
);

export default Header;