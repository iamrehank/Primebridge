import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-32"
    >
      <Helmet>
        <title>Contact Us | Primebridge Marketing Solutions</title>
        <meta name="description" content="Get in touch with Primebridge's expert team. Request a consultation for BPO transformation, digital strategy, or operational excellence solutions." />
        <meta property="og:title" content="Contact Us | Primebridge Marketing Solutions" />
        <meta property="og:description" content="Connect with Primebridge experts for sophisticated, data-driven solutions tailored to your organization's unique challenges." />
        <meta property="og:url" content="https://www.primebridgemkt.com/contact" />
        <link rel="canonical" href="https://www.primebridgemkt.com/contact" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="mb-24 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <span className="text-xs font-bold text-on-primary-container bg-primary-fixed px-3 py-1 rounded uppercase mb-4 inline-block tracking-widest">Connect with Experts</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6">Request a Consultation</h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
              Ready to elevate your institutional strategy? Our partners are standing by to provide sophisticated, data-driven solutions tailored to your organization's unique challenges.
            </p>
          </div>
          <div className="flex-1 w-full h-[400px] rounded-2xl overflow-hidden shadow-xl border border-outline-variant">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDInBiONdooco2MTgmv1zma69HFt6IOLq6H6wtF65vdK1POCviS6-QL8-h_o1LNp_A42yfdDFNksgoWQ2uYfQheQFZNyKzmRownYvc5959N3KcMJS6Be6YFOXorqWBNY4s8NrlZq-hFlvJIsjNhkRBLNgIpylbN4OIVZWIjhd1VE9hYnSokL9rxKpVbQalQsSwsjBT99UH1spbLTv_SBBp-iv8I-ZpTX1gA2SHjxYCeDyEGXnXCDrtl2Dfu3L0868QXuOvP6F6GkmvS" 
              alt="Conference Room" 
            />
          </div>
        </section>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form Section */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 md:p-12 rounded-3xl shadow-sm border border-outline-variant">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-primary block uppercase tracking-[0.2em]">Name</label>
                    <input 
                      className="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" 
                      placeholder="John Doe" 
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-primary block uppercase tracking-[0.2em]">Email Address</label>
                    <input 
                      className="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" 
                      placeholder="john@company.com" 
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-primary block uppercase tracking-[0.2em]">Service Interest</label>
                  <select className="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all appearance-none cursor-pointer">
                    <option>Strategic Consultancy</option>
                    <option>BPO Transformation</option>
                    <option>Digital Integration</option>
                    <option>Operational Excellence</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-primary block uppercase tracking-[0.2em]">Message</label>
                  <textarea 
                    className="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" 
                    placeholder="How can we help your business achieve its next milestone?" 
                    rows={5}
                  ></textarea>
                </div>
                <button className="w-full md:w-auto bg-primary text-white px-10 py-4 rounded-lg font-bold shadow-lg hover:bg-on-surface transition-all duration-200" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Info Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            {/* Office Card */}
            <div className="bg-surface-container-low p-8 rounded-3xl space-y-6 border border-outline-variant">
              <h3 className="text-2xl font-bold text-primary">Registered Office</h3>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-secondary mt-1" />
                <div>
                  <p className="text-[10px] font-bold text-primary mb-1 uppercase tracking-[0.2em]">Registered Address</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    8 The Green, Ste A<br/>
                    Dover, DE 19901, USA
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-secondary mt-1" />
                <div>
                  <p className="text-[10px] font-bold text-primary mb-1 uppercase tracking-[0.2em]">Registered Agent Phone</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">+1 (302) 288-0670</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-secondary mt-1" />
                <div>
                  <p className="text-[10px] font-bold text-primary mb-1 uppercase tracking-[0.2em]">Direct Email</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">inquiry@primebridgesolutions.com</p>
                </div>
              </div>
            </div>

            {/* Map/Visual Anchor */}
            <div className="relative h-[250px] rounded-3xl overflow-hidden shadow-inner border border-outline-variant group">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7g6IVu12nzi-wnzx1lLIvyfHg4rlEqdYTKS74nU-O2o9-fF0zFFkNDxPDGp6VbZB9OTfCRRDR2gK5UJNKimourg63d7sdzIPgQNmh8b5B3lOenKkLV4wB8rjYgPvW3WU-e_X6kr4NjENigD0FzL3qzGjHKSAdLxXiJ2hTwfUg64yQVdE271_XF2mxiWR1Lrh-6h7uc5L29zXELk3r6P_xyRRLDp8HyVwReIiNzpA_mRw9--IFmRxVXJ0Wc80BQf0IWgC9cgjIngR2" 
                alt="NYC Scyscraper" 
              />
              <div className="absolute inset-0 bg-primary/10 backdrop-grayscale-[0.2] group-hover:backdrop-grayscale-0 transition-all duration-700"></div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-sm border border-outline-variant">
                <p className="text-xs font-bold text-primary flex items-center gap-2">
                  <Globe className="w-4 h-4" /> 
               
                </p>
              </div>
            </div>

            {/* Trust Tags */}
            <div className="flex flex-wrap gap-3">
              <span className="bg-surface-container-high text-on-surface px-4 py-2 rounded-full text-[10px] font-bold uppercase border border-outline-variant tracking-wider">24/7 Support</span>
              <span className="bg-surface-container-high text-on-surface px-4 py-2 rounded-full text-[10px] font-bold uppercase border border-outline-variant tracking-wider">Global Network</span>
              <span className="bg-surface-container-high text-on-surface px-4 py-2 rounded-full text-[10px] font-bold uppercase border border-outline-variant tracking-wider">Secure Portal</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
