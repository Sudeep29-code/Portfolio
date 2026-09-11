import React from 'react'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Background & Philosophy</span>
          <h2 id="about-heading" className="section-title">About Me</h2>
          <p className="section-subtitle">
            Engineering scalable backend pipelines, autonomous AI agents, and code intelligence engines.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-narrative">
            <p>
              I am a <strong>2nd-year Computer Science student at GIET University (9.21 CGPA)</strong> with hands-on experience in full-stack web development and GenAI integration.
            </p>
            <p>
              Experienced in <strong>Java, Python, Flask, and MySQL</strong> with practical project experience in AI-based healthcare systems, <strong>Rosetta AI</strong> (cross-compiler AI that translates code across programming languages), and <strong>Lunaar AI</strong> (computer vision & pathfinding system that detects terrains and surface hazards for rovers to compute optimal, obstacle-free landing and exploration paths).
            </p>
            <p>
              Actively seeking a <strong>Software Engineering internship</strong> where I can contribute to mission-critical, high-impact products alongside seasoned engineering teams.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <div className="award-card">
              <span className="award-badge-tag">🏆 Hackathon Distinction</span>
              <h3 className="award-title">External Jury Award</h3>
              <p className="award-details">
                <strong>Hackathon (GIET University) · 2026</strong><br />
                Awarded with team <em>ExploreX</em> for architecting and deploying an AI-integrated hospital queue optimization system.
              </p>
            </div>

            <div className="award-card" style={{ background: 'var(--bg-canvas-subtle)' }}>
              <span className="pill-tag" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>
                Competitive Experience
              </span>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Hackathon Veteran
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    Rapid prototyping, full-stack builds & system design
                  </p>
                </div>
                <div style={{ 
                  fontSize: '2rem', 
                  fontWeight: 800, 
                  fontFamily: 'var(--font-mono)', 
                  color: 'var(--accent-primary)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-pill)',
                  border: '1px solid var(--border-subtle)'
                }}>
                  03
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
