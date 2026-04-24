import React from "react";
import { footer } from "../../../../utils/content";

export default function Footer() {
  return (
    <footer className="bg-white text-white px-6 md:px-20 py-12 relative">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
      
        <div className="flex-1 w-full">
          <div className="flex items-center mb-4">
            <img
              src={footer.company.logo}
              loading="lazy"
              alt="Esleytel Inc – Creative tech studio building web, mobile, and branding solutions"
              className="h-8 w-8 mr-3"
            />
            <h2 className="text-2xl text-black font-bold">
              {footer.company.name}
              <span className="text-light-cream ms-1">
                {footer.company.highlight}
              </span>
            </h2>
          </div>

          <p className="text-xs text-gray-400 mt-4">
            {footer.company.description}
          </p>
        </div>

        {/* Right: Links Grid */}
        <div className="grid text-black grid-cols-1 md:grid-cols-2 gap-8 flex-1 mt-10 lg:mt-0">
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {footer.quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-light-cream hover:text-black">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us On</h3>
            <div className="flex gap-4">
              {footer.social.map((social, i) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-cream hover:text-black transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-700 my-10" />

      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
        <p>{footer.copyright}</p>
        <div className="flex gap-4">
          {footer.policies.map((policy, i) => (
            <a key={i} href={policy.href} className="hover:text-black underline">
              {policy.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}