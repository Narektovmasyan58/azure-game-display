import React, { useState } from 'react';
import Header from '../components/Header';
import { GameFilters } from '../components/FilterPanel';
import GameDisplay from '../components/GameDisplay';
import { toast } from "@/components/ui/use-toast";
import { SidebarProvider, Sidebar, SidebarInset } from "@/components/ui/sidebar";
import SidebarFilters from '@/components/SidebarFilters';
const Index = () => {
  const [activeFilters, setActiveFilters] = useState<GameFilters | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleFilterChange = (filters: GameFilters) => {
    // Simulate loading
    setIsLoading(true);
    setTimeout(() => {
      setActiveFilters(filters);
      setIsLoading(false);
      toast({
        title: "Game Options Applied",
        description: `Loading ${filters.game} in ${filters.mode} mode with ${filters.currency}`
      });
    }, 1500); // Simulate network delay
  };
  return <SidebarProvider defaultOpen={true}>
      <div className="flex w-full min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Sidebar variant="inset" className="border-r border-gaming-100">
          <SidebarFilters onFilterChange={handleFilterChange} isLoading={isLoading} />
        </Sidebar>
        
        <SidebarInset className="flex flex-col">
          <Header />
          
          <main className="container mx-auto px-4 py-8 flex-1">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gaming-900 mb-3">
                Azure Gaming Platform
              </h1>
              <p className="text-gaming-600 max-w-2xl mx-auto">
                Select your game preferences from the sidebar and enjoy a seamless gaming experience.
              </p>
            </div>
            
            <div className="space-y-8 max-w-5xl mx-auto">
              <GameDisplay filters={activeFilters} isLoading={isLoading} />
            </div>
            
            
          </main>
          
          
        </SidebarInset>
      </div>
    </SidebarProvider>;
};
export default Index;