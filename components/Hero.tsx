import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Gradient accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-accent/15 rounded-full blur-3xl opacity-40"></div>
      
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-white">Hi, I'm </span>
          <span className="text-accent">Bruno Rossi</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
          Software Engineer specializing in full-stack development, DevOps, and 
          creating exceptional digital experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/projects" className="btn-accent">
            View My Work
          </Link>
          <Link 
            href="/contact" 
            className="px-6 py-2 rounded-lg font-medium border border-dark-600
                       hover:bg-dark-700 transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;