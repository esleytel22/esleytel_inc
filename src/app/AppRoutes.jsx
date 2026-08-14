import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const OnePage = lazy(() => import("../pages/OnePage/OnePage"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy/PrivacyPolicy"));
const TermsOfService = lazy(() => import("../pages/TermsOfService/TermsOfService"));
import Loader from "@/pages/Loader/Loader";
import Navbar from "@/pages/Components/Navbar/Navbar";
import Footer from "@/pages/Components/Footer/Footer";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <OnePage />
            </MainLayout>
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />

        {/* Legacy routes from the old multi-page site — send visitors to the matching section */}
        <Route path="/about-us" element={<Navigate to="/#about" replace />} />
        <Route path="/portfolio" element={<Navigate to="/#portfolio" replace />} />
        <Route path="/contact-us" element={<Navigate to="/#contact" replace />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
