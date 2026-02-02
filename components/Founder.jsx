import Image from "next/image";
import Link from "next/link";

export default function Founder() {
  const dimensions = [
    {
      title: "Deep Knowledge",
      body: "Developing the skills, insight, and discernment required to navigate complexity in a rapidly evolving, global economy.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
      ),
    },
    {
      title: "Conscious Leadership",
      body: "Cultivating awareness, empathy, and ethical clarity—so leaders can act with intention, integrity, and vision, even under pressure.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 16v-4"/>
          <path d="M12 8h.01"/>
        </svg>
      ),
    },
    {
      title: "Collective Progress",
      body: "Creating a ripple effect where individual growth strengthens teams, cultures, and communities—inviting others to show up as their best selves.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    },
  ];

  return (
    <section 
      id="founder" 
      className="section-pad" 
      style={{ 
        paddingTop: "4rem", 
        paddingBottom: "4rem",
        background: "linear-gradient(180deg, #F4F3F1 0%, #ECE9E3 100%)",
      }}
    >
      <div className="container-page">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            {/* <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ 
                background: "rgba(179, 106, 76, 0.1)", 
                border: "1px solid rgba(179, 106, 76, 0.2)" 
              }}
            >
              <span 
                className="inline-block h-2 w-2 rounded-full"
                style={{ background: "#b36a4c" }}
              />
              <span className="text-sm font-medium" style={{ color: "#b36a4c" }}>
                About Us
              </span>
            </div> */}
            
            <h2 
              className="font-semibold tracking-tight text-center leading-tight text-2xl md:text-3xl lg:text-4xl mb-6"
              style={{ fontWeight: "600", color: "#1a1a1a" }}
            >
              About Shodashi Learning Collective
            </h2>
            
            <p 
              className="text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto"
              style={{ color: "#555" }}
            >
              Founded on over 25 years of experience in human development and global facilitation, 
              Shodashi Learning Collective is a conscious platform designed for the next generation of global impact.
            </p>
          </div>

          {/* Featured Quote/Statement */}
          <div 
            className="relative mb-16 p-8 md:p-12 rounded-2xl overflow-hidden"
            style={{ 
              background: "white",
              boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* Decorative accent line */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-1"
              style={{ background: "#b36a4c" }}
            />
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Image placeholder */}
              <div 
                className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden"
                style={{ 
                  background: "linear-gradient(135deg, #6f8b74 0%, #4a6b52 100%)",
                  boxShadow: "0 8px 24px rgba(111, 139, 116, 0.3)"
                }}
              >
                {/* <div className="w-full h-full flex items-center justify-center">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.6">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div> */}
              </div>
              
              {/* <div className="flex-1 text-center md:text-left">
                <blockquote 
                  className="text-xl md:text-2xl font-medium leading-relaxed mb-4"
                  style={{ color: "#1a1a1a", fontStyle: "italic" }}
                >
                  "True leadership is not a role or a title. It is an integration of knowledge, 
                  consciousness, and collective progress."
                </blockquote>
                <p className="text-base" style={{ color: "#555" }}>
                  — The Shodashi Philosophy
                </p>
              </div> */}
            </div>
          </div>

          {/* Three Dimensions Title */}
          <div className="text-center mb-8">
            <h3 
              className="text-xl md:text-2xl font-semibold tracking-tight"
              style={{ color: "#1a1a1a" }}
            >
              Three Essential Dimensions of Leadership
            </h3>
          </div>

          {/* Three Dimensions Cards */}
          <div className="grid grid-cols-1 services-grid-xl  mb-16" style={{ gap: "1rem" }}>
            {dimensions.map((dimension, index) => (
              <div
                key={dimension.title}
                className="group transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "white",
                  borderRadius: "1rem",
                  padding: "2rem",
                  border: "1px solid #e5e5e5",
                  boxShadow: "0 2px 12px rgba(0, 0, 0, 0.06)",
                }}
              >
                {/* Icon */}
                <div 
                  className="w-14 h-14  flex items-center justify-center mb-5 transition-all duration-300"
                  style={{ 
                    color: "#6f8b74",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    paddingTop: "0.5rem",

                  }}
                >
                  {dimension.icon}
                </div>
                
                

                {/* Title */}
                <h4 
                  className="text-lg md:text-xl font-bold tracking-tight mb-3"
                  style={{ color: "#1a1a1a" , fontWeight: "600" }}
                >
                  {dimension.title}
                </h4>
                
                {/* Description */}
                <p 
                  className="text-base leading-relaxed"
                  style={{ color: "#555", marginBottom: 0 }}
                >
                  {dimension.body}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Statement */}
          <div 
            className="text-center p-8 rounded-2xl"
            // style={{ 
            //   background: "rgba(111, 139, 116, 0.08)",
            //   border: "1px solid rgba(111, 139, 116, 0.15)"
            // }}
          >
            <p 
              className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-6"
              style={{ color: "#444" }}
            >
              Shodashi is not simply a curriculum. It is a <strong>Collective</strong>—a growing 
              global community of professionals from the United States to the Asia-Pacific—committed 
              to driving meaningful progress through awareness, reflection, and practical action.
            </p>
            
            <Link href="/contact" className="btn-primary">
              Request a Conversation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
