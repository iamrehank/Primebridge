import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  const linkClass = (path: string) =>
    `px-3 py-1 rounded transition-colors font-semibold ${
      pathname === path
        ? 'text-secondary bg-surface-container-low'
        : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary'
    }`;

  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-outline-variant shadow-sm">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden p-1 hover:bg-surface-container-low rounded-md transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
          </button>
          <Link to="/" className="select-none">
            <img src="/images/logo.png" alt="Primebridge" className="md:hidden h-13 w-auto" />
            <img src="/images/logo.png" alt="Primebridge" className="hidden md:block h-13 w-auto" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className={linkClass(item.path)}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-outline-variant bg-white/95 backdrop-blur-md px-6 py-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-colors ${
                pathname === item.path
                  ? 'text-secondary bg-surface-container-low'
                  : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
