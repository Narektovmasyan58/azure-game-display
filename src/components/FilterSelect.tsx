
import React, { useState } from 'react';
import { Check, Search } from "lucide-react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";

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
  options = [], // Default to empty array if options is undefined
  onChange, 
  placeholder 
}) => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
      </Label>
      
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
            id={id}
          >
            {value ? value : placeholder}
            <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        
        {/* Only render content when open to prevent cmdk initialization errors */}
        {open && (
          <PopoverContent className="w-full p-0" align="start">
            <Command>
              <CommandInput placeholder={`Search ${label.toLowerCase()}...`} />
              <CommandEmpty>No {label.toLowerCase()} found.</CommandEmpty>
              {options && options.length > 0 && (
                <CommandGroup className="max-h-60 overflow-y-auto">
                  {options.map((option) => (
                    <CommandItem
                      key={option}
                      value={option}
                      onSelect={() => {
                        onChange(option);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === option ? "opacity-100" : "opacity-0"
                        )}
                      />
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
