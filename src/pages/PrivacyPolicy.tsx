import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

const sections = [
  {
    title: '1. Information We Collect',
    content: [
      'Personal identification information (name, email address, phone number, job title, company name) provided voluntarily through our contact forms, consultation requests, or direct correspondence.',
      'Technical data including IP address, browser type and version, time zone, operating system, and platform collected automatically when you visit our website.',
      'Usage data such as pages visited, time spent on pages, links clicked, and referring URLs collected via analytics tools to help us improve our services.',
      'Communication records including emails, messages, and any other correspondence you send to us.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      'To respond to your inquiries, consultation requests, and provide the services you have requested.',
      'To send administrative information such as updates to our terms, conditions, and policies.',
      'To send marketing and promotional communications where you have opted in or where we have a legitimate interest to do so. You may opt out at any time.',
      'To analyze website usage and improve our website, services, and user experience.',
      'To comply with legal obligations and enforce our agreements.',
      'To protect the rights, property, or safety of Primebridge, our clients, or others.',
    ],
  },
  {
    title: '3. Legal Basis for Processing',
    content: [
      'Consent: Where you have given clear consent for us to process your personal data for a specific purpose.',
      'Contract: Where processing is necessary for the performance of a contract with you or to take steps at your request before entering into a contract.',
      'Legitimate Interests: Where processing is necessary for our legitimate interests or those of a third party, provided those interests are not overridden by your rights.',
      'Legal Obligation: Where processing is necessary to comply with a legal obligation to which we are subject.',
    ],
  },
  {
    title: '4. Data Sharing & Disclosure',
    content: [
      'We do not sell, trade, or rent your personal information to third parties.',
      'We may share your data with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.',
      'We may disclose your information if required by law, court order, or governmental authority, or to protect the rights and safety of Primebridge and its clients.',
      'In the event of a merger, acquisition, or sale of assets, your data may be transferred as part of that transaction. We will notify you before your data is transferred and becomes subject to a different privacy policy.',
    ],
  },
  {
    title: '5. Data Retention',
    content: [
      'We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including satisfying any legal, accounting, or reporting requirements.',
      'To determine the appropriate retention period, we consider the amount, nature, and sensitivity of the data, the potential risk of harm from unauthorized use or disclosure, and applicable legal requirements.',
      'When your data is no longer required, we will securely delete or anonymize it.',
    ],
  },
  {
    title: '6. Data Security',
    content: [
      'We implement appropriate technical and organizational security measures to protect your personal data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.',
      'These measures include encryption of data in transit and at rest, access controls, regular security assessments, and employee training on data protection.',
      'While we strive to protect your personal data, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.',
    ],
  },
  {
    title: '7. Your Rights',
    content: [
      'Right of Access: You have the right to request a copy of the personal data we hold about you.',
      'Right to Rectification: You have the right to request correction of inaccurate or incomplete personal data.',
      'Right to Erasure: You have the right to request deletion of your personal data under certain circumstances.',
      'Right to Restrict Processing: You have the right to request that we restrict the processing of your personal data in certain circumstances.',
      'Right to Data Portability: You have the right to receive your personal data in a structured, commonly used, machine-readable format.',
      'Right to Object: You have the right to object to the processing of your personal data where we rely on legitimate interests as the legal basis.',
      'To exercise any of these rights, please contact us at privacy@primebridgesolutions.com.',
    ],
  },
  {
    title: '8. Cookies',
    content: [
      'Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from.',
      'Essential cookies are necessary for the website to function and cannot be switched off. Analytical cookies help us understand how visitors interact with our website.',
      'You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.',
    ],
  },
  {
    title: '9. Third-Party Links',
    content: [
      'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites.',
      'We encourage you to review the privacy policies of any third-party sites you visit.',
    ],
  },
  {
    title: '10. Changes to This Policy',
    content: [
      'We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons.',
      'We will notify you of any material changes by posting the new policy on this page with an updated effective date. We encourage you to review this policy periodically.',
    ],
  },
  {
    title: '11. Contact Us',
    content: [
      'If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Data Protection Officer:',
      'Email: privacy@primebridgesolutions.com',
      'Registered Address: 8 The Green, Ste A, Dover, DE 19901, USA',
      'Registered Agent: A Registered Agent, Inc. — Phone: +1 (302) 288-0670',
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-32"
    >
      <Helmet>
        <title>Privacy Policy | Primebridge Marketing Solutions</title>
        <meta name="description" content="Read Primebridge Marketing Solutions' Privacy Policy to understand how we collect, use, and protect your personal information." />
        <meta property="og:title" content="Privacy Policy | Primebridge Marketing Solutions" />
        <meta property="og:url" content="https://www.primebridgesolutions.com/privacy-policy" />
        <link rel="canonical" href="https://www.primebridgesolutions.com/privacy-policy" />
      </Helmet>

      {/* Header */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-secondary-fixed text-xs font-bold uppercase tracking-widest mb-4 block">Legal</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Privacy Policy</h1>
          <p className="text-primary-fixed/70 text-sm">Effective Date: April 23, 2025 &nbsp;·&nbsp; Last Updated: April 23, 2025</p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-b border-outline-variant">
        <p className="text-on-surface-variant leading-relaxed">
          Primebridge Marketing Solutions LLC — a Delaware Limited Liability Company (File No. 10171932), formed on April 23, 2025 ("Primebridge", "we", "us", or "our") — is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services. Please read this policy carefully. If you disagree with its terms, please discontinue use of our site.
        </p>
      </section>

      {/* Sections */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-bold text-on-surface mb-4">{section.title}</h2>
              <ul className="space-y-3">
                {section.content.map((item, i) => (
                  <li key={i} className="flex gap-3 text-on-surface-variant text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
