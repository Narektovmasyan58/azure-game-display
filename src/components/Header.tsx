
import React from 'react';
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Header = () => {
  return (
    <header className="bg-background border-b border-border py-4 px-6">
      <div className="container flex justify-between items-center mx-auto">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-foreground">Game Launcher</h1>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
