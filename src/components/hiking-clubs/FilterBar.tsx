
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from 'lucide-react';

interface FilterBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  clubType: string;
  setClubType: (type: string) => void;
}

const FilterBar = ({ searchTerm, setSearchTerm, clubType, setClubType }: FilterBarProps) => {
  const clubTypes = ['All Types', 'Casual', 'Challenging', 'Family-Friendly', 'Women-Only', 'Eco-Conservation'];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleTypeChange = (value: string) => {
    setClubType(value);
  };

  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative w-full md:w-[70%]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Search by Club Name or City..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="pl-10 h-12 border-baytrail-border rounded-lg"
          />
        </div>
        <div className="w-full md:w-[30%]">
          <Select value={clubType} onValueChange={handleTypeChange}>
            <SelectTrigger className="h-12 border-baytrail-border rounded-lg">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent className="rounded-lg">
              <SelectGroup>
                {clubTypes.map(type => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
