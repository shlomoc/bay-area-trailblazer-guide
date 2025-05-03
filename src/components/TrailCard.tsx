
import React, { useState } from 'react';
import { Clock, Map, ArrowUp, Leaf } from 'lucide-react';
import { Trail } from '@/data/trails';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import TrailDetailModal from './TrailDetailModal';

type TrailCardProps = {
  trail: Trail;
};

const TrailCard = ({ trail }: TrailCardProps) => {
  const [detailModalOpen, setDetailModalOpen] = useState(false);

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    
    if (hours === 0) {
      return `${remainingMinutes} min`;
    } else if (remainingMinutes === 0) {
      return `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
    } else {
      return `${hours} ${hours === 1 ? 'hour' : 'hours'} ${remainingMinutes} min`;
    }
  };

  const getDifficultyColor = (difficulty: Trail['difficulty']) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-baytrail-success text-white';
      case 'moderate':
        return 'bg-baytrail-secondary text-baytrail-primary';
      case 'hard':
        return 'bg-baytrail-warning text-white';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  const getTransportationIcon = (type: Trail['transportation'][number]) => {
    switch (type) {
      case 'walking':
        return '🚶';
      case 'driving':
        return '🚗';
      case 'shuttle':
        return '🚌';
      case 'public-transport':
        return '🚆';
      default:
        return '🚶';
    }
  };

  const isEcoFriendly = trail.transportation.includes('public-transport');

  const getStatusBadge = (status: Trail['status']) => {
    switch (status) {
      case 'open':
        return <Badge className="bg-baytrail-success text-white border-none">Open</Badge>;
      case 'closed':
        return <Badge className="bg-red-500 text-white border-none">Closed</Badge>;
      case 'partially-closed':
        return <Badge className="bg-amber-500 text-white border-none">Partially Closed</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="trail-card">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={trail.imageUrl} 
          alt={trail.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {trail.reservationRequired ? (
            <Badge className="bg-baytrail-warning text-white border-none">
              Reservation Required
            </Badge>
          ) : (
            <Badge className="bg-gray-100 text-gray-700 border-none">
              No Reservation Needed
            </Badge>
          )}
          <Badge className={`${getDifficultyColor(trail.difficulty)} border-none`}>
            {trail.difficulty.charAt(0).toUpperCase() + trail.difficulty.slice(1)}
          </Badge>
          {getStatusBadge(trail.status)}
          {isEcoFriendly && (
            <Badge className="bg-green-600 text-white border-none flex items-center gap-1">
              <Leaf size={14} /> Eco-Friendly
            </Badge>
          )}
        </div>
      </div>
      
      <div className="p-5">
        <h2 className="text-xl font-bold mb-1 font-heading">{trail.name}</h2>
        <p className="text-gray-600 mb-4 text-sm">{trail.subtitle}</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 text-sm">
          <div className="flex items-center gap-2">
            <Map size={16} className="text-baytrail-primary" />
            <span>{trail.distance} miles</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-baytrail-primary" />
            <span>{formatTime(trail.time)}</span>
          </div>
          <div className="flex items-center gap-2">
            <ArrowUp size={16} className="text-baytrail-primary" />
            <span>{trail.elevationGain}' gain</span>
          </div>
          <div className="flex items-center gap-2">
            <ArrowUp size={16} className="text-baytrail-primary" />
            <span>{trail.maxElevation}' max</span>
          </div>
        </div>
        
        <p className="text-sm mb-4 line-clamp-2">{trail.description}</p>
        
        <div className="mb-4">
          <h3 className="text-sm font-bold mb-2">How To Get There:</h3>
          <div className="flex flex-wrap gap-3">
            {trail.transportation.map((transport) => (
              <div key={transport} className="flex items-center gap-1 text-sm">
                <span>{getTransportationIcon(transport)}</span>
                <span className="capitalize">{transport === 'public-transport' ? 'Public Transit' : transport} Distance</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            className="bg-baytrail-primary hover:bg-baytrail-primary/90 flex-1"
            onClick={() => setDetailModalOpen(true)}
          >
            Trail Info
          </Button>
          {trail.reservationRequired && trail.reservationUrl && (
            <Button 
              className="bg-baytrail-reservation hover:bg-baytrail-reservation/90 flex-1"
              asChild
            >
              <a href={trail.reservationUrl} target="_blank" rel="noopener noreferrer">
                Reservation Link
              </a>
            </Button>
          )}
        </div>
      </div>

      <TrailDetailModal 
        trail={trail} 
        open={detailModalOpen} 
        onOpenChange={setDetailModalOpen} 
      />
    </div>
  );
};

export default TrailCard;
