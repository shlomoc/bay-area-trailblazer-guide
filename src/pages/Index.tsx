import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryFilters from '@/components/CategoryFilters';
import FiltersModal, { FilterOptions } from '@/components/FiltersModal';
import TrailGrid from '@/components/TrailGrid';
import Footer from '@/components/Footer';
import { trails, TrailType, Difficulty, AccessibilityFeature } from '@/data/trails';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<TrailType | 'all'>('all');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    hikeType: 'all',
    difficulty: 'all',
    accessibility: 'all',
  });
  const [filteredTrails, setFilteredTrails] = useState(trails);

  useEffect(() => {
    const filtered = trails.filter((trail) => {
      // Category filter
      if (activeCategory !== 'all' && trail.type !== activeCategory) {
        return false;
      }
      
      // Difficulty filter
      if (filterOptions.difficulty !== 'all' && trail.difficulty !== filterOptions.difficulty) {
        return false;
      }
      
      // Accessibility filter
      if (filterOptions.accessibility !== 'all' && !trail.accessibility.includes(filterOptions.accessibility as AccessibilityFeature)) {
        return false;
      }
      
      // For hikeType, we don't have this info in our data model, so we'll just keep it as is
      // In a real app you would filter based on the hike type data
      
      return true;
    });
    
    setFilteredTrails(filtered);
  }, [activeCategory, filterOptions]);

  const handleCategoryChange = (category: TrailType | 'all') => {
    setActiveCategory(category);
  };

  const handleApplyFilters = (filters: FilterOptions) => {
    setFilterOptions(filters);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      
      <CategoryFilters 
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        onFiltersClick={() => setFiltersOpen(true)}
      />
      
      <FiltersModal 
        open={filtersOpen}
        onOpenChange={setFiltersOpen}
        onApplyFilters={handleApplyFilters}
        currentFilters={filterOptions}
      />
      
      <main className="flex-grow">
        <TrailGrid trails={filteredTrails} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
