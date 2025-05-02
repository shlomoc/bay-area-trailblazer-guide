
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-baytrail-border py-8 mt-8">
      <div className="container max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center gap-8 text-sm text-gray-500">
          <a href="#" className="hover:text-baytrail-primary transition-colors">About</a>
          <a href="#" className="hover:text-baytrail-primary transition-colors">Contact</a>
          <a href="#" className="hover:text-baytrail-primary transition-colors">Credits (Images via Unsplash)</a>
        </div>
        <p className="mt-4 text-xs text-gray-400">
          &copy; {new Date().getFullYear()} BayTrails. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
