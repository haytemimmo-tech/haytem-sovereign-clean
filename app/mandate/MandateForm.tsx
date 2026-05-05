"use client";

import { useState } from "react";

interface MandateFormProps {
  city?: string;
}

export default function MandateForm({ city }: MandateFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const inputStyle = {
    padding: "16px",
    background: "rgba(17,17,17,0.92)",
    border: "1px solid rgba(212,175,55,0.25)",
    color: "white",
    borderRadius: "12px",
    outline: "none",
    fontSize: "15px",
    boxShadow: "inset 0 0 18px rgba(0,0,0,0.65)"
  };

  const goldButtonStyle = {
    background:
      "linear-gradient(145deg, #fff3a6 0%, #f6d365 18%, #d4af37 42%, #b8860b 65%, #fff1a8 100%)",
    color: "#111",
    padding: "18px 36px",
    borderRadius: "999px",
    border: "1px solid rgba(255,236,150,0.9)",
    fontWeight: 800,
    cursor: "pointer",
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    boxShadow:
      "0 10px 25px rgba(0,0,0,0.55), 0 0 35px rgba(212,175,55,0.55), inset 0 3px 8px rgba(255,255,255,0.7), inset 0 -6px 12px rgba(95,62,0,0.45)",
    transform: "translateY(-4px)",
    transition: "all 0.25s ease"
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    data.append("access_key", "57cc01e7-366f-45ea-ba3c-b04a3ef99532");
    data.append("subject", `New Investment Request - ${city || "Global"} - HAYTEM SOVEREIGN`);
    data.append("city_source", city || "Global Mandate");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: "clamp(32px, 6vw, 120px)",
        background:
          "radial-gradient(circle at top left, rgba(212,175,55,0.14), transparent 34%), #0a0a0a",
        color: "white",
        minHeight: "100vh",
        fontFamily: "serif"
      }}
    >
      <h1 className="mandate-heading" style={{ marginBottom: "20px", color: "#d4af37" }}>
        Private Mandate Access
      </h1>

      {city && (
        <p style={{ marginBottom: "20px", color: "#d4af37", letterSpacing: "0.08em" }}>
          Investment Interest: {city.toUpperCase()}
        </p>
      )}

      <p
        style={{
          fontSize: "clamp(16px, 4vw, 18px)",
          width: "100%",
          lineHeight: "1.6",
          opacity: 0.8,
          marginBottom: "40px"
        }}
      >
        This is a confidential access channel reserved for high-level capital.
        Only serious investment mandates are processed through this gateway.
      </p>

      {submitted && (
        <div
          style={{
            maxWidth: "650px",
            marginBottom: "35px",
            padding: "24px",
            border: "1px solid rgba(212,175,55,0.45)",
            borderRadius: "18px",
            background: "rgba(212,175,55,0.08)",
            boxShadow: "0 0 35px rgba(212,175,55,0.18)"
          }}
        >
          <h2 style={{ color: "#d4af37", marginBottom: "12px" }}>
            Confidential Request Received
          </h2>

          <p style={{ lineHeight: "1.7", opacity: 0.85 }}>
            Your investment request has been received. Our private desk will review the information carefully and respond only if the mandate aligns with our confidential opportunity pipeline.
          </p>

          <p style={{ marginTop: "12px", opacity: 0.7 }}>
            Our team typically reviews confidential mandates within 24–72 hours.
          </p>
        </div>
      )}

      {!submitted && (
        <div
          style={{
            maxWidth: "500px",
            display: "flex",
            flexDirection: "column",
            gap: "15px"
          }}
        >
          <input name="name" placeholder="Full Name" style={inputStyle} required />
          <input name="email" placeholder="Email" style={inputStyle} type="email" required />
          <input
            type="tel"
            name="phone"
            placeholder="Country Code + Phone Number"
            style={inputStyle}
            required
          />
          <input name="budget" placeholder="Investment Budget (€)" style={inputStyle} required />

          <textarea
            name="interest"
            placeholder="Your Interest (City / Asset Type)"
            style={{ ...inputStyle, height: "120px" }}
            required
          ></textarea>

          <button type="submit" style={goldButtonStyle}>
            Submit Confidential Request
          </button>
        </div>
      )}
    </form>
  );
}