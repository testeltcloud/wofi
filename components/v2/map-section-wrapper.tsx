"use client";

import dynamic from "next/dynamic";

export const V2MapSection = dynamic(
  () => import("./map-section").then((m) => m.V2MapSection),
  { ssr: false },
);
