import React from 'react'

export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Information, Headlines, Badges, CTAs */}
          <div className="hero-left">
            <div className="hero-status-badge">
              <span className="status-dot"></span>
              <span>Computer Science Student · 2nd Year GIET University · 📍 Gunupur, India</span>
            </div>

            <h1 id="hero-heading" className="hero-title">
              <span className="hero-name-line">SUDEEP KUMAR</span>
              <span className="hero-name-line gradient-text">SURYA</span>
            </h1>

            <h2 className="hero-tagline-sub">
              Backend Developer & Aspiring SDE.
            </h2>

            <p className="hero-bio">
              Hi, I'm <strong>Sudeep</strong> — a second-year Computer Science Engineering student (9.21 CGPA) who specializes in building reliable backend systems, intelligent APIs, and AI-driven platforms with Java, Python, Flask, and MySQL.
            </p>

            <div className="hero-pills-row">
              <span className="hero-pill-badge">⚡ DSA in Java</span>
              <span className="hero-pill-badge">🏆 External Jury Award @ HackNovation</span>
              <span className="hero-pill-badge">Python · Flask · MySQL</span>
              <span className="hero-pill-badge">GenAI Integration</span>
            </div>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <span>View Selected Projects</span>
                <span>→</span>
              </a>
              <a 
                href="/Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
              >
                <span>Download Resume</span>
                <span>↓</span>
              </a>
              <a href="#contact" className="btn btn-secondary">
                <span>Let's Connect</span>
              </a>
            </div>
          </div>

          {/* Right Column: Beautiful Editorial Portrait Card */}
          <div className="hero-right">
            <div className="hero-photo-card">
              <div className="hero-photo-frame">
                <img
                  src="/profile.jpg"
                  alt="Sudeep Kumar Surya"
                  className="hero-photo-img"
                  loading="eager"
                />
              </div>
              <div className="hero-photo-caption">
                <h3 className="hero-photo-name">Sudeep Kumar Surya</h3>
                <p className="hero-photo-meta">GIET University · B.Tech CSE</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links Bar */}
        <div className="hero-socials">
          <a
            href="https://github.com/Sudeep29-code"
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill"
          >
            <span>GitHub</span>
            <span>↗</span>
          </a>
          <a
            href="https://linkedin.com/in/Sudeepsurya29"
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill"
          >
            <span>LinkedIn</span>
            <span>↗</span>
          </a>
          <a
            href="https://leetcode.com/u/Sudeep29/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill"
          >
            <span>LeetCode</span>
            <span>↗</span>
          </a>
          <span className="social-pill" style={{ opacity: 0.8 }}>
            <span>Available for Internships · Remote / On-site</span>
          </span>
        </div>
      </div>
    </section>
  )
}
