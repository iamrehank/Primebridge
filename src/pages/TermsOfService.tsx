import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: [
      'By accessing or using the Primebridge Marketing Solutions LLC website and services, you confirm that you are at least 18 years of age, have read and understood these Terms, and agree to be bound by them.',
      'If you are using our services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.',
      'We reserve the right to update these Terms at any time. Continued use of our services after changes constitutes acceptance of the revised Terms.',
    ],
  },
  {
    title: '2. Description of Services',
    content: [
      'Primebridge provides business process outsourcing (BPO) services, digital marketing strategy, lead generation, brand positioning, and related consulting services to enterprise clients.',
      'The specific scope, deliverables, timelines, and fees for services are defined in individual Service Agreements or Statements of Work executed between Primebridge and the client.',
      'We reserve the right to modify, suspend, or discontinue any aspect of our services at any time with reasonable notice to affected clients.',
    ],
  },
  {
    title: '3. Client Obligations',
    content: [
      'You agree to provide accurate, current, and complete information as required for the delivery of services.',
      'You are responsible for maintaining the confidentiality of any account credentials and for all activities that occur under your account.',
      'You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair our services or interfere with other parties\' use of our services.',
      'You agree to comply with all applicable laws and regulations in connection with your use of our services.',
    ],
  },
  {
    title: '4. Intellectual Property',
    content: [
      'All content on the Primebridge website, including text, graphics, logos, images, and software, is the property of Primebridge Marketing Solutions LLC and is protected by applicable intellectual property laws.',
      'Work product created specifically for a client under a Service Agreement becomes the property of the client upon full payment, unless otherwise specified in the agreement.',
      'Primebridge retains ownership of all pre-existing intellectual property, tools, methodologies, and frameworks used in delivering services.',
      'You may not reproduce, distribute, modify, or create derivative works from our proprietary content without express written permission.',
    ],
  },
  {
    title: '5. Confidentiality',
    content: [
      'Both parties agree to maintain the confidentiality of any proprietary or sensitive information disclosed during the course of the business relationship.',
      'Confidential information shall not be disclosed to third parties without prior written consent, except as required by law or as necessary to deliver the agreed services.',
      'These confidentiality obligations survive the termination of any service agreement for a period of three (3) years.',
    ],
  },
  {
    title: '6. Payment Terms',
    content: [
      'Fees for services are as specified in the applicable Service Agreement. All fees are in US Dollars unless otherwise stated.',
      'Invoices are due within thirty (30) days of the invoice date unless otherwise agreed in writing.',
      'Late payments may be subject to interest charges at a rate of 1.5% per month or the maximum rate permitted by law, whichever is lower.',
      'Primebridge reserves the right to suspend services for accounts with overdue balances after providing reasonable notice.',
    ],
  },
  {
    title: '7. Limitation of Liability',
    content: [
      'To the maximum extent permitted by applicable law, Primebridge shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.',
      'Our total liability to you for any claims arising under these Terms shall not exceed the total fees paid by you to Primebridge in the three (3) months preceding the claim.',
      'Some jurisdictions do not allow the exclusion of certain warranties or limitation of liability, so some of the above limitations may not apply to you.',
    ],
  },
  {
    title: '8. Indemnification',
    content: [
      'You agree to indemnify, defend, and hold harmless Primebridge, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from your use of our services or violation of these Terms.',
      'Primebridge will notify you promptly of any such claim and cooperate with you in the defense, at your expense.',
    ],
  },
  {
    title: '9. Termination',
    content: [
      'Either party may terminate a Service Agreement with thirty (30) days written notice, unless a different notice period is specified in the agreement.',
      'Primebridge may terminate services immediately if you breach these Terms or any Service Agreement and fail to cure such breach within ten (10) days of written notice.',
      'Upon termination, all outstanding fees become immediately due and payable. Provisions that by their nature should survive termination shall do so.',
    ],
  },
  {
    title: '10. Governing Law & Dispute Resolution',
    content: [
      'These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions.',
      'Any disputes arising from these Terms or our services shall first be attempted to be resolved through good-faith negotiation between the parties.',
      'If negotiation fails, disputes shall be resolved through binding arbitration in Dover, Delaware, in accordance with the rules of the American Arbitration Association.',
      'Notwithstanding the above, either party may seek injunctive or other equitable relief in any court of competent jurisdiction in the State of Delaware.',
    ],
  },
  {
    title: '11. Contact Information',
    content: [
      'For questions about these Terms of Service, please contact our legal team:',
      'Email: legal@primebridgesolutions.com',
      'Registered Address: 8 The Green, Ste A, Dover, DE 19901, USA',
      'Registered Agent: A Registered Agent, Inc. — Phone: +1 (302) 288-0670',
    ],
  },
];

export default function TermsOfService() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-32"
    >
      <Helmet>
        <title>Terms of Service | Primebridge Marketing Solutions</title>
        <meta name="description" content="Review Primebridge Marketing Solutions' Terms of Service governing the use of our website and BPO and marketing services." />
        <meta property="og:title" content="Terms of Service | Primebridge Marketing Solutions" />
        <meta property="og:url" content="https://www.primebridgesolutions.com/terms-of-service" />
        <link rel="canonical" href="https://www.primebridgesolutions.com/terms-of-service" />
      </Helmet>

      {/* Header */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-secondary-fixed text-xs font-bold uppercase tracking-widest mb-4 block">Legal</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Terms of Service</h1>
          <p className="text-primary-fixed/70 text-sm">Effective Date: April 23, 2025 &nbsp;·&nbsp; Last Updated: April 23, 2025</p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-b border-outline-variant">
        <p className="text-on-surface-variant leading-relaxed">
          These Terms of Service ("Terms") govern your access to and use of the website and services provided by Primebridge Marketing Solutions LLC — a Delaware Limited Liability Company (File No. 10171932), formed on April 23, 2025 ("Primebridge", "we", "us", or "our"). By accessing our website or engaging our services, you agree to be bound by these Terms. Please read them carefully before proceeding.
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
