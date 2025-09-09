import React from 'react';
import { Code, Database, Brain } from 'lucide-react';

const SkillsSection = () => {
  const skills = {
    "Programming Languages": ["Python", "Java", "SQL", "JavaScript", "HTML"],
    "Frameworks & Libraries": ["Flask", "React", "Scikit-learn", "OpenCV", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    "Databases": ["MySQL", "Oracle"],
    "Developer Tools": ["VS Code", "Jupyter Notebook", "Git"],
    "Soft Skills": ["Collaboration", "Task Coordination", "Efficient Scheduling", "Flexibility"]
  };

  // Certifications removed per request

  return (
    <div className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
      
      {/* Skills */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center">
                {category === 'Programming Languages' && <Code size={24} className="mr-2" />}
                {category === 'Databases' && <Database size={24} className="mr-2" />}
                {category === 'Frameworks & Libraries' && <Brain size={24} className="mr-2" />}
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, skillIndex) => (
                  <span key={skillIndex} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default SkillsSection;
