import React from 'react';
import { ExternalLink, Code, Database, Brain } from 'lucide-react';

const SkillsSection = () => {
  const skills = {
    "Programming Languages": ["Python", "Java", "SQL", "JavaScript", "HTML"],
    "Frameworks & Libraries": ["Flask", "React", "Scikit-learn", "OpenCV", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    "Databases": ["MySQL", "Oracle"],
    "Developer Tools": ["VS Code", "Jupyter Notebook", "Git"],
    "Soft Skills": ["Collaboration", "Task Coordination", "Efficient Scheduling", "Flexibility"]
  };

  const certifications = [
    { name: "Python Basics", platform: "HackerRank", link: "https://www.hackerrank.com/certificates/iframe/dc561b25dd73" },
    { name: "SQL Basics", platform: "HackerRank", link: "https://www.hackerrank.com/certificates/iframe/c11bd92f6af3" },
    { name: "Problem Solving Basics", platform: "HackerRank", link: "https://www.hackerrank.com/certificates/iframe/517f93c78d3f" },
    { name: "Search Engine Optimization (SEO)", platform: "Coursera", link: "#" },
    { name: "Principles of Management", platform: "Great Learning", link: "#" }
  ];

  return (
    <div className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">Skills & Certifications</h2>
      
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

      {/* Certifications */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-8">Certifications</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:bg-gray-800/70 transition-all">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-blue-400">{cert.name}</h4>
                  <p className="text-gray-400">{cert.platform}</p>
                </div>
                <a href={cert.link} className="text-blue-400 hover:text-blue-300">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
