export default function Strengths() {
  const strengths = [
    {
      headline: "Presence",
      copy: "Lead from a centred place—especially when things get fast, messy, or high-stakes. Build executive presence that feels calm, clear, and credible, without performing a version of yourself.",
      image: "/images/hero-bg.jpeg",
    },
    {
      headline: "Culture",
      copy: "Shape the conditions where people do their best work: psychological safety, accountability, and shared ownership. Strengthen how teams listen, challenge, decide, and recover—so culture becomes a capability, not a slogan.",
      image: "/images/hero-bg.jpeg",
    },
    {
      headline: "Conversations",
      copy: "Make conversations move decisions forward. Build communication and negotiation habits that reduce friction, clarify priorities, and align stakeholders—across roles, power dynamics, and cultures.",
      image: "/images/hero-bg.jpeg",
    },
  ];

  return (
    <section 
      className="" 
      style={{ 
        paddingTop: "2rem", 
        paddingBottom: "2rem",
        background: "#ECE9E3",
      }}
    >
      <div className="container-page">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="font-semibold tracking-tight text-center leading-tight text-lg md:text-2xl"
            style={{
              fontWeight: "600",
              color: "#1a1a1a",
              marginBottom: "0rem",
            }}
          >
            What Shodashi strengthens
          </h2>
          
          <p className="text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto " style={{ color: "#555",marginBottom: "3rem" }}>
            Shodashi strengthens the human side of leadership—the inner steadiness, the culture you create around you, and the conversations that determine outcomes. These aren&apos;t &quot;soft skills.&quot; They&apos;re the operating system for trust, alignment, and meaningful progress.
          </p>
          
          {/* Cards grid - side by side */}
          <div className="strengths-grid gap-6 mb-16">
            {strengths.map(({ headline, copy, image }, index) => (
              <div
                key={headline}
                className="flex flex-col"
              >
                {/* Image */}
                <div className="mb-1 w-full h-40">
                  <img
                    src={image}
                    alt={headline}
                    className="w-full h-full object-cover"
                    style={{ borderRadius: "0.5rem" }}
                  />
                </div>
                
                <h3 className="text-lg md:text-xl  tracking-tight text-left " style={{ letterSpacing: "0.05em", color: "#1a1a1a", marginBottom: "0.5rem", fontWeight: "600" }}>
                  {headline}
                </h3>
                <p className="text-xs leading-relaxed text-left" style={{ color: "#555", margin: "0" }}>
                  {copy}
                </p>
              </div>
            ))}
          </div>

          <p className="text-sm leading-relaxed text-center max-w-2xl mx-auto" style={{ color: "#666",marginTop: "3rem" }}>
            Practical tools and deep reflection—designed for real leadership environments, and built to hold up under pressure.
          </p>
        </div>
      </div>
    </section>
  );
}

