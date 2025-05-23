
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
      
      // Handle opening in a new tab if that option is selected
      if (filters.newTab) {
        // Create a simple URL with query parameters
        const queryParams = new URLSearchParams({
          game: filters.game || '',
          mode: filters.mode || '',
          currency: filters.currency || '',
          language: filters.language || 'English',
          devMode: String(filters.devMode)
        }).toString();
        
        window.open(`/game?${queryParams}`, '_blank');
      }
      
      toast({
        title: "Game Options Applied",
        description: `Loading ${filters.game} in ${filters.mode} mode with ${filters.currency} (${filters.language})`
      });
    }, 1500); // Simulate network delay
  };
  
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex w-full min-h-screen bg-background">
        <Sidebar variant="inset" className="border-r border-border">
          <SidebarFilters onFilterChange={handleFilterChange} isLoading={isLoading} />
        </Sidebar>
        
        <SidebarInset className="flex flex-col">
          <Header />
          
          <main className="container mx-auto px-4 py-8 flex-1">
            <div className="space-y-8 max-w-5xl mx-auto">
              <GameDisplay filters={activeFilters} isLoading={isLoading} />
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
