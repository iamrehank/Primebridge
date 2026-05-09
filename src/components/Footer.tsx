import { Share2, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 mb-16 md:mb-0">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img src="/images/logo.png" alt="Primebridge" className="h-13 w-auto brightness-0 invert" />
            </Link>
            <p className="text-primary-fixed/60 text-sm leading-relaxed">
              Redefining the standards of business process outsourcing through elite strategic partnerships.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold uppercase mb-6 text-secondary-fixed text-xs tracking-widest">Solutions</h4>
            <ul className="space-y-4 text-primary-fixed/80 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Marketing Ops</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customer Success</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Technical Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Analysis</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase mb-6 text-secondary-fixed text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-primary-fixed/80 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Insights</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase mb-6 text-secondary-fixed text-xs tracking-widest">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-all">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-primary-fixed/40 text-xs">
          <p>© 2025 Primebridge Marketing Solutions LLC. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
