import React, { useEffect } from "react";

export default function TermsOfService() {
  useEffect(() => {
    document.title = "Terms of Service | Esleytel Inc.";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using the services provided by Esleytel Inc. ("Company," "we," "our," or "us"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access our services.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We reserve the right to modify these Terms at any time. Continued use of our services after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Description</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Esleytel Inc. provides digital solutions including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Web development and design services</li>
              <li>Mobile application development</li>
              <li>Document management solutions</li>
              <li>Digital marketing and branding</li>
              <li>UI/UX design services</li>
              <li>Custom software development</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Specific services, deliverables, timelines, and pricing will be outlined in individual project agreements or statements of work.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When using our services, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Notify us immediately of any unauthorized access or security breaches</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not interfere with or disrupt our services or servers</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
              <li>Comply with all applicable local, state, national, and international laws</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Project Engagement</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.1 Proposals and Agreements</h3>
            <p className="text-gray-700 leading-relaxed">
              All projects begin with a proposal outlining scope, deliverables, timeline, and costs. Work commences only after both parties sign a formal agreement or statement of work.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.2 Client Responsibilities</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Clients are responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Providing necessary content, assets, and information in a timely manner</li>
              <li>Responding to requests for feedback and approvals within agreed timeframes</li>
              <li>Ensuring they have rights to all materials provided to us</li>
              <li>Making timely payments as outlined in the agreement</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.3 Revisions and Changes</h3>
            <p className="text-gray-700 leading-relaxed">
              Project agreements include a specified number of revision rounds. Additional revisions or scope changes may incur additional fees. Major scope changes require a new agreement or amendment.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Payment Terms</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.1 Pricing and Invoicing</h3>
            <p className="text-gray-700 leading-relaxed">
              All prices are quoted in USD unless otherwise specified. We reserve the right to change our pricing at any time, though pricing for signed agreements will remain fixed.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.2 Payment Schedule</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Payment schedules are outlined in individual project agreements. Typical terms include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Deposit payment (typically 30-50%) upon agreement signing</li>
              <li>Milestone payments for larger projects</li>
              <li>Final payment upon project completion and delivery</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.3 Late Payments</h3>
            <p className="text-gray-700 leading-relaxed">
              Invoices are due within 14 days unless otherwise specified. Late payments may incur a fee of 1.5% per month or the maximum allowed by law. We reserve the right to suspend services for accounts with overdue payments.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.4 Refunds</h3>
            <p className="text-gray-700 leading-relaxed">
              Refunds are handled on a case-by-case basis. Work completed and delivered is generally non-refundable. Deposits are non-refundable once work has commenced.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.1 Ownership of Deliverables</h3>
            <p className="text-gray-700 leading-relaxed">
              Upon full payment, clients receive ownership rights to the final deliverables as specified in the project agreement. We retain the right to use project work in our portfolio and marketing materials unless otherwise agreed.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.2 Pre-existing Materials</h3>
            <p className="text-gray-700 leading-relaxed">
              We retain ownership of any pre-existing intellectual property, tools, frameworks, or code libraries used in projects. Clients receive a license to use these materials as part of the final deliverable.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.3 Third-Party Materials</h3>
            <p className="text-gray-700 leading-relaxed">
              Clients are responsible for obtaining necessary licenses for third-party materials (fonts, stock images, plugins) unless we've agreed to source them. We are not liable for copyright infringement from client-provided materials.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Confidentiality</h2>
            <p className="text-gray-700 leading-relaxed">
              Both parties agree to keep confidential information disclosed during the project engagement private. This includes business strategies, proprietary information, and unreleased products. Confidentiality obligations survive project completion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Warranties and Disclaimers</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">8.1 Our Warranties</h3>
            <p className="text-gray-700 leading-relaxed">
              We warrant that services will be performed in a professional manner consistent with industry standards. We will fix any defects in deliverables reported within the warranty period specified in the project agreement (typically 30-90 days).
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">8.2 Disclaimers</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              EXCEPT AS EXPRESSLY PROVIDED, WE PROVIDE SERVICES "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Fitness for a particular purpose</li>
              <li>Uninterrupted or error-free operation</li>
              <li>Specific results or outcomes</li>
              <li>Compatibility with all systems or platforms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM OR RELATED TO OUR SERVICES SHALL NOT EXCEED THE AMOUNT PAID BY THE CLIENT FOR THE SPECIFIC SERVICES GIVING RISE TO THE CLAIM.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              WE ARE NOT LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, REVENUE, OR DATA.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify and hold harmless Esleytel Inc. from any claims, damages, or expenses arising from your use of our services, violation of these Terms, or infringement of any third-party rights through materials you provide.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Termination</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">11.1 Termination by Client</h3>
            <p className="text-gray-700 leading-relaxed">
              Clients may terminate projects with written notice. Client remains responsible for payment for all work completed up to the termination date, plus any non-refundable expenses incurred.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">11.2 Termination by Us</h3>
            <p className="text-gray-700 leading-relaxed">
              We may terminate services immediately if the client breaches these Terms, fails to make timely payments, or engages in abusive behavior toward our team.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">11.3 Effects of Termination</h3>
            <p className="text-gray-700 leading-relaxed">
              Upon termination, we will provide all completed work-in-progress deliverables. The client must pay all outstanding invoices within 14 days. Intellectual property provisions survive termination.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Dispute Resolution</h2>
            <p className="text-gray-700 leading-relaxed">
              In the event of a dispute, both parties agree to first attempt resolution through good-faith negotiation. If negotiation fails, disputes will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of New Jersey, United States, without regard to conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. General Provisions</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">14.1 Entire Agreement</h3>
            <p className="text-gray-700 leading-relaxed">
              These Terms, together with any project-specific agreements, constitute the entire agreement between you and Esleytel Inc.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">14.2 Severability</h3>
            <p className="text-gray-700 leading-relaxed">
              If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">14.3 Waiver</h3>
            <p className="text-gray-700 leading-relaxed">
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">14.4 Assignment</h3>
            <p className="text-gray-700 leading-relaxed">
              You may not assign or transfer these Terms without our prior written consent. We may assign our rights and obligations without restriction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-900 font-semibold mb-2">Esleytel Inc.</p>
              <p className="text-gray-700">Email: <a href="mailto:helpdesk@esleytel.space" className="text-amber-600 hover:underline">helpdesk@esleytel.space</a></p>
              <p className="text-gray-700">Support Page: <a href="/contact-us" className="text-amber-600 hover:underline">Contact Us</a></p>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Important Notice:</strong> These Terms of Service are legally binding. By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
              </p>
            </div>
          </section>

        </div>

        {/* Back to Home */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <a
            href="/"
            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
