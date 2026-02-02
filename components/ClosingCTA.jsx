import Link from "next/link";

export default function ClosingCTA() {
  return (
    <section className="section-pad" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-6">
            Ready to build a stronger leadership culture?
          </h2>
          <p className="text-lg muted mb-8 leading-relaxed">
            Let&apos;s explore what your team needs—clarity, cohesion, presence, or better conversations that move decisions forward.
          </p>

          <div className="flex flex-row justify-center items-center " style={{ gap: "1.5rem" }}>
            <Link href="/about" className="btn-primary " style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
              About Us
            </Link>
            <Link href="#ways-to-work" className="btn-secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

