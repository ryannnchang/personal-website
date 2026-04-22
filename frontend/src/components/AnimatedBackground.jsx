import React from 'react';

const AnimatedBackground = () => {
  return (

    <div>
     
      {/* 1. Grid Overlay Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{ backgroundImage: `url('https://transparenttextures.com/patterns/cubes.png')` }}
      ></div>

      {/* 2. SVG Grid Lines - Changed stroke to a visible gray */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.4]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#cbd5e1" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};

export default AnimatedBackground;