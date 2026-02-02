"use client";

import { useState } from "react";
import Link from "next/link";

export default function WaysToWork() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const engagements = [
    {
      headline: "Executive Coaching",
      copy: "Partner one-on-one to build clarity, presence, and steadiness in complex roles. Coaching focuses on real challenges—decision-making under pressure, leadership presence, navigating conflict, and staying aligned without burning out.",
      bestFor: "Senior leaders, founders, and high-potential executives.",
    },
    {
      headline: "Team Offsites & Workshops",
      copy: "Facilitated spaces where teams slow down, surface what matters, and move forward together. These sessions build trust, strengthen communication, and help teams align on priorities, ways of working, and decision-making.",
      bestFor: "Leadership teams, cross-functional groups, and global teams.",
    },
    {
      headline: "Cohorts & Learning Journeys",
      copy: "Multi-session experiences that blend reflection, dialogue, and practical application. Cohorts create shared language and momentum over time—supporting sustained change rather than one-off inspiration.",
      bestFor: "Emerging leaders, women leaders, and organizational communities.",
    },
    {
      headline: "Culture & Communication Interventions",
      copy: "Targeted support for moments that matter: transitions, growth phases, conflict, or misalignment. These interventions focus on how people communicate, make decisions, and take ownership—so culture becomes intentional, not accidental.",
      bestFor: "Organizations navigating change or complexity.",
    },
  ];

  const toggleExpanded = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section 
      id="ways-to-work"
      className="section-pad" 
      style={{ 
        paddingTop: "2rem", 
        paddingBottom: "2rem",
        background: "#ECE9E3",
      }}
    >
      <div className="container-page">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="font-semibold tracking-tight text-center leading-tight text-2xl md:text-3xl lg:text-4xl"
            style={{ fontWeight: "600", color: "#1a1a1a", marginBottom: "0rem" }}
          >
            Ways to work together
          </h2>
          <p className="text-base md:text-lg  leading-relaxed text-center max-w-3xl mx-auto mb-16" style={{ color: "#555",marginBottom: "3rem" }}>
            Shodashi works with leaders and teams at different moments in their journey—from personal leadership development to culture-shaping interventions. Each engagement is designed with care, clarity, and respect for the real constraints people operate under.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-4 mb-16">
          {engagements.map((engagement, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={engagement.headline}
                className="rounded-2xl transition-all duration-300 cursor-pointer relative"
                style={{
                  background: "#F4F3F1",
                  border: "1px solid var(--border)",
                  padding: "1.5rem",
                  borderRadius: "rem",
                  marginBottom: "1rem",
                }}
                onClick={() => toggleExpanded(index)}
              >
                {isExpanded && (
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl transition-all duration-300"
                    style={{
                      background: "var(--accent)",
                    }}
                  />
                )}
                <div className="py-4 px-10">
                  <div className="flex items-center justify-between mb-0">
                    <h3 className="text-xl md:text-2xl font-semibold  tracking-tight pr-4"style={{ color: "black" }}>
                      {engagement.headline}
                    </h3>
                    <div 
                      className="flex-shrink-0 transition-transform duration-300"
                      style={{
                        transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ color: "#555" }}
                        />
                      </svg>
                    </div>
                  </div>
                  
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: isExpanded ? "1000px" : "0",
                      opacity: isExpanded ? 1 : 0,
                    }}
                  >
                    <div className="pt-6">
                      <p className="text-base  leading-relaxed mb-6" style={{ color: "#555" }}>
                        {engagement.copy}
                      </p>
                      <p className="text-sm  leading-relaxed" style={{ fontStyle: "italic", color: "#555" }}>
                        Best for: {engagement.bestFor}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="text-base muted leading-relaxed" style={{ color: "#555" }}>
            All engagements are thoughtfully designed and globally delivered—combining psychological safety, collective intelligence, and practical tools that leaders can actually use.
          </p>
        </div>

        <div className="text-center">
          <Link href="/contact" className="btn-primary">
            Request a conversation
          </Link>
        </div>
      </div>
    </section>
  );
}

