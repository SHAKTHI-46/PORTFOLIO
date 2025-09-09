import React from 'react';
import { Mail, Code, Brain, Globe } from 'lucide-react';

const Navigation = ({ activeSection, setActiveSection }) => {
  const NavButton = ({ section, label, icon }) => (
    <button
      onClick={() => setActiveSection(section)}
      className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
        activeSection === section
          ? 'bg-blue-600 text-white shadow-lg'
          : 'text-gray-300 hover:text-white hover:bg-gray-800'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-center space-x-1">
          <NavButton section="home" label="Home" icon={<Globe size={20} />} />
          <NavButton section="projects" label="Projects" icon={<Code size={20} />} />
          <NavButton section="skills" label="Skills" icon={<Brain size={20} />} />
          <NavButton section="contact" label="Contact" icon={<Mail size={20} />} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
