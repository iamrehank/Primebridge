import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Headset, UserCheck, MousePointerClick, Target, Share2, ArrowDownToLine, MessageSquare, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Headset,
    title: 'Call Centre Support',
    desc: 'Primebridge is a full-service Sales and Support provider catering to all our US-based clients. We deliver specialized services and sustainable business solutions, making outsourcing the ideal choice due to its cost-effectiveness and focus on digital services that attract premium and genuine customers nationwide.',
    detail: 'Our clientele is diverse, ranging from Fortune 500 companies to top-class service providers, all of whom boast an overall ranking of above 9 out of 10. We offer the best deals compared to our competitive counterparts, along with exclusive limited-time offers. Our experienced team excels in driving calls towards your business, ensuring optimal results.',
  },
  {
    icon: UserCheck,
    title: 'Customer Service',
    desc: 'Primebridge offers the best customer service to all our clients, as compliance in this industry is key and a valuable asset. We commit to maintaining a market quality of 90% and above with a dedicated team providing real-time feedback to all support staff.',
    detail: 'We prioritize exceptional customer service as we understand how important it is for any company to understand their customers\' requirements. The customer\'s journey is essential to us, and their success is our overall organization\'s success.',
  },
  {
    icon: MousePointerClick,
    title: 'Pay Per Click',
    desc: 'Our clients leverage top-notch SEO strategies alongside Google, Facebook, and Instagram marketing to captivate the attention of potential customers seeking services. We play a pivotal role in providing valuable data insights, expert advice, and facilitating product sales.',
    detail: 'By employing robust SEO techniques and strategically advertising on Google, Facebook, and Instagram, our clients successfully engage their target audience. We furnish data-driven insights, expert guidance, and facilitate the sales process, empowering our clients to flourish in the digital landscape.',
  },
  {
    icon: Target,
    title: 'Lead Generation',
    desc: 'All our clients operate call centers within the US markets, allowing us to generate leads and seamlessly transfer them to their respective US-based teams. Leads are the lifeblood of any business — driving growth and prosperity.',
    detail: 'Acquiring the right leads translates to increased potential sales, higher profits, and enhanced customer loyalty. Through years of dedicated effort, we have cultivated the knowledge and experience required to cater to diverse industries. We serve as an indispensable extension to some of the world\'s largest and most successful companies.',
  },
  {
    icon: Share2,
    title: 'Social Media',
    desc: 'Social media platforms facilitate the creation of a community of fans and followers who perceive your brand as more than just a business entity. Unlike traditional channels, social media enables two-way conversation — building trust that converts.',
    detail: 'By integrating social media into marketing efforts, businesses can maintain relevance, adapt to changing trends, and stay closely connected with their audience in an ever-evolving digital landscape. It has become an indispensable tool for modern businesses seeking to thrive in a highly competitive market.',
  },
  {
    icon: ArrowDownToLine,
    title: 'Inbound Traffic',
    desc: 'The traffic built through social media and marketing is generated and integrated by our inbound channel. Inbound traffic is always easier and more effective than outbound cold calling, delivering higher-quality customer interactions.',
    detail: 'With Inbound Traffic, you can connect with your target audience in a non-intrusive manner, allowing them to reach out to you on their own terms. This customer-centric approach not only boosts conversion rates but also enhances your brand\'s reputation as a responsive and customer-oriented business.',
  },
  {
    icon: MessageSquare,
    title: 'SMS Campaign',
    desc: 'Primebridge continuously enhances its SMS marketing platform, offering a wide range of tools including unsubscribe management, autoresponders, and fresh database updates for precise targeting. Cost-effective text marketing with cutting-edge techniques.',
    detail: 'Text marketing proves consistently cost-effective compared to other marketing options. Through strong partnerships with direct response marketing leaders, we assist in crafting engaging text messaging campaigns from start to finish. Whether you need guidance launching your plan or a comprehensive mobile strategy, we deliver exceptional results.',
  },
  {
    icon: Mail,
    title: 'Direct Mail / Postal Verification',
    desc: 'We construct our databases using a customer-centric relational model, enabling us to harness data effectively for optimizing marketing performance. This establishes a secure, high-speed processing environment with a single point of entry for all marketing information.',
    detail: 'Our meticulous approach to direct mail and postal verification guarantees that your marketing endeavors reach the intended audience precisely when it matters most. Through thorough validation of postal information, we minimize errors and ensure accurate delivery, driving improved outcomes and maximizing return on your marketing investments.',
  },
];

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-32"
    >
      <Helmet>
        <title>Our Services | Primebridge Marketing Solutions</title>
        <meta name="description" content="Explore Primebridge's full suite of services: Call Centre Support, Customer Service, Pay Per Click, Lead Generation, Social Media, Inbound Traffic, SMS Campaign, and Direct Mail." />
        <meta property="og:title" content="Our Services | Primebridge Marketing Solutions" />
        <meta property="og:description" content="Full-service BPO and digital marketing solutions tailored for institutional growth and operational excellence." />
        <meta property="og:url" content="https://www.primebridgemkt.com/services" />
        <link rel="canonical" href="https://www.primebridgemkt.com/services" />
      </Helmet>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <div className="inline-block px-4 py-1 mb-6 bg-secondary-container/20 text-on-secondary-container rounded-full font-bold uppercase tracking-widest text-[10px]">
          OUR EXPERTISE
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6">Strategic Solutions for Modern Enterprise</h1>
        <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Primebridge delivers high-fidelity business process outsourcing and digital marketing strategies tailored for institutional growth and operational excellence.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group border border-outline-variant/30 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h2 className="text-xl font-bold text-primary">{service.title}</h2>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed">{service.desc}</p>
                <p className="text-on-surface-variant/70 text-sm leading-relaxed">{service.detail}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-primary rounded-3xl p-12 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Scale Your Business?</h2>
          <p className="text-primary-fixed/70 max-w-xl mx-auto mb-8 leading-relaxed">
            Get in touch with our team to explore how Primebridge can build your customer base and drive measurable results.
          </p>
          <Link to="/contact" className="inline-block bg-secondary-container text-on-secondary-container px-10 py-4 rounded-lg font-bold shadow-lg hover:brightness-110 transition-all">
            Request a Strategic Audit
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
