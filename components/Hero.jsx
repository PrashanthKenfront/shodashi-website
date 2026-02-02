import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ 
        minHeight: "640px", 
        paddingTop: "calc(3.5rem + 4rem)", 
        paddingBottom: "2rem",
        background: "var(--bg)"
      }}
    >
      {/* Layer 1: Base moss background */}
      <div 
        className="absolute inset-0"
        style={{ background: "var(--bg)" }}
      />

      {/* Layer 2: Subtle organic glow accents - moss + clay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(800px 500px at 25% 30%, rgba(111, 139, 116, 0.12), transparent 65%), radial-gradient(700px 450px at 75% 70%, rgba(179, 106, 76, 0.08), transparent 60%)",
        }}
      />

      {/* Layer 3: Gentle vignette - darken edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.15) 100%)",
        }}
      />

      {/* Content */}
      <div className="container-page relative z-10 text-center">
        {/* Title at top */}
        <div className="mb-8 flex flex-col items-center">
          <div className="pill mb-8 px-2 py-1.5 md:px-4 md:py-2 text-[0.6rem] md:text-xs max-w-[calc(100%-2rem)] md:max-w-none flex-wrap gap-1.5 md:gap-3 whitespace-normal md:whitespace-nowrap">
            <span className="bulb-glow shrink-0">
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 32 32" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Light rays/spikes */}
                <line x1="16" y1="1" x2="16" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="bulb-ray" />
                <line x1="25.5" y1="6.5" x2="22.7" y2="9.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="bulb-ray" />
                <line x1="30" y1="16" x2="26" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="bulb-ray" />
                <line x1="6.5" y1="6.5" x2="9.3" y2="9.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="bulb-ray" />
                <line x1="2" y1="16" x2="6" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="bulb-ray" />
                {/* Bulb */}
                <path 
                  d="M13 27h6M16 9a6 6 0 0 0-6 6c0 2.22 1.21 4.16 3 5.19V23a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2.81c1.79-1.03 3-2.97 3-5.19a6 6 0 0 0-6-6z" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  fill="rgba(251, 191, 36, 0.2)"
                />
              </svg>
            </span>
            <span className="font-medium tracking-wide  leading-tight text-center" style={{ letterSpacing: "0.05em" }}>
              <span className="hero-pill-short uppercase">
                Leadership, Culture, and Communication
              </span>
              <span className="hero-pill-full uppercase">
                Leadership, Culture, and Communication — Grounded and Human
              </span>
            </span>
          </div>

          <h1 
            className="text-4xl font-semibold tracking-tight md:text-6xl leading-tight"
            style={{ margin: 0, marginTop: "0.5rem" }}
          >
            Stay centred in complexity.<br />
            <br className="hidden md:block" />
            Lead with clarity. 
          </h1>
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto">
          <p className="mb-10 text-lg mx-auto leading-relaxed muted" style={{ maxWidth: "680px" }}>
            Shodashi Learning Collective is a leadership practice—building psychologically safe teams, stronger executive presence, and communication that moves decisions forward.
          </p>

          <div className="flex flex-row justify-center" style={{ marginBottom: "3rem" }}>
            <Link href="#ways-to-work" className="btn-primary" style={{ marginRight: "1.5rem" }}>
              Explore Services
            </Link>
            <Link href="/#founder" className="btn-secondary">
              About Us
            </Link>
          </div>

          <div 
            className="flex justify-center" 
            style={{ marginTop: "3rem", marginBottom: "2rem" }}
          >
            <div style={{ borderRadius: "1rem", overflow: "hidden", boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)" }}>
              <Image
                src="/images/home-screen.jpeg"
                alt="Leadership and teamwork"
                width={900}
                height={500}
                style={{ objectFit: "cover", maxWidth: "100%", height: "auto", display: "block" }}
                priority
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center" style={{ marginTop: "2rem", gap: "1rem" }}>
            <div className="pill">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--accent-2)" }}
              />
              <span>Global Delivery</span>
            </div>
            <div className="pill">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--accent-2)" }}
              />
              <span>Workshops</span>
            </div>
            <div className="pill">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--accent-2)" }}
              />
              <span>Cohorts</span>
            </div>
            <div className="pill">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--accent-2)" }}
              />
              <span>Executive Engagements</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
