import { Home, Briefcase, History, HelpCircle } from 'lucide-react';
import { Page } from '../types';

interface MobileNavProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

export default function MobileNav({ currentPage, setPage }: MobileNavProps) {
  const items = [
    { label: 'Home', value: 'home' as Page, icon: Home },
    { label: 'Services', value: 'services' as Page, icon: Briefcase },
    { label: 'About', value: 'about' as Page, icon: History },
    { label: 'Contact', value: 'contact' as Page, icon: HelpCircle },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 pb-safe bg-white/90 backdrop-blur-lg border-t border-outline-variant shadow-lg">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = currentPage === item.value;
        return (
          <button
            key={item.value}
            onClick={() => setPage(item.value)}
            className={`flex flex-col items-center justify-center transition-all px-3 py-1 rounded-lg ${
              isActive 
                ? 'text-secondary bg-secondary-container/20' 
                : 'text-on-surface-variant hover:text-secondary'
            }`}
          >
            <Icon className={`w-6 h-6 mb-0.5`} />
            <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
