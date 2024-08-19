import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    window.location.href = '/login';
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-50">
      <button
        onClick={toggleNavbar}
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded"
      >
        <FaBars />
      </button>
      <nav
        className={`fixed top-0 left-0 h-screen w-48 bg-[#0e1b4d] text-white flex flex-col transform transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <img src="/cf.png" alt="CF Logo" className="w-24 mx-auto mt-6 rounded-full" />
          
          <div className="flex flex-col flex-grow justify-center items-center">
            <a href="#" className="mb-2">
              <img src="/ranking.webp" alt="Ranking Icon" className="w-24 rounded-full" />
            </a>
            <a href="#" className="text-lg font-semibold">RANKING</a>
          </div>
          
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded mx-auto mb-6 hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
