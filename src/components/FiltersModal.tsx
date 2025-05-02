
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Difficulty, AccessibilityFeature } from '@/data/trails';

type FiltersModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onApplyFilters: (filters: FilterOptions) => void;
  currentFilters: FilterOptions;
};

export type FilterOptions = {
  hikeType: 'all' | 'day' | 'multi-day';
  difficulty: 'all' | Difficulty;
  accessibility: 'all' | AccessibilityFeature;
};

const FiltersModal = ({ open, onOpenChange, onApplyFilters, currentFilters }: FiltersModalProps) => {
  const [filters, setFilters] = useState<FilterOptions>(currentFilters);

  const handleApply = () => {
    onApplyFilters(filters);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Filters</DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="space-y-4">
            <h3 className="font-medium text-sm">Filter by Type</h3>
            <RadioGroup
              value={filters.hikeType}
              onValueChange={(value) => setFilters({ ...filters, hikeType: value as any })}
              className="flex flex-col space-y-1"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="type-all" />
                <Label htmlFor="type-all">All</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="day" id="type-day" />
                <Label htmlFor="type-day">Day Hikes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="multi-day" id="type-multi" />
                <Label htmlFor="type-multi">Multi-Day</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-sm">Filter by Difficulty</h3>
            <RadioGroup
              value={filters.difficulty}
              onValueChange={(value) => setFilters({ ...filters, difficulty: value as any })}
              className="flex flex-col space-y-1"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="diff-all" />
                <Label htmlFor="diff-all">All</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="easy" id="diff-easy" />
                <Label htmlFor="diff-easy" className="flex items-center">
                  Easy
                  <span className="ml-2 px-2 py-0.5 bg-baytrail-success text-white text-xs rounded-full">Easy</span>
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="moderate" id="diff-moderate" />
                <Label htmlFor="diff-moderate" className="flex items-center">
                  Moderate
                  <span className="ml-2 px-2 py-0.5 bg-baytrail-secondary text-baytrail-primary text-xs rounded-full">Moderate</span>
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="hard" id="diff-hard" />
                <Label htmlFor="diff-hard" className="flex items-center">
                  Hard
                  <span className="ml-2 px-2 py-0.5 bg-baytrail-warning text-white text-xs rounded-full">Hard</span>
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-sm">Filter by Accessibility</h3>
            <RadioGroup
              value={filters.accessibility}
              onValueChange={(value) => setFilters({ ...filters, accessibility: value as any })}
              className="flex flex-col space-y-1"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="access-all" />
                <Label htmlFor="access-all">All</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pet-friendly" id="access-pet" />
                <Label htmlFor="access-pet">Pet Friendly</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="kid-friendly" id="access-kid" />
                <Label htmlFor="access-kid">Kid Friendly</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="wheelchair-accessible" id="access-wheelchair" />
                <Label htmlFor="access-wheelchair">Wheelchair Accessible</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleApply} className="bg-baytrail-primary hover:bg-baytrail-primary/90">
            Apply
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FiltersModal;
