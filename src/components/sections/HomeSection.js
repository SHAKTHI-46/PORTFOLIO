import React from 'react';
import { Mail, Phone, Linkedin, Github, Download } from 'lucide-react';

const HomeSection = () => {
  return (
    <div className="text-center py-20">
      <div className="mb-8">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Shakthi Gopi Kumar S
        </h1>
        <h2 className="text-2xl text-gray-300 mb-6">Data Science & AI Enthusiast</h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Transforming data into insights and building intelligent solutions. 
          Currently pursuing M.Sc in Decision and Computing Sciences at Coimbatore Institute of Technology.
        </p>
      </div>

      {/* Contact Info */}
      <div className="flex justify-center space-x-8 mb-12">
        <a href="mailto:shakthigopikumar@gmail.com" className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors">
          <Mail size={20} />
          <span>shakthigopikumar@gmail.com</span>
        </a>
        <a href="tel:+916384624976" className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors">
          <Phone size={20} />
          <span>+91 6384624976</span>
        </a>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-6 mb-12">
        <a href="https://www.linkedin.com/in/shakthi-gopi-kumar-4855422ab/" 
           className="bg-blue-600 hover:bg-blue-700 p-4 rounded-full transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="https://github.com/SHAKTHI-46" 
           className="bg-gray-700 hover:bg-gray-600 p-4 rounded-full transition-colors">
          <Github size={24} />
        </a>
      </div>

      {/* Education */}
      <div className="bg-gray-800/50 rounded-xl p-8 max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">Education</h3>
        <div className="space-y-4 text-left">
          <div>
            <h4 className="text-xl font-semibold text-blue-400">M.Sc Decision and Computing Sciences</h4>
            <p className="text-gray-300">Coimbatore Institute of Technology</p>
            <p className="text-gray-400">GPA: 7.1 | 2023 - Present</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-blue-400">Higher Secondary Education (HSC)</h4>
            <p className="text-gray-300">VVMHSS Higher Secondary School</p>
            <p className="text-gray-400">89.9%</p>
          </div>
        </div>
      </div>

      {/* Resume Download */}
      <div className="mt-8">
        <a 
          href="/resume.pdf" 
          download="Shakthi_Gopi_Kumar_Resume.pdf"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg flex items-center space-x-2 mx-auto transition-all inline-block"
        >
          <Download size={20} />
          <span>Download Resume</span>
        </a>
      </div>
    </div>
  );
};

export default HomeSection;
