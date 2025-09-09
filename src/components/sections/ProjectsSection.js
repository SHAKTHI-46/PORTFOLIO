import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Driver Drowsiness Detection",
      description: "Real-time system to detect driver fatigue using facial landmark detection and image processing techniques with webcam integration.",
      technologies: ["Python", "OpenCV", "dlib", "NumPy", "Flask", "VS Code"],
      type: "Computer Vision"
    },
    {
      title: "Taxi Fare Prediction",
      description: "Machine learning model to predict taxi fares with comprehensive EDA, feature engineering, and data visualization.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      type: "Machine Learning"
    }
  ];

  return (
    <div className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800/50 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-blue-400">{project.title}</h3>
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                {project.type}
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Experience */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-8">Experience</h3>
        <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
          <h4 className="text-xl font-bold text-blue-400 mb-2">Data Visualization Virtual Experience</h4>
          <p className="text-gray-300 mb-2">Accenture via Forage | June 2025 - July 2025</p>
          <p className="text-gray-400">
            Completed a comprehensive virtual experience program focusing on data visualization and business insights. 
            Practiced designing dashboards, analyzing KPIs, and presenting data-driven recommendations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
