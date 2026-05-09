import { motion } from 'motion/react';
import { Headset, Database, Landmark, BarChart3, Target, Megaphone, LineChart } from 'lucide-react';

export default function Services() {
  const bpoServices = [
    {
      title: 'Customer Support',
      desc: 'Multichannel support architecture utilizing high-touch professional communication and rapid resolution protocols for premium brands.',
      icon: Headset
    },
    {
      title: 'Data Entry',
      desc: 'High-precision data processing with 99.9% accuracy benchmarks, ensuring your institutional intelligence remains clean and actionable.',
      icon: Database
    },
    {
      title: 'Back Office',
      desc: 'Comprehensive administrative support systems including document management, financial reconciliation, and logistics coordination.',
      icon: Landmark
    }
  ];

  const marketingServices = [
    {
      title: 'Digital Strategy',
      desc: 'Strategic roadmapping for digital transformation, leveraging data analytics to position your brand at the industry vanguard.',
      icon: BarChart3
    },
    {
      title: 'Lead Generation',
      desc: 'High-intent acquisition funnels designed to identify and nurture professional prospects within complex B2B ecosystems.',
      icon: Target
    },
    {
      title: 'Brand Positioning',
      desc: 'Developing a distinctive corporate voice and visual identity that communicates authority and builds institutional trust.',
      icon: Megaphone
    },
    {
      title: 'Market Intelligence',
      desc: 'Real-time monitoring of competitive landscapes and consumer shifts to ensure your business stays ahead of market volatility.',
      icon: LineChart
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-32"
    >
      <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <div className="inline-block px-4 py-1 mb-6 bg-secondary-container/20 text-on-secondary-container rounded-full font-bold uppercase tracking-widest text-[10px]">
          OUR EXPERTISE
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold text-primary mb-6">Strategic Solutions for Modern Enterprise</h2>
        <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Primebridge delivers high-fidelity business process outsourcing and digital marketing strategies tailored for institutional growth and operational excellence.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-3xl font-bold text-primary">Core BPO Services</h3>
          <div className="h-[1px] flex-grow mx-8 bg-outline-variant hidden md:block"></div>
          <span className="text-secondary font-bold tracking-widest uppercase text-[12px]">Operational Excellence</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bpoServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group border border-outline-variant/30">
                <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-2xl font-bold text-primary mb-3">{service.title}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative py-24 mb-24 overflow-hidden -mx-6 md:mx-auto max-w-7xl md:rounded-3xl">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu-Ae4FMn3Q3TDVqHbUgY3hzUd3oPLkOIAKg1PQmD7-M_k5JtrFoRsnZjI2qFQRhYQzZVL8RsaI-FRWu4hC42YW7sAoWUEd822XEx5oN-Y_lJZ8Lic0RvJxG3-yQJd_gJ_g-aitFDggCew3njnS7HXrJKyxYQ5br52MEJEUQRKnlHgGOGI-pYyKi0raE1N4AIJJoxaR0NePi2aNI7hWEzlUiTl9El5cWR1IVnXyFrs00Jdss_ae9BVUMtveOX-aMvUE1AkcCmVzLtM" 
            alt="Corporate BG" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="bg-white/95 backdrop-blur-xl p-12 md:p-16 rounded-2xl shadow-2xl max-w-4xl border border-white/20 mx-auto lg:mx-0">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold text-primary">Marketing & Strategy</h3>
              <span className="text-secondary font-bold uppercase tracking-widest text-[12px] hidden sm:block">Growth Intelligence</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {marketingServices.map((service, i) => {
                const Icon = service.icon;
                return (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <Icon className="w-10 h-10 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-2">{service.title}</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-12 pt-8 border-t border-outline-variant/30 flex justify-center md:justify-start">
              <button className="bg-secondary-container hover:bg-secondary-fixed text-on-secondary-container font-bold px-8 py-3 rounded-lg shadow-lg transition-all active:scale-95">
                Request a Strategic Audit
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-24">
        <h3 className="text-3xl font-bold text-primary text-center mb-16">Global Network, Local Presence</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 grayscale opacity-40">
           {['Global Bank', 'Tech Ventures', 'Nordic Logistics', 'Asia Capital'].map((brand, i) => (
             <div key={i} className="flex items-center justify-center p-8 bg-surface-container-low rounded-xl border border-outline-variant/20 hover:bg-white hover:shadow-sm hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer">
                <span className="text-xs font-bold text-on-surface uppercase tracking-widest text-center">{brand}</span>
             </div>
           ))}
        </div>
      </section>
    </motion.div>
  );
}
