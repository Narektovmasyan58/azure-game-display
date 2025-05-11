
import React, { useState, useEffect } from 'react';
import { Label } from "@/components/ui/label";
import { Command, CommandInput, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { Search } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FilterSelectProps {
  id: string;
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  placeholder: string;
}

const FilterSelect: React.FC<FilterSelectProps> = ({ 
  id, 
  label, 
  value, 
  options = [], 
  onChange, 
  placeholder 
}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  
  // Ensure options is always an array and properly initialized
  const safeOptions = Array.isArray(options) ? options : [];
  
  // Filter options based on search input
  const filteredOptions = safeOptions.filter(option =>
    option.toLowerCase().includes(search.toLowerCase())
  );

  // Reset search when closed
  useEffect(() => {
    if (!open) {
      setSearch('');
    }
  }, [open]);

  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
      </Label>
      
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id={id}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {value ? value : placeholder}
            <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        {open && (
          <PopoverContent className="w-full p-0" align="start">
            <Command>
              <div className="flex items-center border-b px-3">
                <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                <CommandInput
                  placeholder={`Search ${label.toLowerCase()}...`}
                  className="h-9 flex-1"
                  value={search}
                  onValueChange={setSearch}
                />
              </div>
              <CommandEmpty className="py-2 text-center text-sm">
                No {label.toLowerCase()} found.
              </CommandEmpty>
              {filteredOptions.length > 0 && (
                <CommandGroup className="max-h-52 overflow-auto">
                  {filteredOptions.map((option) => (
                    <CommandItem
                      key={option}
                      value={option}
                      onSelect={(currentValue) => {
                        onChange(currentValue);
                        setOpen(false);
                      }}
                      className="cursor-pointer"
                    >
                      {option}
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </Command>
          </PopoverContent>
        )}
      </Popover>
    </div>
  );
};

export default FilterSelect;
