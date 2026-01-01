import React from 'react';
import Experience_box from './Experience_box';

const Experience = () => {

  const experiences = [
    {company: "PatientCompanion", position:"Software Development Intern", time:"Nov. 2025 - present"},
    {company: "McMaster University", position:"Machine Learning Research Intern (NSERC)", time:"May. 2025 - Sept. 2025"}
  ];

  return (
    <div className="flex items-center justify-center flex-col px-6">
      <h1 className="text-4xl font-bold mb-4">Experience</h1>
      
      {experiences.map((exp) => (
        <Experience_box 
          company = {exp.company}
          position = {exp.position}
          time = {exp.time}
        />
      ))}
    </div>
  );
};

export default Experience 