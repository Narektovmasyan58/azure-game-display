
import React from 'react';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { 
  SidebarContent, 
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  useSidebar
} from "@/components/ui/sidebar";
import type { GameFilters } from '@/components/FilterPanel';

interface SidebarFiltersProps {
  onFilterChange: (filters: GameFilters) => void;
  isLoading: boolean;
}

const filterOptions = {
  players: ["Player 1", "Player 2", "Player 3", "Player 4"],
  games: ["Blackjack", "Poker", "Roulette", "Slots", "Baccarat"],
  modes: ["Standard", "Tournament", "Practice", "Multiplayer"],
  currencies: ["USD", "EUR", "GBP", "BTC", "ETH"]
};

const SidebarFilters: React.FC<SidebarFiltersProps> = ({ onFilterChange, isLoading }) => {
  const { toggleSidebar } = useSidebar();
  const [filters, setFilters] = React.useState<GameFilters>({
    player: "",
    game: "",
    mode: "",
    currency: "",
    devMode: false
  });

  const handleFilterChange = (key: keyof GameFilters, value: string | boolean) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleApplyFilters = () => {
    onFilterChange(filters);
  };

  return (
    <SidebarContent className="p-0">
      <SidebarGroup>
        <SidebarGroupLabel className="flex items-center justify-between px-4 pt-2">
          <div className="flex items-center gap-2">
            <Filter size={16} className="text-gaming-600" /> 
            Filter Options
          </div>
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-full hover:bg-sidebar-accent hidden md:flex"
            aria-label="Toggle sidebar"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <div className="space-y-5 p-4">
            <FilterSelect
              id="player"
              label="Player"
              options={filterOptions.players}
              value={filters.player}
              onChange={(value) => handleFilterChange("player", value)}
            />
            
            <FilterSelect
              id="game"
              label="Game"
              options={filterOptions.games}
              value={filters.game}
              onChange={(value) => handleFilterChange("game", value)}
            />
            
            <FilterSelect
              id="mode"
              label="Mode"
              options={filterOptions.modes}
              value={filters.mode}
              onChange={(value) => handleFilterChange("mode", value)}
            />
            
            <FilterSelect
              id="currency"
              label="Currency"
              options={filterOptions.currencies}
              value={filters.currency}
              onChange={(value) => handleFilterChange("currency", value)}
            />
            
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

interface FilterSelectProps {
  id: string;
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const FilterSelect: React.FC<FilterSelectProps> = ({ id, label, options, value, onChange }) => (
  <div className="space-y-2">
    <Label htmlFor={`${id}-select`} className="text-sm font-medium">
      {label}
    </Label>
    <Select 
      onValueChange={onChange} 
      value={value}
    >
      <SelectTrigger id={`${id}-select`} className="w-full">
        <SelectValue placeholder={`Choose ${label}`} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

export default SidebarFilters;
