import React, { useMemo } from "react";
import { useTypewriter } from "../../hooks";
import MenuBar from "../Menu";
import LaptopContent from "./LaptopContent";
import InformationSection from "./InformationSection";

const AILandingHeader: React.FC = () => {
  const typed = useTypewriter(
    [
      "Boost productivity with AI",
      "Automate repetitive tasks",
      "Turn data into insights",
    ],
    40,
    2000
  );

  // background mesh (using multiple radial gradients layered)
  const bgStyle = useMemo(
    () => ({
      backgroundImage:
        "radial-gradient(60rem 30rem at 80% -10%, rgba(79,70,229,0.35), transparent 60%)," +
        "radial-gradient(50rem 25rem at -10% 20%, rgba(124,58,237,0.35), transparent 60%)," +
        "radial-gradient(40rem 20rem at 50% 120%, rgba(59,130,246,0.25), transparent 60%)",
    }),
    []
  );

  return (
    <header className="relative isolate overflow-hidden bg-[#0a0a0f] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={bgStyle as React.CSSProperties}
      />

      <MenuBar />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-12 pb-20 sm:px-6 md:pt-16 lg:px-8 lg:pt-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <InformationSection typed={typed} />
          {/* Laptop mock (placeholder) */}
          <LaptopContent />
        </div>
      </div>
    </header>
  );
};

export default AILandingHeader;
