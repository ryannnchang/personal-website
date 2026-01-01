import React from 'react';

const Experience_box = ({ company, time, position}) => {
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md w-full max-w-5xl mb-6 mx-auto">
      <h2 className="text-2xl font-bold mb-1">{position}</h2>
      <div className="flex items-center justify-between mb-3">
        <h3 className=" text-xl text-gray-700 font-semibold mb-1">{company} - {time}</h3>
      </div>
    </div>
  );
};

export default Experience_box;

