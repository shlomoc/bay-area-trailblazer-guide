
import React from 'react';
import HeroSection from '@/components/hiking-clubs/HeroSection';
import FilterBar from '@/components/hiking-clubs/FilterBar';
import ClubGrid from '@/components/hiking-clubs/ClubGrid';
import CTASection from '@/components/hiking-clubs/CTASection';
import { hikingClubs } from '@/data/hikingClubs';
import { useState, useEffect } from 'react';

const HikingClubs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [clubType, setClubType] = useState('All Types');
  const [filteredClubs, setFilteredClubs] = useState(hikingClubs);

  // Update filtered clubs whenever search or club type changes
  useEffect(() => {
    const newFilteredClubs = hikingClubs.filter((club) => {
      const matchesSearch = 
        club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        club.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = clubType === 'All Types' || club.type === clubType;
      
      return matchesSearch && matchesType;
    });
    
    setFilteredClubs(newFilteredClubs);
  }, [searchTerm, clubType]);

  return (
    <div className="bg-baytrail-background min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 pb-16">
        <HeroSection />
        <FilterBar 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          clubType={clubType} 
          setClubType={setClubType} 
        />
        <ClubGrid clubs={filteredClubs} />
        <CTASection />
      </div>
    </div>
  );
};

export default HikingClubs;
