import React from 'react';
import { Gamepad } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
const Header: React.FC = () => {
  return <header className="w-full bg-white border-b border-gaming-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="md:hidden">
            <SidebarTrigger />
          </div>
          <Gamepad className="h-6 w-6 text-gaming-600" />
          <span className="text-xl font-bold bg-clip-text text-transparent blue-gradient">Pascal Gaming </span>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="hidden md:block px-4 py-2 rounded-lg bg-gaming-600 text-white hover:bg-gaming-700 transition-colors">
            Sign In
          </button>
          <button className="md:hidden">
            
          </button>
        </div>
      </div>
    </header>;
};
export default Header;