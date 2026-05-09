/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Page } from './types';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home key="home" />;
      case 'about':
        return <About key="about" />;
      case 'services':
        return <Services key="services" />;
      case 'contact':
        return <Contact key="contact" />;
      default:
        return <Home key="home" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-secondary-container selection:text-on-secondary-container">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      
      <main className="flex-grow pt-16">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      <Footer />
      <MobileNav currentPage={currentPage} setPage={setCurrentPage} />
    </div>
  );
}

