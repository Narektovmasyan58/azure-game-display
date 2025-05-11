
import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Command, CommandInput, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { Search } from "lucide-react";

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
  options, 
  onChange, 
  placeholder 
}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
      </Label>
      <Select 
        onValueChange={onChange} 
        value={value}
        open={open}
        onOpenChange={setOpen}
      >
        <SelectTrigger id={id} className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="p-0">
          <Command>
            <div className="flex items-center border-b px-3">
              <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
              <CommandInput
                placeholder={`Search ${label.toLowerCase()}...`}
                className="h-9"
                value={search}
                onValueChange={setSearch}
              />
            </div>
            <CommandEmpty className="py-2 text-center text-sm">No {label.toLowerCase()} found.</CommandEmpty>
            <CommandGroup className="max-h-52 overflow-auto">
              {filteredOptions.map((option) => (
                <CommandItem
                  key={option}
                  value={option}
                  onSelect={(currentValue) => {
                    onChange(currentValue);
                    setOpen(false);
                    setSearch('');
                  }}
                  className="cursor-pointer"
                >
                  {option}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterSelect;
