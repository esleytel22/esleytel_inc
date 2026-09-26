import React, { lazy, Suspense } from "react";
import { homepage } from "../../../utils/content";

const Section1 = lazy(() => import("./Components/Section1/Section1"));
const Section2 = lazy(() => import("./Components/Section2/Section2"));
const Section3 = lazy(() => import("./Components/Section3/Section3"));
const Section4 = lazy(() => import("./Components/Section4/Section4"));
const Section7 = lazy(() => import("./Components/Section7/Section7"));

export default function Home() {
  const { section1, section2, section3, section4, section7 } = homepage;

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Section1 content={section1} />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Section2 content={section2} />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Section3 content={section3} />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Section4 content={section4} />
      </Suspense>

      <Suspense fallback={<div>Loading Section 7...</div>}>
        <Section7 content={section7} />
      </Suspense>
    </>
  );
}
