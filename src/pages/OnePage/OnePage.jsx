import React, { lazy, Suspense, useEffect } from "react";
import useHashScroll from "@/hooks/useHashScroll";

const Home = lazy(() => import("../Home/Home"));
const AboutUs = lazy(() => import("../AboutUs/AboutUs"));
const Portfolio = lazy(() => import("../Portfolio/Portfolio"));
const ContactUs = lazy(() => import("../ContactUs/ContactUs"));

const sectionFallback = <div className="min-h-[40vh]" />;

export default function OnePage() {
  useHashScroll();

  useEffect(() => {
    document.title = "Esleytel LLC.  |  Web, Mobile & Branding Studio";
  }, []);

  return (
    <>
      <section id="home" className="scroll-mt-28">
        <Suspense fallback={sectionFallback}>
          <Home />
        </Suspense>
      </section>

      <section id="about" className="scroll-mt-28">
        <Suspense fallback={sectionFallback}>
          <AboutUs />
        </Suspense>
      </section>

      <section id="portfolio" className="scroll-mt-28">
        <Suspense fallback={sectionFallback}>
          <Portfolio />
        </Suspense>
      </section>

      <section id="contact" className="scroll-mt-28">
        <Suspense fallback={sectionFallback}>
          <ContactUs />
        </Suspense>
      </section>
    </>
  );
}
