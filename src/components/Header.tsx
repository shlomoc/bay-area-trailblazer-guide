
import React from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Map, ExternalLink } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white py-4 px-6 sticky top-0 z-50 shadow-sm">
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
          <a href="https://www.alltrails.com/" target="_blank" rel="noopener noreferrer">
            <Map size={16} />
            <span>MAP APP</span>
            <ExternalLink size={14} />
          </a>
        </Button>
        
        <Logo />
        
        {/* Empty div to balance the layout */}
        <div className="w-[100px]"></div>
      </div>
    </header>
  );
};

export default Header;
