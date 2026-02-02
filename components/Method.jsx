"use client";

import { useState } from "react";
import Image from "next/image";

export default function Method() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const methods = [
    { 
      title: "Psychological safety", 
      description: "Trusted spaces for honest dialogue and growth.",
      image: "/images/home-screen.jpeg",
    },
    { 
      title: "Collective intelligence", 
      description: "Harness group wisdom to build alignment and ownership.",
      image: "/images/hero-bg.jpeg",
    },
    { 
      title: "Sustainable energy", 
      description: "Practices leaders can maintain, not just admire.",
      image: "/images/home-screen.jpeg",
    },
  ];






  return (
    <section 
      id="method"
      className="section-pad" 
      style={{ 
        paddingTop: "2rem", 
        paddingBottom: "2rem",
        background: "rgba(34, 54, 44, 0.3)",
      }}
    >
      <div className="container-page">
        <div className="max-w-6xl mx-auto" style={{ marginBottom: "3rem" }}>
          <h2 
            className="font-semibold tracking-tight text-center leading-tight text-2xl md:text-3xl lg:text-4xl"
            style={{ fontWeight: "600",  marginBottom: "0rem" }}
          >
              The Shodashi way
            </h2>
          <p className="text-base md:text-lg muted leading-relaxed text-center max-w-3xl mx-auto mb-8">
           Human-first, Globally Fluent, Grounded in Real Work.
          </p>
        </div>

        <div className="container-page">
          <div 
            className="grid grid-cols-1 services-grid-xl  max-w-6xl mx-auto mb-16"
            style={{ gap: "1.5rem" }}
          >
            {methods.map((service, index) => (
              <div
                key={service.title}
                className="transition-all duration-300"
                style={{
                  //background: "#ECE9E3",
                  // borderRadius: "1rem",
                  // padding: "1.5rem",
                  // border: "1px solid #e5e5e5",
                  // boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                }}
              >
                {/* Image */}
                <div className="mb-4" style={{ width: "100%", height: "200px", position: "relative", borderRadius: "0.5rem", overflow: "hidden" }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-all duration-300"
                  />
                </div>
                
                {/* Title */}
                <h3 
                  className="text-lg md:text-xl  tracking-tight mt-4 "
                  style={{  fontWeight: "600" }}
                >
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm leading-relaxed" style={{ marginBottom: "1rem" }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center muted " style={{ marginTop: "3rem" }}>
         A structured approach to building leadership capability.
        </p>
      </div>
    </section>
  );
}

