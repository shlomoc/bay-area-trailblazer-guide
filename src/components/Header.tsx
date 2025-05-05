
import React from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Map, ExternalLink } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="bg-white py-4 px-6 sticky top-0 z-50 shadow-sm">
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${location.pathname === '/' ? 'bg-accent/50' : ''}`}>
                  Trails
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/hiking-clubs">
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${location.pathname === '/hiking-clubs' ? 'bg-accent/50' : ''}`}>
                  Hiking Clubs
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
          <a href="https://www.alltrails.com/" target="_blank" rel="noopener noreferrer">
            <Map size={16} />
            <span>MAP APP</span>
            <ExternalLink size={14} />
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
