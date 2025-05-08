
import React from 'react';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Filter, List } from "lucide-react";
import { 
  SidebarContent, 
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  useSidebar,
  SidebarMenuButton,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton
} from "@/components/ui/sidebar";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator
} from "@/components/ui/menubar";
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
  const { toggleSidebar, state } = useSidebar();
  const [filters, setFilters] = React.useState<GameFilters>({
    player: "",
    game: "",
    mode: "",
    currency: "",
    devMode: false
  });
  const [expandedSection, setExpandedSection] = React.useState<string | null>(null);

  const handleFilterChange = (key: keyof GameFilters, value: string | boolean) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleApplyFilters = () => {
    onFilterChange(filters);
  };

  const toggleSection = (section: string) => {
    setExpandedSection(prev => prev === section ? null : section);
  };

  return (
    <SidebarContent className="p-0">
      <SidebarGroup>
        <SidebarGroupLabel className="flex items-center justify-between px-4 pt-2">
          <div className="flex items-center gap-2">
            <Filter size={16} className="text-gaming-600" /> 
            Gaming Options
          </div>
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-full hover:bg-sidebar-accent hidden md:flex"
            aria-label="Toggle sidebar"
          >
            {state === "expanded" ? (
              <ChevronLeft className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton 
                onClick={() => toggleSection('player')} 
                className="justify-between"
              >
                <span className="flex items-center gap-2">
                  <List className="h-4 w-4" />
                  <span>Players</span>
                </span>
                <ChevronRight className={`h-4 w-4 transition-transform ${expandedSection === 'player' ? 'rotate-90' : ''}`} />
              </SidebarMenuButton>
              
              {expandedSection === 'player' && (
                <SidebarMenuSub>
                  {filterOptions.players.map(player => (
                    <SidebarMenuSubItem key={player}>
                      <SidebarMenuSubButton
                        onClick={() => handleFilterChange('player', player)}
                        isActive={filters.player === player}
                      >
                        {player}
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              )}
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton 
                onClick={() => toggleSection('game')} 
                className="justify-between"
              >
                <span className="flex items-center gap-2">
                  <List className="h-4 w-4" />
                  <span>Games</span>
                </span>
                <ChevronRight className={`h-4 w-4 transition-transform ${expandedSection === 'game' ? 'rotate-90' : ''}`} />
              </SidebarMenuButton>
              
              {expandedSection === 'game' && (
                <SidebarMenuSub>
                  {filterOptions.games.map(game => (
                    <SidebarMenuSubItem key={game}>
                      <SidebarMenuSubButton
                        onClick={() => handleFilterChange('game', game)}
                        isActive={filters.game === game}
                      >
                        {game}
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              )}
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton 
                onClick={() => toggleSection('mode')} 
                className="justify-between"
              >
                <span className="flex items-center gap-2">
                  <List className="h-4 w-4" />
                  <span>Game Modes</span>
                </span>
                <ChevronRight className={`h-4 w-4 transition-transform ${expandedSection === 'mode' ? 'rotate-90' : ''}`} />
              </SidebarMenuButton>
              
              {expandedSection === 'mode' && (
                <SidebarMenuSub>
                  {filterOptions.modes.map(mode => (
                    <SidebarMenuSubItem key={mode}>
                      <SidebarMenuSubButton
                        onClick={() => handleFilterChange('mode', mode)}
                        isActive={filters.mode === mode}
                      >
                        {mode}
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              )}
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton 
                onClick={() => toggleSection('currency')} 
                className="justify-between"
              >
                <span className="flex items-center gap-2">
                  <List className="h-4 w-4" />
                  <span>Currency</span>
                </span>
                <ChevronRight className={`h-4 w-4 transition-transform ${expandedSection === 'currency' ? 'rotate-90' : ''}`} />
              </SidebarMenuButton>
              
              {expandedSection === 'currency' && (
                <SidebarMenuSub>
                  {filterOptions.currencies.map(currency => (
                    <SidebarMenuSubItem key={currency}>
                      <SidebarMenuSubButton
                        onClick={() => handleFilterChange('currency', currency)}
                        isActive={filters.currency === currency}
                      >
                        {currency}
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              )}
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton className="justify-between">
                <span className="flex items-center gap-2">
                  <List className="h-4 w-4" />
                  <span>Dev Mode</span>
                </span>
                <Switch 
                  id="dev-mode" 
                  checked={filters.devMode}
                  onCheckedChange={(checked) => handleFilterChange("devMode", checked)}
                  className="ml-auto"
                />
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          
          <div className="px-4 pt-4 pb-2">
            <Button 
              onClick={handleApplyFilters} 
              className="w-full bg-gaming-600 hover:bg-gaming-700 text-white"
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
