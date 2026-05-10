import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Handshake, Shield, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const partners = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB-XwN-utj7pYkD3n0Z7JZuuEnyjtiqjH-B1Rg3wTsh6uMMaHS7ChT3dRoHzJG7PpHs92fxxhQV_Ewdgnr8-mTbed_IfdKmJdNJBMDcLXF0xclPijIbbpoi7Emxmn2E-DTzAHU1JU_b6o30iYagsUacsjrgf58G0ir6fdVypMap4ZwHpTbIzjDC8Uk9vVOv099ZiKmrRdoLKLPzDgvAYMuAXAFm5p_tWqapYdpdm7bywXfeoVnETHJSYjJo8uV6dr5yvhcFh_X8TDSn",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDAFh1I5qcSitWVAajw87LAePwbx1dJ0zNHqmoRXbHCw7KUe4n5-9LG_IL6Qtj4YoKQyRzgLiDd3N5QegFpSTVcz_yAwwALfCHdjKxp6F2apDc7iqtIKs3E0ErL59k5HK4ti4QgWblUQHgVVmY4d6Ht3bOKpr52gdQ__ZRF9c1Y5-1-OzRNJ7ucTF3n0R7PCWXRaHGA0vzntgdO1Xpo6rN3R7Yy9ykHtgoybxHXCkyordJwJsHVse2aJBuBVXd7adnppc0ZJl6C6Eg-",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD-eIV1-nlq64o5ESdhvswaafsmuegxHoMiOxPpsnJ1xZWKdbrpGPylz4UPr7LKRcAtsaFwNsD0zE4OiHukb0K9wjx_pR_QfB6wTXqxsGX9boJj_GIArt52uUi-4Xag_Kh3QpqvhFV3nHGSkB-IfA0FM2aY3FOdCBNfPXRQQISqqAGTnlmsdc6SV19imLMoeM-zqfbugDfL9e7AEYbK2yElWDlh050ynQQGeNjXvDZ6NXmXHUi064UFqScUGqNWeyJH26qasq14nbMa",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD_AfVLOlzYqUj5ntD9c3rVagsszskEBs_IRT3S0X9eBGITQiaY6RkxUspZzIB20XNcGvAnIkjMCFD-n2k5oQ8wUqaTnkP604V6IDDt1BvQKySffnLHEjkTp538du79hjmBlSTO22geRRViiCkxWoS8mk3gr12mTTB_9b6yYD322cvPad2ULuH-VIlrvQufCLPvMUptKsIHgZmPS_8KHmtOHMoEzgxAouKWE43VPMBttzU64POMZ-DF81lnzXqQghf_rraOapD3CIVC"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col"
    >
      <Helmet>
        <title>Primebridge Marketing Solutions | Elite BPO & Marketing</title>
        <meta name="description" content="Primebridge empowers global enterprises through strategic process outsourcing, high-performance marketing, and operational excellence." />
        <meta property="og:title" content="Primebridge Marketing Solutions | Elite BPO & Marketing" />
        <meta property="og:description" content="Primebridge empowers global enterprises through strategic process outsourcing, high-performance marketing, and operational excellence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.primebridgemkt.com/" />
        <link rel="canonical" href="https://www.primebridgemkt.com/" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden px-6 md:px-0">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover brightness-[0.7]" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbsUoeUpbrfbVFSGhGcm4NBqYCWUtnQOS9SkkuHK0IZqILH4AMxGCQ6ARskTQb8CKAC8ZyVvtfcaIU1MJFB-MoFv2untll8z6SRBTbKivxFe5oGUxzNtBui_ivsIb0ukb6Q9YY0nHSHugzj19lk7brsSE65p0Zlok07u5RGHYRewIVogEtYXapbghZIo38Xz8Kxdb0SP4-NyttXlgHK8tDon01KH7j8p6WvVIqJWOizYtXA0OvM_Cjl_mXCJ0HI2tg1Ow3jgJeQAh5" 
            alt="Corporate Boardroom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/60 to-transparent"></div>
        </div>
        <div className="container mx-auto relative z-10 max-w-7xl px-6">
          <div className="max-w-3xl">
       
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
            >
              Bridging Business Gaps with <span className="text-secondary-fixed">Elite BPO Solutions.</span>
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-primary-fixed mb-10 max-w-2xl"
            >
              Primebridge Marketing Solutions LLC empowers global enterprises through strategic process outsourcing, high-performance marketing, and operational excellence.
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded font-bold shadow-lg hover:brightness-110 transition-all">Get a Quote</Link>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-all backdrop-blur-sm">Our Expertise</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Leaders Choose Primebridge */}
      <section className="py-24 container mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <span className="bg-secondary/10 text-secondary px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest mb-4 inline-block">The Advantage</span>
          <h2 className="text-3xl md:text-5xl font-bold text-on-surface">Why Leaders Choose Primebridge</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 group relative overflow-hidden rounded-xl border border-outline-variant bg-white p-12 flex flex-col justify-end min-h-[400px]">
             <div className="absolute top-0 right-0 p-8">
               <Handshake className="w-16 h-16 text-secondary opacity-20 group-hover:opacity-100 transition-opacity" />
             </div>
             <div className="relative z-10">
               <h3 className="text-2xl md:text-3xl font-bold text-on-surface mb-4">Strategic Connection & Synergy</h3>
               <p className="text-on-surface-variant max-w-lg leading-relaxed">
                 We don't just provide services; we integrate with your vision. Our bridge model ensures seamless communication flows between your core strategy and our execution teams.
               </p>
             </div>
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvepzZNWVbgscpWQ-CCMqfPCOQg4Qx-AolH28wSPoS09fxTztTJwBbOelHMB8w0mpqhP5ZgC0dbeeAQNteoPvBL7FUz6XQAfMZAt-pljbgGzHtUqVvatVEvawBqOfGEJ3VQbfXhXJGKHZ8ekln7s83-OueG9ts1w1mNJ_-4lK0zRKBAUzZtAaxyUgvwhQye_RIgFRpS-nsnVY2Q1GQSujbmmoiB4vTKvjK4GwRvcV3eGQ8BcTYFDuwHoYxDUZwg9-aT3QZwuDQbCk1" alt="Synergy" className="absolute inset-0 w-full h-full object-cover opacity-5 group-hover:opacity-10 transition-opacity" />
          </div>
          
          <div className="md:col-span-4 bg-inverse-surface rounded-xl p-10 flex flex-col justify-between text-inverse-on-surface border border-outline">
            <div className="bg-primary-container w-14 h-14 rounded-lg flex items-center justify-center mb-8">
              <Shield className="w-8 h-8 text-secondary-fixed" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Unwavering Strength</h3>
              <p className="text-surface-variant/80">Built on institutional-grade security and robust infrastructure that never compromises.</p>
            </div>
          </div>

          <div className="md:col-span-4 bg-surface-container-low rounded-xl p-10 flex flex-col justify-between border border-outline-variant group hover:border-secondary transition-colors">
            <div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center shadow-sm mb-8">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">Scalability</h4>
              <h3 className="text-2xl font-bold text-on-surface">Dynamic Growth</h3>
            </div>
          </div>

          <div className="md:col-span-8 glass-card rounded-xl p-10 border border-outline-variant flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 hidden sm:block">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8LIyxJE5Xke194ut5xexVCLemcZdf-zjTF_ybTxxXfsOv1G-c9H90TT38RL7WpRpZGsYdBDC3cJX5aPN0iY4TuWz2FNQR2zurt4C_wKo7ZNWgWoLzZUaE9VItB9hcUDGgd0zLz8hHjfv0j7Ex3zEarSfF7Xke9O0vFQdl-TjVoixB4xn4EAUsdpgSR8ToMRs6dGLDzUXQWhLzWCsljp5qi12FhI0Vuu3IU3sjKszD4FF-Yd1t5o2byaZmTo12z33JJ6OylZ3h5eiK" 
                alt="Expert Talent" 
                className="w-32 h-32 rounded-full object-cover border-4 border-surface-container-lowest shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-on-surface mb-2">Expert Talent Pool</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Access a curated network of industry specialists across four continents, trained in the Primebridge standard of excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      {/* <section className="bg-primary py-24 text-white overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <span className="text-secondary-fixed font-bold tracking-widest uppercase mb-4 block text-xs">International Footprint</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Empowering Markets Across the Globe.</h2>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-extrabold text-white mb-2">24/7</div>
                  <p className="text-primary-fixed/60 text-sm">Follow-the-Sun Support Operations</p>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-white mb-2">15+</div>
                  <p className="text-primary-fixed/60 text-sm">Strategic Hub Locations</p>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-white mb-2">99.9%</div>
                  <p className="text-primary-fixed/60 text-sm">Operational Uptime SLA</p>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-white mb-2">12M+</div>
                  <p className="text-primary-fixed/60 text-sm">Annual Customer Interactions</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  className="w-full h-[450px] object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRt6Hwii8_7qd6T6TH5TkEXyIyyZc9_q_ObDp78x54lWarpZ3RBGBrPUnEzZTkVDQjBxYktPIVRURuANtZEf0S6vm0_iaVxE1r2q_YWFh4N7oCbBDoIbD-cPx83Zp5cTC3ZUwj7Wzq1EwABN6_i6PHt9RvKTLdZil_ArXKPbl9rCIlXpDLtRLEi9GYGymtwcez8QrEdb14apam97RwN_ZKtq9K-eRAH3a5s82w_iyB3ZArYvfhkO5tqt9ONhEM0SRZbUza3OsBOvjP" 
                  alt="Global Map" 
                />
                <div className="absolute inset-0 bg-secondary/5 mix-blend-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Trust Indicators */}
      {/* <section className="py-24 bg-surface">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-12">Trusted by Fortune 500 Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 grayscale opacity-50">
            {partners.map((src, i) => (
              <img key={i} src={src} alt={`Partner ${i + 1}`} className="h-8 hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer" />
            ))}
          </div>
        </div>
      </section> */}
    </motion.div>
  );
}
