'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const identityTypes = [
  'Institutional', 'Sovereign Fund', 'Private Investor', 'Family Office',
  'UHNWI', 'Icon / Global Public Figure', 'Government Entity',
  'Strategic Developer', 'Strategic Capital Partner',
];

const channels = [
  'Encrypted Email', 'Confidential Call', 'Private Meeting', 'Representative Contact',
];

const capitalLevels = [
  '$25M+', '$50M+', '$100M+', '$500M+', '$1B+',
];

const mandateTypes = [
  'Asset Acquisition', 'Market Engineering', 'FDI Strategy',
  'Sovereign Advisory', 'Private Wealth Structuring', 'Off-Market Real Estate',
  'Trophy Asset Acquisition', 'Hospitality Asset Strategy',
  'Emerging Eldorado Intelligence', 'Future Wealth Zone Identification',
  'Pre-Market Capital Deployment', 'Confidential Strategic Brief',
];

const SelectField = ({
  label, name, options, required,
}: {
  label: string; name: string; options: string[]; required?: boolean;
}) => (
  <div>
    <label
      style={{
        display: 'block',
        fontFamily: 'Inter, sans-serif',
        fontSize: '0.6rem',
        fontWeight: 500,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: 'rgba(201,168,76,0.7)',
        marginBottom: '0.5rem',
      }}
    >
      {label} {required && <span style={{ color: 'rgba(201,168,76,0.4)' }}>*</span>}
    </label>
    <div className="select-wrapper">
      <select name={name} required={required} className="mandate-field">
        <option value="">Select {label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  </div>
);

export default function MandateGateway() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', notes: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const data = new FormData(form);

  data.append("access_key", "57cc01e7-366f-45ea-ba3c-b04a3ef99532");
  data.append("subject", "New Strategic Mandate Request - HAYTEM SOVEREIGN");

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: data,
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.success) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Submission failed. Please try again.");
      }
    })
    .catch(() => {
      alert("Error sending form.");
    });
}
  if (submitted) {
  return (
    <section className="section-padding texture-overlay">
      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>

        <h2 style={{ marginBottom: "1rem", color: "#d4af37" }}>
          Confidential Request Received
        </h2>

        <p style={{ marginBottom: "1rem" }}>
          Your investment request has been received. Our private desk will review the information carefully and respond only if the mandate aligns with our confidential opportunity pipeline.
        </p>

        <p style={{ marginBottom: "2rem", opacity: 0.75 }}>
          Our team typically reviews confidential mandates within 24–72 hours.
        </p>

        <a href="/" className="btn-primary">
          Return to Homepage
        </a>

      </div>
    </section>
  );
}
  return (
    <section
      id="mandate"
      className="section-padding texture-overlay"
      ref={ref}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #0A0A0A 0%, #0C0B00 50%, #0A0A0A 100%)',
      }}
    >
      {/* Decorative border */}
      <div
        style={{
          position: 'absolute',
          inset: '3rem',
          border: '1px solid rgba(201,168,76,0.04)',
          pointerEvents: 'none',
        }}
      />

      <div className="sovereign-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <p className="section-label" style={{ marginBottom: '1.5rem' }}>
            XIV — Private Access Gateway
          </p>

          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 6vw, 6rem)',
              fontWeight: 300,
              lineHeight: 1.0,
              color: '#F5F0E8',
              marginBottom: '1.5rem',
            }}
          >
            Initialize
            <br />
            <span className="gold-text">Strategic Protocol.</span>
          </h2>

          <div className="gold-line" style={{ marginBottom: '2rem' }} />

          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1rem',
              fontWeight: 300,
              lineHeight: 1.6,
              color: 'rgba(245, 240, 232, 0.45)',
              letterSpacing: '0.02em',
              maxWidth: '520px',
              margin: '0 auto',
            }}
          >
            Access subject to confidential review. Mandates accepted only where strategic alignment
            exists. All submissions are treated with absolute discretion.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          {submitted ? (
            <div
              style={{
                padding: '4rem',
                border: '1px solid rgba(201,168,76,0.2)',
                background: 'rgba(201,168,76,0.03)',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '3rem',
                  color: 'rgba(201,168,76,0.4)',
                  marginBottom: '1.5rem',
                }}
              >
                ◆
              </div>
              <h3
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '2rem',
                  fontWeight: 300,
                  color: '#F5F0E8',
                  marginBottom: '1rem',
                }}
              >
                Protocol Initiated.
              </h3>
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '0.97rem',
                  fontWeight: 300,
                  lineHeight: 1.65,
                  color: 'rgba(245, 240, 232, 0.45)',
                  letterSpacing: '0.02em',
                }}
              >
                Your mandate request has been received. Our confidential review process has been initiated.
                You will be contacted through your preferred channel upon completion of strategic alignment assessment.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Classification header */}
              <div
                style={{
                  padding: '1rem 1.5rem',
                  border: '1px solid rgba(201,168,76,0.15)',
                  background: 'rgba(201,168,76,0.03)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span className="micro-label">Mandate Classification — Confidential</span>
                <span className="micro-label" style={{ color: 'rgba(245,240,232,0.2)' }}>
                  HAYTEM SOVEREIGN · Private Capital Desk
                </span>
              </div>

              {/* Row 1 */}
              <div className="grid-form" style={{ gap: '1rem' }}>
                <SelectField label="Identity Type" name="identity" options={identityTypes} required />
                <SelectField label="Secure Communication Channel" name="channel" options={channels} required />
              </div>

              {/* Row 2 */}
              <div className="grid-form" style={{ gap: '1rem' }}>
                <SelectField label="Capital Commitment" name="capital" options={capitalLevels} required />
                <SelectField label="Mandate Type" name="mandate_type" options={mandateTypes} required />
              </div>

              {/* Row 3 — Contact */}
              <div className="grid-form" style={{ gap: '1rem' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.6rem',
                      fontWeight: 500,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'rgba(201,168,76,0.7)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Representative Name <span style={{ color: 'rgba(201,168,76,0.4)' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Full Name or Representative"
                    className="mandate-field"
                    value={formData.name}
                    onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.6rem',
                        fontWeight: 500,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'rgba(201,168,76,0.7)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      Secure Email Address <span style={{ color: 'rgba(201,168,76,0.4)' }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="mandate@yourdomain.com"
                      className="mandate-field"
                      value={formData.email}
                      onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.6rem',
                        fontWeight: 500,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'rgba(201,168,76,0.7)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      Phone Number <span style={{ color: 'rgba(201,168,76,0.4)' }}>*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+(country code) xxx xxx"
                      autoComplete="tel"
                      inputMode="tel"
                      className="mandate-field"
                      value={formData.phone}
                      onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                    />
                  </div>
                </div>
              </div>

              {/* Confidential notes */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.6rem',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'rgba(201,168,76,0.7)',
                    marginBottom: '0.5rem',
                  }}
                >
                  Confidential Brief (Optional)
                </label>
                <textarea
                  name="notes"
                  rows={4}
                  placeholder="Provide context for your mandate inquiry. All content is treated with absolute discretion."
                  className="mandate-field"
                  value={formData.notes}
                  onChange={e => setFormData(p => ({ ...p, notes: e.target.value }))}
                  style={{ resize: 'vertical', fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              {/* Disclaimer */}
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.62rem',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: 'rgba(245, 240, 232, 0.25)',
                  letterSpacing: '0.03em',
                  textAlign: 'center',
                  padding: '0 2rem',
                }}
              >
                By submitting this mandate request, you confirm that you are engaging in good faith
                and that all information provided will be treated with absolute discretion by
                HAYTEM SOVEREIGN Private Capital Desk.
              </p>

              {/* Submit */}
              <div style={{ textAlign: 'center', paddingTop: '1rem' }}>
                <button type="submit" className="btn-primary" style={{ minWidth: '280px', cursor: 'pointer' }}>
                  Execute Mandate
                </button>
              </div>
            </form>
          )}

          {/* Contact info below form */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ marginTop: '4rem', textAlign: 'center' }}
          >
            <div className="gold-line" style={{ marginBottom: '2.5rem' }} />
            <p className="micro-label" style={{ marginBottom: '1rem' }}>
              Private Capital Desk
            </p>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1rem',
                fontWeight: 300,
                color: 'rgba(245, 240, 232, 0.5)',
                letterSpacing: '0.05em',
                lineHeight: 1.8,
                marginBottom: '0.75rem',
              }}
            >
              60 Paya Lebar Road #06-28, Paya Lebar Square
              <br />
              Singapore 409051
            </p>
            <a
              href="mailto:mandate@haytemsovereign.com"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 400,
                letterSpacing: '0.1em',
                color: '#C9A84C',
                textDecoration: 'none',
                transition: 'opacity 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              mandate@haytemsovereign.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
