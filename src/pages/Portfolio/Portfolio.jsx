import React, { lazy, Suspense } from "react";
import { portfoliopage } from "../../../utils/content";

// ✅ Lazy imports for sections
const Section1 = lazy(() => import("./Components/Section1"));
const Section2 = lazy(() => import("./Components/Section2"));

export default function Portfolio() {
  const { section1,
    section2 } = portfoliopage;

  return (
    <>
      <Suspense fallback={<div>Loading Section 1...</div>}>
        <Section1 content={section1} />
      </Suspense>

      <Suspense fallback={<div>Loading Section 2...</div>}>
        <Section2 content={section2} />
      </Suspense>
    </>
  );
}
