
import React from 'react';
import carpet from '../assets/carpet.png';

const Project = () => {

  const projects = [
    {project: "Ranked Showers Deltahacks 12 Winner ", description:"A detachable and discreet foot drop device for multiple sclerosis patients", image: carpet, skills: ["3D Printing", "CAD Design", "Autodesk Inventor"]},

    {project: "Carpet Image Classification", description:"An end-to-end automated vision system to replace manual quality checks in carpet manufacturing.", image: carpet, skills: ["Python","YOLO11", "Machine Learning", "Computer Vision"], link: "https://github.com/ryannnchang/carpetproject"},

    {project: "Sumobot", description:"An autonomous fighting robot that achieved 10+ competition wins.", image: carpet, skills: ["C++", "Arduino", "Embedded Systems", "Robotics"]},

    {project: "GamePigeon Anagrams Bot", description:"A python script to always win at GamePigeons Anagrams", image: carpet, skills: ["Python", "Scripting"]},

    {project: "Snake Game", description:"A Simple Snake Game in C++", image: carpet, skills: ["C++"]},
    {project: "Poker Player Tracker", description:"A simple website to track a poker player's winnings", image: carpet, skills: ["Javascript", "HTML/CSS"]},

    {project: "Detachable Foot Device", description:"A detachable and discreet foot drop device for multiple sclerosis patients", image: carpet, skills: ["3D Printing", "CAD Design", "Autodesk Inventor"]},

    {project: "OstomyFlow", description:"A detachable and discreet foot drop device for multiple sclerosis patients", image: carpet, skills: ["3D Printing", "CAD Design", "Autodesk Inventor"]},
  ];

  return(
    <div className="flex items-center justify-center flex-col px-6 mb-10">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {projects.map((proj, index) => (
        <div key={index} className="bg-gray-200 p-8 rounded-lg shadow-md text-center">
      
          {proj.image && <img src={proj.image} alt={proj.project} className="object-cover rounded mb-4" />}

          <h2 className="text-xl font-bold mb-2">{proj.project}</h2>

          <p className="text-gray-700 mb-4">{proj.description}</p>
          {proj.skills && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-1">
                {proj.skills.map((skill, idx) => (
                  <span key={idx} className="bg-gray-200 px-2 py-1 border rounded text-xs">{skill}</span>
                ))}
              </div>
            </div>
          )}
          {proj.link && (
            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="inline-block rounded transition-colors duration-200">
              See More
            </a>
          )}
        </div>
        ))}
      </div>
    </div>
  );
};

export default Project