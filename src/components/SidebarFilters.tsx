import React from 'react';
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Filter, ExternalLink, Globe, Fullscreen } from "lucide-react";
import { 
  SidebarContent, 
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent
} from "@/components/ui/sidebar";
import FilterSelect from './FilterSelect';
import type { GameFilters } from '@/components/FilterPanel';

interface SidebarFiltersProps {
  onFilterChange: (filters: GameFilters) => void;
  isLoading: boolean;
}

const players = ["Player 1", "Player 2", "Player 3", "Player 4"];
const games = ["Blackjack", "Poker", "Roulette", "Slots", "Baccarat"];
const modes = ["Standard", "Tournament", "Practice", "Multiplayer"];
const currencies = ["USD", "EUR", "GBP", "BTC", "ETH"];
const languages = ["English", "Spanish", "French", "German", "Italian", "Chinese", "Japanese"];

const SidebarFilters: React.FC<SidebarFiltersProps> = ({ onFilterChange, isLoading }) => {
  const [filters, setFilters] = React.useState<GameFilters>({
    player: "",
    game: "",
    mode: "",
    currency: "",
    devMode: false,
    newTab: false,
    language: "English"
  });

  const handleFilterChange = (key: keyof GameFilters, value: string | boolean) => {
    const updatedFilters = { ...filters, [key]: value };
    setFilters(updatedFilters);
  };

  const handleApplyFilters = () => {
    onFilterChange(filters);
  };

  const handleFullscreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
  };

  return (
    <SidebarContent className="p-0">
      <SidebarGroup>
        <SidebarGroupLabel className="flex items-center gap-2 px-4 pt-2">
          <Filter size={16} className="text-primary" /> 
          Filter Options
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <div className="space-y-5 p-4">
            <FilterSelect
              id="player-select"
              label="Player"
              value={filters.player}
              options={players}
              onChange={(value) => handleFilterChange("player", value)}
              placeholder="Choose Player"
            />
            
            <FilterSelect
              id="game-select"
              label="Game"
              value={filters.game}
              options={games}
              onChange={(value) => handleFilterChange("game", value)}
              placeholder="Choose Game"
            />
            
            <FilterSelect
              id="mode-select"
              label="Mode"
              value={filters.mode}
              options={modes}
              onChange={(value) => handleFilterChange("mode", value)}
              placeholder="Choose Mode"
            />
            
            <FilterSelect
              id="currency-select"
              label="Currency"
              value={filters.currency}
              options={currencies}
              onChange={(value) => handleFilterChange("currency", value)}
              placeholder="Choose Currency"
            />
            
            <FilterSelect
              id="language-select"
              label="Language"
              value={filters.language}
              options={languages}
              onChange={(value) => handleFilterChange("language", value)}
              placeholder="Choose Language"
            />
            
            <div className="flex flex-col gap-4 pt-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Switch 
                    id="dev-mode-sidebar" 
                    checked={filters.devMode}
                    onCheckedChange={(checked) => handleFilterChange("devMode", checked)}
                  />
                  <Label htmlFor="dev-mode-sidebar" className="text-sm font-medium">
                    Dev Mode
                  </Label>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Switch 
                    id="new-tab-sidebar" 
                    checked={filters.newTab}
                    onCheckedChange={(checked) => handleFilterChange("newTab", checked)}
                  />
                  <Label htmlFor="new-tab-sidebar" className="text-sm font-medium flex items-center gap-1">
                    Open in New Tab <ExternalLink size={14} />
                  </Label>
                </div>
              </div>

              <Button
                onClick={handleFullscreen}
                variant="outline"
                className="flex items-center gap-1 w-full mt-2"
              >
                <Fullscreen size={16} />
                Fullscreen Mode
              </Button>
            </div>
            
            <Button 
              onClick={handleApplyFilters} 
              className="w-full mt-4"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Apply Filters"}
            </Button>
          </div>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );
};

export default SidebarFilters;
