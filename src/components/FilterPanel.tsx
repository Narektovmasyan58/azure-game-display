
import React from 'react';
import { Filter, ExternalLink, Globe, Fullscreen } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import FilterSelect from './FilterSelect';

interface FilterPanelProps {
  onFilterChange: (filters: GameFilters) => void;
  isLoading: boolean;
}

export interface GameFilters {
  player: string;
  game: string;
  mode: string;
  currency: string;
  devMode: boolean;
  newTab: boolean;
  language: string;
}

const players = ["Player 1", "Player 2", "Player 3", "Player 4"];
const games = ["Blackjack", "Poker", "Roulette", "Slots", "Baccarat"];
const modes = ["Standard", "Tournament", "Practice", "Multiplayer"];
const currencies = ["USD", "EUR", "GBP", "BTC", "ETH"];
const languages = ["English", "Spanish", "French", "German", "Italian", "Chinese", "Japanese"];

const FilterPanel: React.FC<FilterPanelProps> = ({ onFilterChange, isLoading }) => {
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

  return (
    <div className="filter-card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gaming-900 flex items-center gap-2">
          <Filter size={18} className="text-gaming-600" /> Filter Options
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
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
      </div>
      
      <div className="flex flex-col gap-4 mt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Switch 
              id="dev-mode" 
              checked={filters.devMode}
              onCheckedChange={(checked) => handleFilterChange("devMode", checked)}
            />
            <Label htmlFor="dev-mode" className="text-sm font-medium text-gaming-800">
              Dev Mode
            </Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Switch 
              id="new-tab" 
              checked={filters.newTab}
              onCheckedChange={(checked) => handleFilterChange("newTab", checked)}
            />
            <Label htmlFor="new-tab" className="text-sm font-medium text-gaming-800 flex items-center gap-1">
              Open in New Tab <ExternalLink size={14} />
            </Label>
          </div>
        </div>
        
        <Button 
          onClick={handleApplyFilters} 
          className="bg-gaming-600 hover:bg-gaming-700 text-white"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Apply Filters"}
        </Button>
      </div>
    </div>
  );
};

export default FilterPanel;
