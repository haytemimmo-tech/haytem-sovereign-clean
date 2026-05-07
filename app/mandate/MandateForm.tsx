"use client";

import { useState, useRef, useEffect } from "react";

interface MandateFormProps {
  city?: string;
}

export default function MandateForm({ city }: MandateFormProps) {
  const cityName = city
  ?.replaceAll("-", " ")
  .replace(/\b\w/g, (l) => l.toUpperCase());
  const [submitted, setSubmitted] = useState(false);
  const successRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
  if (submitted) {
    setTimeout(() => {
      successRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  }
}, [submitted]);

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

  const params = new URLSearchParams(window.location.search);
const cityFromUrl = params.get("city") || city || "Eldorado";

  const payload = {
  fullName: data.get("fullName"),
  email: data.get("email"),
  phone: data.get("phone"),
  investmentBudget: data.get("investmentBudget"),
  yourInterest: data.get("yourInterest"),
  city: cityFromUrl
  };

  const response = await fetch("/api/mandate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
  setSubmitted(true);
  form.reset();
} else {
  alert("Submission failed");
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
  Invest in {cityName}
</h1>

      {city && (
        <p style={{ marginBottom: "20px", color: "#d4af37", letterSpacing: "0.08em" }}>
          Investment Focus: {city.toUpperCase()}
        </p>
      )}

      <p style={{
  fontSize: "clamp(16px, 4vw, 18px)",
  maxWidth: "650px",
  lineHeight: "1.6",
  opacity: 0.85,
  marginBottom: "40px"
}}>
  Private Mandate Access — A confidential gateway to exclusive, high-yield real estate opportunities in {cityName}. Access is strictly reserved for qualified investors and strategic capital partners.
</p>

      {submitted && (
  <div
    ref={successRef}
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

          <div style={{ marginTop: "40px", textAlign: "center" }}>
  <a
    href="/"
    style={{
      display: "inline-block",
      padding: "14px 32px",
      border: "1px solid rgba(212,175,55,0.4)",
      borderRadius: "40px",
      color: "#d4af37",
      fontSize: "clamp(13px, 2.5vw, 15px)",
      letterSpacing: "0.08em",
      background: "rgba(212,175,55,0.06)",
      textDecoration: "none",
      transition: "all 0.25s ease",
      maxWidth: "90%"
    }}
  >
    Return to Hompage
  </a>
</div>
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
          <input name="fullName" placeholder="Full Name" style={inputStyle} required />
          <input name="email" placeholder="Email" style={inputStyle} type="email" required />
          <input
            type="tel"
            name="phone"
            placeholder="Country Code + Phone Number"
            style={inputStyle}
            required
          />
          <input name="investmentBudget" placeholder="Investment Budget (€)" style={inputStyle} required />

          <textarea
            name="yourInterest"
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
