
import React from 'react';
import { Gamepad } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-gaming-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Gamepad className="h-6 w-6 text-gaming-600" />
          <span className="text-xl font-bold bg-clip-text text-transparent blue-gradient">
            Azure Gaming
          </span>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gaming-800 hover:text-gaming-600 font-medium">Home</a>
          <a href="#" className="text-gaming-800 hover:text-gaming-600 font-medium">Games</a>
          <a href="#" className="text-gaming-800 hover:text-gaming-600 font-medium">About</a>
          <a href="#" className="text-gaming-800 hover:text-gaming-600 font-medium">Contact</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="hidden md:block px-4 py-2 rounded-lg bg-gaming-600 text-white hover:bg-gaming-700 transition-colors">
            Sign In
          </button>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gaming-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
