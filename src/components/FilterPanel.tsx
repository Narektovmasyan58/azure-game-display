
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { Label } from "@/components/ui/label";

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
}

const players = ["Player 1", "Player 2", "Player 3", "Player 4"];
const games = ["Blackjack", "Poker", "Roulette", "Slots", "Baccarat"];
const modes = ["Standard", "Tournament", "Practice", "Multiplayer"];
const currencies = ["USD", "EUR", "GBP", "BTC", "ETH"];

const FilterPanel: React.FC<FilterPanelProps> = ({ onFilterChange, isLoading }) => {
  const [filters, setFilters] = React.useState<GameFilters>({
    player: "",
    game: "",
    mode: "",
    currency: "",
    devMode: false
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
        <div className="space-y-2">
          <Label htmlFor="player-select" className="text-sm font-medium text-gaming-800">
            Player
          </Label>
          <Select 
            onValueChange={(value) => handleFilterChange("player", value)} 
            value={filters.player}
          >
            <SelectTrigger id="player-select" className="bg-white border-gaming-200">
              <SelectValue placeholder="Choose Player" />
            </SelectTrigger>
            <SelectContent>
              {players.map((player) => (
                <SelectItem key={player} value={player}>
                  {player}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="game-select" className="text-sm font-medium text-gaming-800">
            Game
          </Label>
          <Select 
            onValueChange={(value) => handleFilterChange("game", value)} 
            value={filters.game}
          >
            <SelectTrigger id="game-select" className="bg-white border-gaming-200">
              <SelectValue placeholder="Choose Game" />
            </SelectTrigger>
            <SelectContent>
              {games.map((game) => (
                <SelectItem key={game} value={game}>
                  {game}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="mode-select" className="text-sm font-medium text-gaming-800">
            Mode
          </Label>
          <Select 
            onValueChange={(value) => handleFilterChange("mode", value)} 
            value={filters.mode}
          >
            <SelectTrigger id="mode-select" className="bg-white border-gaming-200">
              <SelectValue placeholder="Choose Mode" />
            </SelectTrigger>
            <SelectContent>
              {modes.map((mode) => (
                <SelectItem key={mode} value={mode}>
                  {mode}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="currency-select" className="text-sm font-medium text-gaming-800">
            Currency
          </Label>
          <Select 
            onValueChange={(value) => handleFilterChange("currency", value)} 
            value={filters.currency}
          >
            <SelectTrigger id="currency-select" className="bg-white border-gaming-200">
              <SelectValue placeholder="Choose Currency" />
            </SelectTrigger>
            <SelectContent>
              {currencies.map((currency) => (
                <SelectItem key={currency} value={currency}>
                  {currency}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-6">
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
