import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Rocket, Eye, ShieldCheck, TrendingUp, Network } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: 'Integrity',
      desc: 'Unwavering commitment to ethical practices and transparent communication in every partnership we cultivate.',
      icon: ShieldCheck
    },
    {
      title: 'Growth',
      desc: 'Continuous pursuit of improvement and innovation for our clients, our employees, and our industry.',
      icon: TrendingUp
    },
    {
      title: 'Connection',
      desc: 'Building bridges between complex business needs and intelligent human solutions through collaborative synergy.',
      icon: Network
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-32"
    >
      <Helmet>
        <title>About Us | Primebridge Marketing Solutions</title>
        <meta name="description" content="Learn about Primebridge's mission, vision, core values, and heritage of delivering elite BPO and marketing solutions to global enterprises since 2018." />
        <meta property="og:title" content="About Us | Primebridge Marketing Solutions" />
        <meta property="og:description" content="Primebridge is a premier strategic partner specializing in marketing excellence and business process outsourcing." />
        <meta property="og:url" content="https://www.primebridgesolutions.com/about" />
        <link rel="canonical" href="https://www.primebridgesolutions.com/about" />
      </Helmet>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            <span className="inline-block px-3 py-1 mb-6 rounded-full bg-secondary-container/30 text-on-secondary-container text-xs font-bold uppercase tracking-wider">ABOUT OUR FIRM</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface mb-6 leading-tight">Redefining the standard of institutional trust.</h1>
            <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed">
              Primebridge is a premier strategic partner specializing in marketing excellence and business process outsourcing, dedicated to scaling enterprises through precision and expertise.
            </p>
          </div>
          <div className="md:col-span-6">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-primary/5">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuASKhrpt_z2JgOcwZ3666FutOwoKzlitTEimxIryad6XlM4yLgnUOI-4g9ztW4HPsL5c0g5njDVYiN38rSxFFpCEBV86ZU0z_cDnpQfjsSkeDtBoIhsyaCe_fnsP18QZDfQmzjx2PiD3vlWteOK4VSFhgsngyao02Z8mfrTHkP0QXtz5Nd9ft81yPoLSNtThboI71ngFrsXekbUl_Zpr-ngIkCYTC6oPdnTjVZ7TizEZFB44KE2xr3faaxYOxo1wL_jQ4M3s3KWJrOF" 
                alt="Modern Office" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-container-lowest p-12 rounded-2xl border border-outline-variant/30 flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center mb-8">
                  <Rocket className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold text-on-surface mb-6">Our Mission</h2>
                <p className="text-on-surface-variant leading-relaxed">
                  To connect ambitious businesses with sustainable growth by providing sophisticated marketing strategies and high-performance BPO solutions that empower long-term institutional success.
                </p>
              </div>
            </div>
            
            <div className="bg-primary-container p-12 rounded-2xl text-surface-container-lowest flex flex-col justify-between relative overflow-hidden">
               <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-8">
                  <Eye className="w-6 h-6 text-secondary-fixed" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="opacity-90 leading-relaxed">
                  To become the global benchmark for excellence in marketing and operational management, fostering a future where every business we touch achieves its maximum strategic potential.
                </p>
               </div>
               <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary opacity-10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-4">Core Values</h2>
          <div className="w-16 h-1 bg-secondary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <div key={i} className="group p-8 border border-outline-variant/30 rounded-2xl hover:bg-surface-container-lowest hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                <div className="mb-6 text-secondary group-hover:scale-110 transition-transform">
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-on-surface mb-4">{value.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {value.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* History */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-white rounded-3xl overflow-hidden border border-outline-variant shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-12 md:p-20">
              <h2 className="text-3xl md:text-5xl font-bold text-on-surface mb-12">Our Heritage of Quality</h2>
              <div className="space-y-12 relative before:content-[''] before:absolute before:left-3 before:top-4 before:bottom-4 before:w-[2px] before:bg-outline-variant/40">
                <div className="relative pl-12">
                  <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-secondary-fixed border-4 border-white z-10"></div>
                  <span className="text-xs font-bold text-secondary block mb-2 tracking-widest uppercase">April 2025 — FOUNDATION</span>
                  <h4 className="text-xl font-bold text-on-surface mb-2">Establishing Strategic Roots</h4>
                  <p className="text-on-surface-variant text-sm">Incorporated in Delaware (File No. 10171932) with a vision to revolutionize the BPO sector through high-end strategic consultancy and institutional trust.</p>
                </div>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-secondary-fixed border-4 border-white z-10"></div>
                  <span className="text-xs font-bold text-secondary block mb-2 tracking-widest uppercase">2025 — EXPANSION</span>
                  <h4 className="text-xl font-bold text-on-surface mb-2">Bridging Marketing and Operations</h4>
                  <p className="text-on-surface-variant text-sm">Launched our full-service digital marketing division, bridging the critical gap between front-end operations and scalable growth.</p>
                </div>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-primary border-4 border-white z-10 shadow-lg"></div>
                  <span className="text-xs font-bold text-primary block mb-2 tracking-widest uppercase">TODAY — INNOVATION</span>
                  <h4 className="text-xl font-bold text-on-surface mb-2">Global Excellence Benchmark</h4>
                  <p className="text-on-surface-variant text-sm">A trusted strategic partner for enterprises worldwide, committed to excellence and precision in every operational facet.</p>
                </div>
              </div>
            </div>
            <div className="relative min-h-[400px]">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP2XLzJS47_UOdNVVhRPFSQbWgCTBRLT4RxA05VKtQrXfvXxwKasqDKKj0K7z8Y0TqcOMeBt2o19qvW8Fca40-Teyqbovk0peBgR13pOLmCrtFGQl8MjPB9CTxyyIs2EfhWvfHniAZ2149nSztxvu-_A6rqsOdaOuGT0dOaTkhVbDvy2EGGEg3cUEKVmGBzdRzC5xYl2G-jhzHVYVQrst3pQb2DUdx0swbjw_w2Tb8sK0uzVuzJAtHvged_y82FJYplI1NenUTnFu4" 
                alt="Primebridge professional team" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <div className="bg-surface-container-low p-16 rounded-3xl border border-outline-variant/30">
          <h2 className="text-3xl md:text-5xl font-bold text-on-surface mb-6">Ready to Bridge the Gap to Success?</h2>
          <p className="text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
            Join the ranks of elite enterprises who have transformed their operations through Primebridge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-primary text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Schedule a Consultation
            </button>
            <button className="px-10 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all">
              View Our Services
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
