import Link from "next/link";

export default function ServicesPillars() {
  const services = [
    {
      title: "Being Centred",
      description: "Build steadiness under pressure. Strengthen clarity, resilience, and decision-making through reflective practice and practical tools.",
    },
    {
      title: "Inclusive Leadership & Executive Presence",
      description: "Develop a confident leadership voice. Build presence, influence, and authenticity—especially in complex, high-stakes environments.",
    },
    {
      title: "Strategic Communication & Negotiation",
      description: "Make conversations move. Improve executive communication, stakeholder alignment, and principled negotiation for better outcomes.",
    },
  ];

  return (
    <section 
      id="services" 
      className="section-pad" 
      style={{ 
        paddingTop: "2rem", 
        paddingBottom: "2rem",
        background: "#F4F3F1",
      }}
    >
      <div>
        <div className="container-page">
          <div className="max-w-6xl mx-auto">
          <h2 
            className="font-semibold tracking-tight text-center leading-tight text-2xl md:text-3xl lg:text-4xl"
            style={{ fontWeight: "600", color: "#1a1a1a", marginBottom: "0rem" }}
          >
              How Shodashi helps
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto " style={{ color: "#555",marginBottom: "3rem" }}>
              Three ways we build grounded leadership and healthy cultures.
            </p>
          </div>
        </div>

        <div className="container-page">
          <div 
            className="grid grid-cols-1 services-grid-xl  max-w-6xl mx-auto mb-16"
            style={{ gap: "1.5rem" }}
          >
            {services.map((service, index) => (
              <div
                key={service.title}
                className="transition-all duration-300"
                style={{
                  background: "white",
                  borderRadius: "1rem",
                  padding: "1.5rem",
                  border: "1px solid #e5e5e5",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                }}
              >
                {/* Number */}
                <span 
                  className="font-bold"
                  style={{ 
                    fontSize: "2.5rem", 
                    color: "#b36a4c",
                    lineHeight: "1"
                  }}
                >
                  {String(index + 1)}
                </span>
                
                {/* Title */}
                <h3 
                  className="text-lg md:text-xl  tracking-tight mt-4 mb-3"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm leading-relaxed" style={{ color: "#555", marginBottom: 0 }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="container-page">
          <div className="text-center" style={{ marginTop: "3rem" }}>
            <Link href="#ways-to-work" className="btn-primary">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

