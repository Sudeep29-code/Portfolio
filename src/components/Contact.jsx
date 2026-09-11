import React, { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const recipientEmail = 'sudeepkumarsurya@gmail.com'

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    opportunityType: 'Technical Internship Opportunity',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleOpenEmail = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.opportunityType} - ${formData.name || 'Inquirer'}`)
    const bodyContent = `Hi Sudeep,

${formData.message || 'I reviewed your portfolio and would like to discuss an opportunity with you.'}

Best regards,
${formData.name || 'Anonymous'}
${formData.email ? `Email: ${formData.email}` : ''}`
    
    const mailtoUrl = `mailto:${recipientEmail}?subject=${subject}&body=${encodeURIComponent(bodyContent)}`
    window.location.href = mailtoUrl
  }

  const copyEmail = () => {
    navigator.clipboard.writeText(recipientEmail)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get in Touch</span>
          <h2 id="contact-heading" className="section-title">Send an Inquiry & Connect</h2>
          <p className="section-subtitle">
            I am actively seeking software engineering internships (remote or on-site). Feel free to send an inquiry directly below or connect through my profiles.
          </p>
        </div>

        {/* Inquiry Form Card matching the reference design */}
        <div className="inquiry-card">
          <div className="inquiry-header">
            <h3 className="inquiry-title">Send an Inquiry</h3>
            <p className="inquiry-subtitle">
              Select your inquiry topic and compose your note. Clicking send will open your default email client with the details pre-filled.
            </p>
          </div>

          <form onSubmit={handleOpenEmail} className="inquiry-form">
            <div className="inquiry-form-row">
              <div className="inquiry-form-group">
                <label htmlFor="inquiry-name" className="inquiry-label">Your Name</label>
                <input
                  id="inquiry-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name or Organization"
                  className="inquiry-input"
                  required
                />
              </div>

              <div className="inquiry-form-group">
                <label htmlFor="inquiry-email" className="inquiry-label">Your Email</label>
                <input
                  id="inquiry-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="inquiry-input"
                  required
                />
              </div>
            </div>

            <div className="inquiry-form-group">
              <label htmlFor="inquiry-type" className="inquiry-label">Opportunity Type</label>
              <select
                id="inquiry-type"
                name="opportunityType"
                value={formData.opportunityType}
                onChange={handleChange}
                className="inquiry-select"
              >
                <option value="Technical Internship Opportunity">Technical Internship Opportunity</option>
                <option value="Full-Time Software Engineer Role">Full-Time Software Engineer Role</option>
                <option value="Freelance / Contract Project">Freelance / Contract Project</option>
                <option value="Hackathon / Collaboration">Hackathon / Collaboration</option>
                <option value="General Technical Inquiry">General Technical Inquiry</option>
              </select>
            </div>

            <div className="inquiry-form-group">
              <label htmlFor="inquiry-message" className="inquiry-label">Message</label>
              <textarea
                id="inquiry-message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hello Sudeep, I reviewed your portfolio and would like to discuss..."
                className="inquiry-textarea"
                required
              ></textarea>
            </div>

            <div className="inquiry-footer">
              <div className="inquiry-recipient" onClick={copyEmail} title="Click to copy email">
                <span className="inquiry-recipient-icon">✉️</span>
                <span>Recipient: <strong>{recipientEmail}</strong></span>
                {copied && <span className="inquiry-copied-badge">Copied!</span>}
              </div>

              <button type="submit" className="inquiry-submit-btn">
                <span>Open in Email</span>
                <span className="inquiry-send-icon">➤</span>
              </button>
            </div>
          </form>
        </div>

        {/* Supporting Profile Cards */}
        <div className="contact-grid" style={{ marginTop: 'var(--space-8)' }}>
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
              {copied ? '✓ Copied to Clipboard!' : recipientEmail}
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
              {copied ? 'Ready to paste anywhere' : 'Click to copy address'}
            </span>
          </div>

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
