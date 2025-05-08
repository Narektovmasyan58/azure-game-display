
import React, { useState } from 'react';
import Header from '../components/Header';
import FilterPanel, { GameFilters } from '../components/FilterPanel';
import GameDisplay from '../components/GameDisplay';
import { toast } from "@/components/ui/use-toast";

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
        description: `Loading ${filters.game} in ${filters.mode} mode with ${filters.currency}`,
      });
      
    }, 1500); // Simulate network delay
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gaming-900 mb-3">
            Azure Gaming Platform
          </h1>
          <p className="text-gaming-600 max-w-2xl mx-auto">
            Select your game preferences below and enjoy a seamless gaming experience
            with our advanced filter system.
          </p>
        </div>
        
        <div className="space-y-8 max-w-5xl mx-auto">
          <FilterPanel onFilterChange={handleFilterChange} isLoading={isLoading} />
          
          <GameDisplay filters={activeFilters} isLoading={isLoading} />
        </div>
        
        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold text-gaming-800 mb-3">Why Choose Azure Gaming?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-5 rounded-xl shadow-md border border-gaming-100">
              <div className="bg-gaming-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gaming-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-medium text-gaming-800 mb-2">Fast & Responsive</h3>
              <p className="text-sm text-gaming-600">
                Enjoy smooth gameplay with our high-performance gaming platform.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-xl shadow-md border border-gaming-100">
              <div className="bg-gaming-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gaming-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-medium text-gaming-800 mb-2">Secure Gaming</h3>
              <p className="text-sm text-gaming-600">
                Advanced security measures to keep your gaming experience safe.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-xl shadow-md border border-gaming-100">
              <div className="bg-gaming-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gaming-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-medium text-gaming-800 mb-2">Global Gaming</h3>
              <p className="text-sm text-gaming-600">
                Multiple currencies supported for players around the world.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="mt-16 bg-gaming-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gaming-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xl font-bold">Azure Gaming</span>
              </div>
              <p className="text-gaming-300 mt-2 text-sm">
                The ultimate gaming experience
              </p>
            </div>
            
            <div className="flex space-x-8">
              <div>
                <h3 className="font-medium mb-2 text-gaming-300">Platform</h3>
                <ul className="space-y-1 text-sm">
                  <li><a href="#" className="hover:text-gaming-400">Games</a></li>
                  <li><a href="#" className="hover:text-gaming-400">Features</a></li>
                  <li><a href="#" className="hover:text-gaming-400">Security</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-2 text-gaming-300">Company</h3>
                <ul className="space-y-1 text-sm">
                  <li><a href="#" className="hover:text-gaming-400">About Us</a></li>
                  <li><a href="#" className="hover:text-gaming-400">Contact</a></li>
                  <li><a href="#" className="hover:text-gaming-400">Careers</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gaming-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gaming-400">
              © 2025 Azure Gaming. All rights reserved.
            </p>
            
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gaming-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gaming-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.234.585 1.8 1.15.564.564.9 1.132 1.15 1.8.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.15 1.8c-.564.564-1.132.9-1.8 1.15-.636.247-1.363.416-2.427.465-1.06.048-1.37.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.8-1.15 4.902 4.902 0 01-1.15-1.8c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.15-1.8A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gaming-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
