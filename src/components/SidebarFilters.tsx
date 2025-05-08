
import React from 'react';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { 
  SidebarContent, 
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent
} from "@/components/ui/sidebar";
import type { GameFilters } from '@/components/FilterPanel';

interface SidebarFiltersProps {
  onFilterChange: (filters: GameFilters) => void;
  isLoading: boolean;
}

const players = ["Player 1", "Player 2", "Player 3", "Player 4"];
const games = ["Blackjack", "Poker", "Roulette", "Slots", "Baccarat"];
const modes = ["Standard", "Tournament", "Practice", "Multiplayer"];
const currencies = ["USD", "EUR", "GBP", "BTC", "ETH"];

const SidebarFilters: React.FC<SidebarFiltersProps> = ({ onFilterChange, isLoading }) => {
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
    <SidebarContent className="p-0">
      <SidebarGroup>
        <SidebarGroupLabel className="flex items-center gap-2 px-4 pt-2">
          <Filter size={16} className="text-gaming-600" /> 
          Filter Options
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <div className="space-y-5 p-4">
            <div className="space-y-2">
              <Label htmlFor="player-select" className="text-sm font-medium">
                Player
              </Label>
              <Select 
                onValueChange={(value) => handleFilterChange("player", value)} 
                value={filters.player}
              >
                <SelectTrigger id="player-select" className="w-full">
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
              <Label htmlFor="game-select" className="text-sm font-medium">
                Game
              </Label>
              <Select 
                onValueChange={(value) => handleFilterChange("game", value)} 
                value={filters.game}
              >
                <SelectTrigger id="game-select" className="w-full">
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
              <Label htmlFor="mode-select" className="text-sm font-medium">
                Mode
              </Label>
              <Select 
                onValueChange={(value) => handleFilterChange("mode", value)} 
                value={filters.mode}
              >
                <SelectTrigger id="mode-select" className="w-full">
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
              <Label htmlFor="currency-select" className="text-sm font-medium">
                Currency
              </Label>
              <Select 
                onValueChange={(value) => handleFilterChange("currency", value)} 
                value={filters.currency}
              >
                <SelectTrigger id="currency-select" className="w-full">
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
            
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-2">
                <Switch 
                  id="dev-mode" 
                  checked={filters.devMode}
                  onCheckedChange={(checked) => handleFilterChange("devMode", checked)}
                />
                <Label htmlFor="dev-mode" className="text-sm font-medium">
                  Dev Mode
                </Label>
              </div>
            </div>
            
            <Button 
              onClick={handleApplyFilters} 
              className="w-full mt-4 bg-gaming-600 hover:bg-gaming-700 text-white"
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
