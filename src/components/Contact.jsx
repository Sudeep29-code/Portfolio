import React, { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'sudeepkumarsurya@gmail.com'

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get in Touch</span>
          <h2 id="contact-heading" className="section-title">Online Profiles & Contact</h2>
          <p className="section-subtitle">
            I am actively seeking software engineering internships (remote or on-site). Let's connect directly via email or explore my repositories and coding profiles.
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct Email Card with 1-click copy */}
          <div
            className="contact-card"
            onClick={copyEmail}
            style={{ cursor: 'pointer' }}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && copyEmail()}
            aria-label="Copy email address"
          >
            <div className="contact-card-icon">✉️</div>
            <div className="contact-card-title">Direct Email</div>
            <div className="contact-card-value">
              {copied ? '✓ Copied to Clipboard!' : email}
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
              {copied ? 'Ready to paste anywhere' : 'Click to copy address'}
            </span>
          </div>

          {/* GitHub Card */}
          <a
            href="https://github.com/Sudeep29-code"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-card-icon">⌥</div>
            <div className="contact-card-title">GitHub</div>
            <div className="contact-card-value">github.com/Sudeep29-code</div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Explore source code & repos ↗
            </span>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://linkedin.com/in/Sudeepsurya29"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-card-icon">in</div>
            <div className="contact-card-title">LinkedIn</div>
            <div className="contact-card-value">linkedin.com/in/Sudeepsurya29</div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Connect professionally ↗
            </span>
          </a>

          {/* LeetCode Card */}
          <a
            href="https://leetcode.com/u/Sudeep29/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-card-icon">⚡</div>
            <div className="contact-card-title">LeetCode</div>
            <div className="contact-card-value">leetcode.com/u/Sudeep29/</div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Problem solving in Java & DSA ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
