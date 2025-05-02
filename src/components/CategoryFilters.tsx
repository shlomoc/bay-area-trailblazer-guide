
import React from 'react';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TrailType } from '@/data/trails';

type CategoryFiltersProps = {
  activeCategory: TrailType | 'all';
  onCategoryChange: (category: TrailType | 'all') => void;
  onFiltersClick: () => void;
};

const CategoryFilters = ({ activeCategory, onCategoryChange, onFiltersClick }: CategoryFiltersProps) => {
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'mountain', label: 'Mountain Hikes' },
    { id: 'coast', label: 'Coast Walks' },
    { id: 'urban', label: 'Urban Trails' },
    { id: 'park', label: 'Parks and Gardens' },
  ];

  return (
    <div className="py-4 border-y border-baytrail-border bg-white sticky top-[73px] z-40">
      <div className="container max-w-7xl mx-auto overflow-x-auto hide-scrollbar">
        <div className="flex gap-3 items-center min-w-max px-4">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-pill ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => onCategoryChange(category.id as TrailType | 'all')}
            >
              {category.label}
            </button>
          ))}
          <Button
            onClick={onFiltersClick}
            variant="outline"
            size="sm"
            className="flex items-center gap-2 ml-2"
          >
            <Filter size={14} />
            <span>Filters</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilters;
