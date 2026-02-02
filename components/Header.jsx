"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 w-full" 
      style={{ 
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "#F1F1F1",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="container-page" style={{ height: "3.5rem", display: "flex", alignItems: "center" }}>
        <div className="flex items-center justify-between" style={{ width: "100%" }}>
          {/* Logo */}
          <Link 
            className="hover:opacity-90 no-underline flex items-center" 
            href="#" 
            onClick={scrollToTop}
          >
            <Image 
              src="/images/logo.png" 
              alt="Shodashi Learning Collective" 
              width={130} 
              height={36} 
              className="md:w-[150px]" 
              style={{ height: "auto" }} 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav 
            className="desktop-nav items-center justify-center" 
            style={{ gap: "2rem" }}
          >
            <Link 
              className="font-sans text-sm hover:opacity-70 no-underline whitespace-nowrap transition-opacity" 
              style={{ color: "black", fontWeight: "400" }} 
              href="/"
            >
              Home
            </Link>
            <Link 
              className="text-sm font-sans hover:opacity-70 no-underline whitespace-nowrap transition-opacity" 
              style={{ color: "black", fontWeight: "400" }} 
              href="/#method"
            >
              Philosophy
            </Link>
            <Link 
              className="text-sm font-sans hover:opacity-70 no-underline whitespace-nowrap transition-opacity" 
              style={{ color: "black", fontWeight: "400" }} 
              href="/#ways-to-work"
            >
              Services
            </Link>
            <Link 
              className="text-sm font-sans hover:opacity-70 no-underline whitespace-nowrap transition-opacity" 
              style={{ color: "black", fontWeight: "400" }} 
              href="/#founder"
            >
              About
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="desktop-cta">
            <Link href="/contact" className="btn-primary text-sm py-2 px-4">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn items-center justify-center w-10 h-10 rounded-lg transition-colors"
            style={{ background: "transparent" }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: "#1a1a1a" }}
            >
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="mobile-menu overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isMenuOpen ? "500px" : "0",
          opacity: isMenuOpen ? 1 : 0,
          background: "#F1F1F1",
          borderTop: isMenuOpen ? "1px solid rgba(0,0,0,0.08)" : "none",
          boxShadow: isMenuOpen ? "0 4px 12px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <nav 
          className="container-page flex flex-col"
          style={{ 
            paddingTop: "1.5rem", 
            paddingBottom: "1.5rem",
            gap: "0.25rem",
            maxWidth: "100%",
            overflowX: "hidden",
            boxSizing: "border-box"
          }}
        >
          <Link 
            className="font-sans text-base rounded-xl no-underline transition-all" 
            style={{ 
              color: "#1a1a1a", 
              fontWeight: "500",
              padding: "1rem 1.25rem",
              // background: "rgba(255,255,255,0.5)",
              marginBottom: "0.5rem"
            }} 
            href="/"
            onClick={handleNavClick}
          >
            Home
          </Link>
          <Link 
            className="font-sans text-base rounded-xl no-underline transition-all" 
            style={{ 
              color: "#1a1a1a", 
              fontWeight: "500",
              padding: "1rem 1.25rem",
              // background: "rgba(255,255,255,0.5)",
              marginBottom: "0.5rem"
            }} 
            href="/#method"
            onClick={handleNavClick}
          >
            Philosophy
          </Link>
          <Link 
            className="font-sans text-base rounded-xl no-underline transition-all" 
            style={{ 
              color: "#1a1a1a", 
              fontWeight: "500",
              padding: "1rem 1.25rem",
              // background: "rgba(255,255,255,0.5)",
              marginBottom: "0.5rem"
            }} 
            href="/#ways-to-work"
            onClick={handleNavClick}
          >
            Services
          </Link>
          <Link 
            className="font-sans text-base rounded-xl no-underline transition-all" 
            style={{ 
              color: "#1a1a1a", 
              fontWeight: "500",
              padding: "1rem 1.25rem",
              // background: "rgba(255,255,255,0.5)",
              marginBottom: "0.5rem"
            }} 
            href="/#founder"
            onClick={handleNavClick}
          >
            About
          </Link>
          
          <div style={{ marginTop: "1rem", width: "100%", boxSizing: "border-box" }}>
            <Link 
              href="/contact" 
              className="btn-primary text-center"
              style={{
                display: "block",
                width: "100%",
                padding: "1rem 1.5rem",
                fontSize: "1rem",
                borderRadius: "0.75rem",
                boxSizing: "border-box"
              }}
              onClick={handleNavClick}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </div>


    </header>
  );
}
