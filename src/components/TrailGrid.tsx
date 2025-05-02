
import React from 'react';
import { Trail } from '@/data/trails';
import TrailCard from './TrailCard';

type TrailGridProps = {
  trails: Trail[];
};

const TrailGrid = ({ trails }: TrailGridProps) => {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      {trails.length === 0 ? (
        <div className="text-center py-20">
          <h3 className="text-xl font-medium text-gray-600">No trails match your current filters</h3>
          <p className="mt-2 text-gray-500">Try adjusting your filters to see more results</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trails.map((trail) => (
            <TrailCard key={trail.id} trail={trail} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TrailGrid;
