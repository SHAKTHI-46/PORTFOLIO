import React, { useState } from 'react';
import Navigation from './Navigation';
import HomeSection from './sections/HomeSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import ContactSection from './sections/ContactSection';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <div className="pt-24 container mx-auto px-6">
        {activeSection === 'home' && <HomeSection />}
        {activeSection === 'projects' && <ProjectsSection />}
        {activeSection === 'skills' && <SkillsSection />}
        {activeSection === 'contact' && <ContactSection />}
      </div>
    </div>
  );
};

export default Portfolio;
