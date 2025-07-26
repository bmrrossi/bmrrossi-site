import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { FiGithub, FiLinkedin, FiBook, FiSun, FiMoon } from 'react-icons/fi';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-dark-800">
      <header className="border-b border-dark-600 sticky top-0 bg-dark-800/90 backdrop-blur z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-accent">bmr</span>
            <span className="text-white">rossi</span>
            <span className="text-accent">.com</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {['About', 'Projects', 'Blog', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-dark-700 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <FiSun className="text-gray-300 text-xl" />
              ) : (
                <FiMoon className="text-gray-300 text-xl" />
              )}
            </button>
            
            <div className="flex space-x-3">
              <a href="https://github.com/bmrrossi" target="_blank" rel="noopener noreferrer">
                <FiGithub className="text-gray-300 hover:text-white text-xl transition-colors" />
              </a>
              <a href="https://linkedin.com/in/brunomichelrossi" target="_blank" rel="noopener noreferrer">
                <FiLinkedin className="text-gray-300 hover:text-white text-xl transition-colors" />
              </a>
              <a href="https://dev.to/bmrrossi" target="_blank" rel="noopener noreferrer">
                <FiBook className="text-gray-300 hover:text-white text-xl transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="border-t border-dark-600 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Bruno Michel Rossi. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Built with <span className="text-accent">Next.js</span> and <span className="text-accent">Tailwind CSS</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;