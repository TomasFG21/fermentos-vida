'use client';

import { useState } from 'react';
// Importa los componentes por defecto
import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import Products from '@/app/components/Products';
import Benefits from '@/app/components/Benefits';
import Footer from '@/app/components/Footer';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <main className={darkMode ? 'dark' : ''}>
      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Hero />
      <Products darkMode={darkMode} />
      <Benefits darkMode={darkMode} />
      <Footer />
    </main>
  );
}
