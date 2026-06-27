import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-ivory">
      <div className="bg-navy-900 pt-28 pb-16">
        <div className="container-px">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-ivory-warm/60 hover:text-brass-400 text-sm font-mono tracking-wide transition-colors"
          >
            ← Back to home
          </Link>
          <p className="eyebrow mt-8 mb-4">Legal</p>
          <h1 className="font-display text-3xl md:text-5xl text-ivory-warm font-medium">
            Privacy Policy
          </h1>
          <p className="mt-4 text-ivory-warm/55 font-mono text-xs tracking-wide">
            Effective Date: June 25, 2026 &nbsp;·&nbsp; Last Updated: June 25, 2026
          </p>
        </div>
      </div>

      <div className="container-px py-16 max-w-4xl">
        <p className="text-slate-soft leading-relaxed mb-12">
          Prime Valor Consulting ("we," "us," or "our") is committed to protecting the privacy and
          security of the personal and corporate information you share with us. This Privacy Policy
          describes how we collect, use, disclose, and safeguard your information when you visit our
          website, use our workforce solutions, or submit inquiries regarding any of our services.
          This policy is designed to comply with the Nigeria Data Protection Act (NDPA) 2023, the
          GAID 2025, South Africa's POPIA, the EU/UK GDPR, and the CCPA/CPRA.
        </p>

        <Section num="1" title="Information We Collect">
          <p className="mb-4 text-slate-soft leading-relaxed">
            We collect information that identifies, relates to, or could reasonably be linked with a
            specific professional or device ("Personal Data").
          </p>
          <SubSection title="A. Information You Provide Voluntarily">
            <p className="text-slate-soft leading-relaxed mb-3">When you submit an inquiry or request a proposal, we may collect:</p>
            <ul className="space-y-2 text-slate-soft">
              <Li><strong className="text-navy-900">Identity Data:</strong> Full name, job title, and company name.</Li>
              <Li><strong className="text-navy-900">Contact Data:</strong> Corporate email address, phone number, and physical/mailing address.</Li>
              <Li><strong className="text-navy-900">Inquiry & Service Data:</strong> Workforce size, regional scope of interest, selected services of interest, and any details regarding your corporate challenges.</Li>
            </ul>
          </SubSection>
          <SubSection title="B. Information Collected Automatically">
            <ul className="space-y-2 text-slate-soft">
              <Li><strong className="text-navy-900">Technical Data:</strong> IP address, browser type and version, time zone setting, operating system, and platform.</Li>
              <Li><strong className="text-navy-900">Usage Data:</strong> Pages viewed, time spent, clickstream data, and navigation patterns.</Li>
            </ul>
          </SubSection>
        </Section>

        <Section num="2" title="How We Use Your Information">
          <ul className="space-y-3 text-slate-soft">
            <Li><strong className="text-navy-900">To Respond to Inquiries:</strong> Providing customized service proposals and answering your advisory requests.</Li>
            <Li><strong className="text-navy-900">To Deliver Services:</strong> Using data to initiate onboarding, EOR configurations, or consulting services.</Li>
            <Li><strong className="text-navy-900">To Improve Our Site:</strong> Analyzing usage trends to optimize our tools and user experience.</Li>
            <Li><strong className="text-navy-900">To Communicate With You:</strong> Sending follow-up materials, service updates, and administrative notices.</Li>
            <Li><strong className="text-navy-900">To Ensure Security & Compliance:</strong> Protecting our business, site, and visitors from fraud and unauthorized access.</Li>
          </ul>
        </Section>

        <Section num="3" title="Legal Basis for Processing">
          <ul className="space-y-3 text-slate-soft">
            <Li><strong className="text-navy-900">Consent:</strong> You explicitly authorize us to process your data when you submit a form and check our consent box. You may withdraw this consent at any time.</Li>
            <Li><strong className="text-navy-900">Performance of a Contract:</strong> Processing necessary to take steps at your request prior to entering into a service contract.</Li>
            <Li><strong className="text-navy-900">Legitimate Interests:</strong> To secure our site, prevent fraud, and conduct standard B2B marketing activities.</Li>
            <Li><strong className="text-navy-900">Legal Obligation:</strong> To comply with tax, corporate immigration, and labor laws in our jurisdictions of operation.</Li>
          </ul>
        </Section>

        <Section num="4" title="Sharing and Disclosure of Your Data">
          <p className="text-slate-soft leading-relaxed mb-4">
            Prime Valor Consulting does not sell, rent, or trade your personal or corporate data to
            third parties. We may share your information only under these limited circumstances:
          </p>
          <ul className="space-y-3 text-slate-soft">
            <Li><strong className="text-navy-900">Trusted Service Providers:</strong> Third-party vendors assisting with web hosting, CRM operations, and email dispatch — bound by strict confidentiality agreements.</Li>
            <Li><strong className="text-navy-900">Legal and Compliance Obligations:</strong> If required by law, court order, or regulatory authorities.</Li>
            <Li><strong className="text-navy-900">Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition.</Li>
          </ul>
        </Section>

        <Section num="5" title="Cross-Border Data Transfers">
          <p className="text-slate-soft leading-relaxed mb-4">
            As a global workforce solution provider, your data may be transferred to countries outside
            your home territory. Prime Valor Consulting implements robust, approved transfer mechanisms:
          </p>
          <ul className="space-y-3 text-slate-soft">
            <Li><strong className="text-navy-900">Under NDPA 2023 & GAID 2025:</strong> We ensure recipient countries maintain adequate data protection standards or utilize standard contractual clauses.</Li>
            <Li><strong className="text-navy-900">Under GDPR:</strong> We implement Standard Contractual Clauses (SCCs) approved by the European Commission.</Li>
            <Li><strong className="text-navy-900">Under POPIA:</strong> We ensure recipient jurisdictions provide equivalent levels of protection in line with Section 72 of POPIA.</Li>
          </ul>
        </Section>

        <Section num="6" title="Data Security and Retention">
          <SubSection title="Security">
            <p className="text-slate-soft leading-relaxed">
              We implement industry-standard administrative, technical, and physical security measures
              (including secure databases, encryption, and input sanitization) to guard your data. In
              line with GAID 2025, we maintain a strict 72-hour breach-response playbook to notify
              relevant regulatory bodies and affected data subjects in the event of a high-risk data
              incident.
            </p>
          </SubSection>
          <SubSection title="Retention">
            <p className="text-slate-soft leading-relaxed">
              We retain your information only for as long as necessary to fulfill the purposes outlined
              in this policy, comply with legal/auditing requirements, resolve disputes, and enforce
              our corporate agreements. For standard inquiry data, we retain details for a maximum of
              5 years unless an active corporate relationship is established.
            </p>
          </SubSection>
        </Section>

        <Section num="7" title="Your Data Protection Rights">
          <SubSection title="Under NDPA 2023 / GAID 2025 (Nigeria) & POPIA (South Africa)">
            <ul className="space-y-2 text-slate-soft">
              <Li>Right to Information & Access</Li>
              <Li>Right to Rectification</Li>
              <Li>Right to Objection</Li>
              <Li>Right to Erasure</Li>
              <Li>Right to Portability</Li>
              <Li>Right to Lodge a Grievance (SNAG Mechanism) — under GAID 2025</Li>
            </ul>
          </SubSection>
          <SubSection title="Under GDPR (Europe) & CCPA/CPRA (California)">
            <p className="text-slate-soft leading-relaxed">
              You hold similar rights, including the Right to Restrict Processing, the Right to
              Opt-Out of Sale/Sharing, and protection against decisions based solely on automated
              processing.
            </p>
          </SubSection>
          <p className="text-slate-soft leading-relaxed mt-4">
            To exercise any of these rights, contact our Data Protection Officer at{' '}
            <a href="mailto:legal@primevalor.com" className="text-brass-500 hover:underline">
              legal@primevalor.com
            </a>
            . You also have the right to lodge a complaint with the relevant supervisory authority:
          </p>
          <ul className="space-y-2 text-slate-soft mt-3">
            <Li>
              <strong className="text-navy-900">Nigeria:</strong>{' '}
              <a href="https://ndpc.gov.ng" target="_blank" rel="noreferrer" className="text-brass-500 hover:underline">
                Nigeria Data Protection Commission (NDPC)
              </a>
            </Li>
            <Li>
              <strong className="text-navy-900">South Africa:</strong>{' '}
              <a href="https://inforegulator.org.za" target="_blank" rel="noreferrer" className="text-brass-500 hover:underline">
                The Information Regulator
              </a>
            </Li>
            <Li><strong className="text-navy-900">Europe:</strong> Your local national Data Protection Authority (DPA).</Li>
          </ul>
        </Section>

        <Section num="8" title="Cookies and Tracking Technologies">
          <p className="text-slate-soft leading-relaxed">
            Our site uses cookies to enhance functionality and analyze traffic. You can configure
            your browser settings to reject cookies, though doing so may limit your access to some
            interactive tools on our site.
          </p>
        </Section>

        <Section num="9" title="Contact Us">
          <p className="text-slate-soft leading-relaxed mb-4">
            If you have any questions, concerns, or formal grievances regarding this Privacy Policy
            or our data handling practices, please contact us:
          </p>
          <ul className="space-y-2 text-slate-soft">
            <Li><strong className="text-navy-900">Email:</strong> <a href="mailto:legal@pvconsulting.com" className="text-brass-500 hover:underline">legal@pvconsulting.com</a></Li>
            <Li><strong className="text-navy-900">General Inquiries:</strong> <a href="mailto:info@pvconsulting.com" className="text-brass-500 hover:underline">info@pvconsulting.com</a></Li>
          </ul>
        </Section>
      </div>

      <div className="border-t border-navy-900/10 py-8">
        <div className="container-px">
          <Link to="/" className="text-brass-500 hover:underline text-sm">← Back to home</Link>
        </div>
      </div>
    </div>
  )
}

function Section({ num, title, children }) {
  return (
    <div className="mb-12 pb-12 border-b border-navy-900/10 last:border-0">
      <div className="flex items-baseline gap-4 mb-6">
        <span className="font-mono text-xs text-brass-500">{num}.</span>
        <h2 className="font-display text-2xl text-navy-900 font-medium">{title}</h2>
      </div>
      {children}
    </div>
  )
}

function SubSection({ title, children }) {
  return (
    <div className="mb-6">
      <h3 className="font-display text-lg text-navy-900 font-medium mb-3">{title}</h3>
      {children}
    </div>
  )
}

function Li({ children }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-2 w-1 h-1 rounded-full bg-brass-500 shrink-0" />
      <span>{children}</span>
    </li>
  )
}
