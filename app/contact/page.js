"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <main 
      style={{ 
        background: "#F4F3F1", 
        minHeight: "100vh",
        paddingTop: "calc(3.5rem + 4rem)",
        paddingBottom: "4rem"
      }}
    >
      <div className="container-page">
        <div 
          className="grid gap-12 max-w-6xl mx-auto"
          style={{
            gridTemplateColumns: "1fr",
          }}
        >
          {/* Responsive grid - stacks on mobile, side by side on desktop */}
          <div 
            className="contact-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
            }}
          >
            {/* Left Column - Contact Info */}
            <div style={{ paddingTop: "1rem" }}>
              <span 
                style={{ 
                  fontSize: "0.75rem", 
                  fontWeight: "600", 
                  letterSpacing: "0.15em", 
                  textTransform: "uppercase",
                  color: "#6f8b74"
                }}
              >
                Contact Us
              </span>
              
              <h1 
                style={{ 
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  fontWeight: "400",
                  //fontStyle: "italic",
                  color: "#1a1a1a",
                  marginTop: "1rem",
                  marginBottom: "1.5rem",
                  lineHeight: "1"
                }}
              >
                Let&apos;s get started
              </h1>
              
              <p 
                style={{ 
                  fontSize: "1.125rem", 
                  lineHeight: "1.75",
                  color: "#555",
                  maxWidth: "400px",
                  marginBottom: "2.5rem"
                }}
              >
                Ready to build grounded leadership? Reach out using the form and we'll get back to you right away.
              </p>

              {/* Contact Details */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {/* Email */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div 
                    style={{ 
                      width: "48px", 
                      height: "48px", 
                      borderRadius: "50%", 
                      background: "rgba(111, 139, 116, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6f8b74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <div>
                    <span style={{ fontSize: "0.75rem", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#888" }}>
                      EMAIL
                    </span>
                    <p style={{ fontSize: "1rem", color: "#1a1a1a", fontWeight: "500", margin: 0 }}>
                      sapnapaddy@gmail.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div 
                    style={{ 
                      width: "48px", 
                      height: "48px", 
                      borderRadius: "50%", 
                      background: "rgba(111, 139, 116, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6f8b74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <span style={{ fontSize: "0.75rem", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#888" }}>
                      PHONE
                    </span>
                    <p style={{ fontSize: "1rem", color: "#1a1a1a", fontWeight: "500", margin: 0 }}>
                      9900799744
                    </p>
                  </div>
                </div>

                {/* LinkedIn */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div 
                    style={{ 
                      width: "48px", 
                      height: "48px", 
                      borderRadius: "50%", 
                      background: "rgba(111, 139, 116, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6f8b74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </div>
                  <div>
                    <span style={{ fontSize: "0.75rem", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#888" }}>
                      LINKEDIN
                    </span>
                    <a 
                      href="https://www.linkedin.com/in/sapna-padmanabhan-b84624a/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ fontSize: "1rem", color: "#1a1a1a", fontWeight: "500", margin: 0, textDecoration: "none", display: "block" }}
                    >
                      Sapna Padmanabhan
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div 
                    style={{ 
                      width: "48px", 
                      height: "48px", 
                      borderRadius: "50%", 
                      background: "rgba(111, 139, 116, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6f8b74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <span style={{ fontSize: "0.75rem", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "#888" }}>
                      LOCATION
                    </span>
                    <p style={{ fontSize: "1rem", color: "#1a1a1a", fontWeight: "500", margin: 0 }}>
                      Bangalore
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form Card */}
            <div 
              style={{ 
                background: "white",
                borderRadius: "1rem",
                padding: "2.5rem",
                boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)",
                border: "1px solid #e5e5e5"
              }}
            >
              <h2 
                style={{ 
                  fontSize: "1.75rem",
                  fontWeight: "400",
                  //fontStyle: "italic",
                  color: "#1a1a1a",
                  marginBottom: "0.5rem"
                }}
              >
                Send us a message
              </h2>
              <p style={{ fontSize: "0.9375rem", color: "#666", marginBottom: "2rem" }}>
                Fill out the form below and we'll respond promptly.
              </p>

              <form onSubmit={handleSubmit}>
                {/* Row 1: Full Name & Email */}
                <div 
                  className="form-row"
                  style={{ 
                    display: "grid", 
                    gridTemplateColumns: "1fr", 
                    gap: "1.5rem",
                    marginBottom: "1.5rem"
                  }}
                >
                  <div>
                    <label 
                      htmlFor="fullName"
                      style={{ 
                        display: "block", 
                        fontSize: "0.875rem", 
                        fontWeight: "500", 
                        color: "#1a1a1a",
                        marginBottom: "0.5rem"
                      }}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "0.875rem 1rem",
                        fontSize: "1rem",
                        border: "1px solid #e0e0e0",
                        borderRadius: "0.5rem",
                        background: "white",
                        color: "#1a1a1a",
                        outline: "none",
                        transition: "border-color 0.2s",
                        boxSizing: "border-box"
                      }}
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="email"
                      style={{ 
                        display: "block", 
                        fontSize: "0.875rem", 
                        fontWeight: "500", 
                        color: "#1a1a1a",
                        marginBottom: "0.5rem"
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "0.875rem 1rem",
                        fontSize: "1rem",
                        border: "1px solid #e0e0e0",
                        borderRadius: "0.5rem",
                        background: "white",
                        color: "#1a1a1a",
                        outline: "none",
                        transition: "border-color 0.2s",
                        boxSizing: "border-box"
                      }}
                    />
                  </div>
                </div>

                {/* Row 2: Phone */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <label 
                    htmlFor="phone"
                    style={{ 
                      display: "block", 
                      fontSize: "0.875rem", 
                      fontWeight: "500", 
                      color: "#1a1a1a",
                      marginBottom: "0.5rem"
                    }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.875rem 1rem",
                      fontSize: "1rem",
                      border: "1px solid #e0e0e0",
                      borderRadius: "0.5rem",
                      background: "white",
                      color: "#1a1a1a",
                      outline: "none",
                      transition: "border-color 0.2s",
                      boxSizing: "border-box"
                    }}
                  />
                </div>

                {/* Message */}
                <div style={{ marginBottom: "2rem" }}>
                  <label 
                    htmlFor="message"
                    style={{ 
                      display: "block", 
                      fontSize: "0.875rem", 
                      fontWeight: "500", 
                      color: "#1a1a1a",
                      marginBottom: "0.5rem"
                    }}
                  >
                    Message <span style={{ color: "#888", fontWeight: "400" }}>(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your needs..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    style={{
                      width: "100%",
                      padding: "0.875rem 1rem",
                      fontSize: "1rem",
                      border: "1px solid #e0e0e0",
                      borderRadius: "0.5rem",
                      background: "white",
                      color: "#1a1a1a",
                      outline: "none",
                      transition: "border-color 0.2s",
                      resize: "vertical",
                      minHeight: "120px",
                      fontFamily: "inherit",
                      boxSizing: "border-box"
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                 className="btn-primary text-sm py-4 px-4"
                >
                  Submit Now
                 
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
