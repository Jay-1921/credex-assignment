// src/components/ThemeToggle.jsx
import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      );
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      root.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 transition bg-gray-200 rounded dark:bg-gray-700 hover:scale-105"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-900" />}
    </button>
  );
};

export default ThemeToggle;
