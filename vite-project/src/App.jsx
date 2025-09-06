import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import ThemeToggle from './components/ThemeToggle';

export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle('dark', stored === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-12">
      {/* Background Image */}
      <img
        src="/bg-mesh.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/50 dark:bg-black/50 backdrop-blur-sm -z-10"></div>

      <div className="w-full max-w-5xl">
        <header className="text-center mb-8 relative">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white">
            Image Enhancer
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Upload an image and enhance it using AI. Fast. Secure. Polished.
          </p>

          {/* Dark mode toggle */}
          <div className="absolute top-0 right-0">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </header>

        <main>
          <Home />
        </main>

        <footer className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
          Powered by AI · <span className="italic">Ansh Gupta</span>
        </footer>
      </div>
    </div>
  );
}
