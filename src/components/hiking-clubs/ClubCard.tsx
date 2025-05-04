
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { HikingClub } from '@/data/hikingClubs';
import { ExternalLink } from 'lucide-react';

interface ClubCardProps {
  club: HikingClub;
}

const ClubCard = ({ club }: ClubCardProps) => {
  return (
    <div className="bg-baytrail-card rounded-lg overflow-hidden shadow-md hover:shadow-card-hover transition-all duration-300 hover:scale-[1.02]">
      <div className="h-48 overflow-hidden relative">
        <img
          src={club.image}
          alt={`${club.name} hiking group`}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2 font-heading">{club.name}</h2>
        <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{club.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          <Badge className="bg-baytrail-secondary text-baytrail-primary border-none">
            {club.type}
          </Badge>
          <Badge className="bg-gray-100 text-gray-700 border-none">
            {club.location}
          </Badge>
          <Badge className="bg-gray-100 text-gray-700 border-none">
            {club.frequency}
          </Badge>
        </div>
        
        <Button 
          className="w-full bg-baytrail-primary hover:bg-baytrail-primary/90 flex items-center justify-center gap-2"
          asChild
        >
          <a href={club.link} target="_blank" rel="noopener noreferrer">
            Visit Website <ExternalLink size={16} />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ClubCard;
