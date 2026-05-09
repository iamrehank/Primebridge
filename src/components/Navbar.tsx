import { Menu, UserCircle } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

export default function Navbar({ currentPage, setPage }: NavbarProps) {
  const navItems: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Services', value: 'services' },
    { label: 'About', value: 'about' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-outline-variant shadow-sm flex justify-between items-center px-6 py-4">
      <div className="flex items-center gap-4">
        <button className="p-1 hover:bg-surface-container-low rounded-md transition-colors">
          <Menu className="w-6 h-6 text-primary" />
        </button>
        <div 
          className="text-xl font-extrabold tracking-tighter text-primary cursor-pointer select-none"
          onClick={() => setPage('home')}
        >
          Primebridge
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <button
            key={item.value}
            onClick={() => setPage(item.value)}
            className={`px-3 py-1 rounded transition-colors font-semibold ${
              currentPage === item.value
                ? 'text-secondary bg-surface-container-low'
                : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <button className="p-1 hover:bg-surface-container-low rounded-full transition-colors active:scale-95">
          <UserCircle className="w-6 h-6 text-primary" />
        </button>
      </div>
    </header>
  );
}
