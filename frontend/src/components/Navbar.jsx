import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-center items-center">
        <ul className="flex space-x-6 font-semibold text-black-700">
          <li>
            <a href="#experience" className="hover:text-yellow-500 transition">Experience</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-yellow-500 transition">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-500 transition">Contact</a>
          </li>
          <li>
            <a href="https://www.chess.com/play/online" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition">Play Chess</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
