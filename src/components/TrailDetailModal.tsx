
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Map, ArrowUp, ExternalLink, Timer, Sunrise, Sunset } from 'lucide-react';
import { Trail } from '@/data/trails';

interface TrailDetailModalProps {
  trail: Trail;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TrailDetailModal = ({ trail, open, onOpenChange }: TrailDetailModalProps) => {
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

  const getGoogleMapsUrl = (trail: Trail) => {
    if (trail.trailheadLat && trail.trailheadLng) {
      return `https://www.google.com/maps/dir/?api=1&destination=${trail.trailheadLat},${trail.trailheadLng}`;
    } else if (trail.trailheadAddress) {
      return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(trail.trailheadAddress)}`;
    }
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(trail.name + ' trail')}`;
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

  const getParkingStatusLabel = (status: Trail['parking']) => {
    switch (status) {
      case 'ample':
        return { label: 'Ample Parking', color: 'bg-baytrail-success text-white' };
      case 'limited':
        return { label: 'Limited Parking', color: 'bg-baytrail-secondary text-baytrail-primary' };
      case 'difficult':
        return { label: 'Difficult to Park', color: 'bg-baytrail-warning text-white' };
      case 'reservation-required':
        return { label: 'Parking Reservation Required', color: 'bg-baytrail-warning text-white' };
      default:
        return { label: 'Parking Information Unavailable', color: 'bg-gray-200 text-gray-800' };
    }
  };

  const getTrailConditionLabel = (condition: Trail['trailCondition']) => {
    switch (condition) {
      case 'excellent':
        return { label: 'Excellent Condition', color: 'bg-baytrail-success text-white' };
      case 'good':
        return { label: 'Good Condition', color: 'bg-green-500 text-white' };
      case 'fair':
        return { label: 'Fair Condition', color: 'bg-yellow-500 text-white' };
      case 'poor':
        return { label: 'Poor Condition', color: 'bg-orange-500 text-white' };
      case 'closed':
        return { label: 'Trail Closed', color: 'bg-red-500 text-white' };
      default:
        return { label: 'Condition Unknown', color: 'bg-gray-200 text-gray-800' };
    }
  };

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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-bold">{trail.name}</DialogTitle>
            <div className="flex gap-2">
              {getStatusBadge(trail.status)}
              <Badge className={`${getDifficultyColor(trail.difficulty)}`}>
                {trail.difficulty.charAt(0).toUpperCase() + trail.difficulty.slice(1)}
              </Badge>
              {trail.sunset_spot && (
                <Badge className="bg-[#ea384c] text-white border-none flex items-center gap-1">
                  <Sunset size={14} /> Sunset View
                </Badge>
              )}
              {trail.sunrise_spot && (
                <Badge className="bg-[#33C3F0] text-white border-none flex items-center gap-1">
                  <Sunrise size={14} /> Sunrise Trail
                </Badge>
              )}
            </div>
          </div>
          <DialogDescription className="text-base">{trail.subtitle}</DialogDescription>
        </DialogHeader>

        <div className="relative h-64 sm:h-80 overflow-hidden my-4 rounded-lg">
          <img 
            src={trail.imageUrl} 
            alt={trail.name} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
          <div className="flex flex-col items-center justify-center bg-gray-50 p-3 rounded-lg">
            <Map size={20} className="text-baytrail-primary mb-1" />
            <span className="text-sm font-medium">Distance</span>
            <span className="font-bold">{trail.distance} miles</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-50 p-3 rounded-lg">
            <Clock size={20} className="text-baytrail-primary mb-1" />
            <span className="text-sm font-medium">Time</span>
            <span className="font-bold">{formatTime(trail.time)}</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-50 p-3 rounded-lg">
            <ArrowUp size={20} className="text-baytrail-primary mb-1" />
            <span className="text-sm font-medium">Elevation Gain</span>
            <span className="font-bold">{trail.elevationGain}' gain</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-50 p-3 rounded-lg">
            <ArrowUp size={20} className="text-baytrail-primary mb-1" />
            <span className="text-sm font-medium">Max Elevation</span>
            <span className="font-bold">{trail.maxElevation}' max</span>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-2">Trail Description</h3>
              <p className="text-gray-700">
                {trail.fullDescription || trail.description}
              </p>
            </CardContent>
          </Card>

          {trail.bestVisitingTime && (
            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <Timer className="text-baytrail-primary" size={20} />
                  Best Time to Visit
                </h3>
                <p className="text-gray-700">
                  {trail.bestVisitingTime}
                </p>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-2">Getting There</h3>
              <div className="flex flex-wrap gap-3 mb-4">
                {trail.transportation.map((transport) => (
                  <div key={transport} className="flex items-center gap-1">
                    <span>{getTransportationIcon(transport)}</span>
                    <span className="capitalize">{transport === 'public-transport' ? 'Public Transit' : transport} Distance</span>
                  </div>
                ))}
              </div>
              
              {trail.publicTransportInfo && (
                <div className="mb-4 p-3 bg-gray-50 rounded-md border border-gray-200">
                  <div className="flex items-center gap-2 font-semibold text-gray-700 mb-1">
                    <span>Public Transportation</span>
                  </div>
                  <p className="text-sm text-gray-700">{trail.publicTransportInfo}</p>
                </div>
              )}

              <Button 
                className="w-full bg-baytrail-primary hover:bg-baytrail-primary/90 mb-4"
                asChild
              >
                <a href={getGoogleMapsUrl(trail)} target="_blank" rel="noopener noreferrer">
                  Get Directions via Google Maps <ExternalLink size={16} className="ml-1" />
                </a>
              </Button>
              
              {trail.trailheadAddress && (
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Trailhead Address:</span> {trail.trailheadAddress}
                </p>
              )}
              
              <div className="flex gap-2 mt-2">
                <Badge className={getParkingStatusLabel(trail.parking).color}>
                  {getParkingStatusLabel(trail.parking).label}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-2">Current Conditions</h3>
              <div className="flex gap-2 mb-3">
                <Badge className={getTrailConditionLabel(trail.trailCondition).color}>
                  {getTrailConditionLabel(trail.trailCondition).label}
                </Badge>
              </div>
              
              {trail.seasonalConsiderations && (
                <>
                  <h4 className="font-semibold mb-1">Seasonal Considerations</h4>
                  <p className="text-sm text-gray-700">{trail.seasonalConsiderations}</p>
                </>
              )}
            </CardContent>
          </Card>

          {trail.localTips && trail.localTips.length > 0 && (
            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-3">Local Tips</h3>
                <ul className="space-y-3">
                  {trail.localTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="bg-baytrail-secondary text-baytrail-primary font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </span>
                      <p className="text-gray-700">{tip}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          <div className="flex gap-4">
            {trail.reservationRequired && trail.reservationUrl && (
              <Button 
                className="flex-1 bg-baytrail-reservation hover:bg-baytrail-reservation/90"
                asChild
              >
                <a href={trail.reservationUrl} target="_blank" rel="noopener noreferrer">
                  Make Reservation <ExternalLink size={16} className="ml-1" />
                </a>
              </Button>
            )}
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => onOpenChange(false)}
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TrailDetailModal;
