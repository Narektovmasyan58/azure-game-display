
import React from 'react';
import { Gamepad, Menu } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-gaming-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="md:hidden">
            <SidebarTrigger />
          </div>
          <div className="flex items-center space-x-2">
            <Gamepad className="h-6 w-6 text-gaming-600" />
            <span className="text-xl font-bold bg-clip-text text-transparent blue-gradient">Pascal Gaming</span>
          </div>
          
          <div className="hidden md:flex items-center ml-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Games</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-blue-500 to-blue-900 p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mt-4 mb-2 text-lg font-medium text-white">
                              Pascal Gaming
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Experience the thrill of our gaming platform with various options
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Poker</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Classic card game of strategy and skill
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Blackjack</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Beat the dealer to 21 without going over
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Roulette</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Spin the wheel and try your luck
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Tournaments</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Weekly Challenges</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Join our weekly tournaments for exciting prizes
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Championship Series</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Professional gaming competitions with big rewards
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button className="hidden md:flex" variant="outline">
            Register
          </Button>
          <Button className="hidden md:flex bg-gaming-600 hover:bg-gaming-700">
            Sign In
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
