
import React from 'react';
import Logo from './Logo';

const Hero = () => {
  return (
    <div className="py-12 text-center">
      <div className="mb-6">
        <Logo />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-baytrail-text">
        San Francisco Bay Area Trail Guide
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Explore Nature's Best in the Bay Area
      </p>
    </div>
  );
};

export default Hero;
