
import React from 'react';
import ClubCard from './ClubCard';
import { HikingClub } from '@/data/hikingClubs';

interface ClubGridProps {
  clubs: HikingClub[];
}

const ClubGrid = ({ clubs }: ClubGridProps) => {
  return (
    <div className="mb-16">
      {clubs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clubs.map((club) => (
            <ClubCard key={club.id} club={club} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">
            No hiking clubs found matching your search criteria.
          </p>
          <p className="text-gray-400 mt-2">
            Try adjusting your filters or search term.
          </p>
        </div>
      )}
    </div>
  );
};

export default ClubGrid;
