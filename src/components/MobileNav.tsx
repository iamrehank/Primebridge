import { Home, Briefcase, History, HelpCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const items = [
  { label: 'Home', path: '/', icon: Home },
  { label: 'Services', path: '/services', icon: Briefcase },
  { label: 'About', path: '/about', icon: History },
  { label: 'Contact', path: '/contact', icon: HelpCircle },
];

export default function MobileNav() {
  const { pathname } = useLocation();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 pb-safe bg-white/90 backdrop-blur-lg border-t border-outline-variant shadow-lg">
      {items.map(({ label, path, icon: Icon }) => {
        const isActive = pathname === path;
        return (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center justify-center transition-all px-3 py-1 rounded-lg ${
              isActive
                ? 'text-secondary bg-secondary-container/20'
                : 'text-on-surface-variant hover:text-secondary'
            }`}
          >
            <Icon className="w-6 h-6 mb-0.5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
