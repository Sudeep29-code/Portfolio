import React from 'react'

export default function Education() {
  const educationItems = [
    {
      degree: 'B.Tech — Computer Science & Engineering',
      institution: 'GIET University, Gunupur',
      period: '2025 – 2029',
      score: 'Current Score: CGPA 9.21 / 10',
      badge: 'Undergraduate Degree',
      focus: 'Data Structures & Algorithms (Java), DBMS (MySQL), Software Engineering, GenAI Integration'
    },
    {
      degree: 'Class XII — Senior Secondary (CBSE)',
      institution: 'Jawahar Navodaya Vidyalaya (JNV)',
      period: '2023 – 2025',
      score: 'Percentage: 80%',
      badge: 'CBSE Board',
      focus: 'Physics, Chemistry, Mathematics & Computer Science'
    },
    {
      degree: 'Class X — Secondary School (ICSE)',
      institution: 'Sacred Heart School (SHS)',
      period: '2022 – 2023',
      score: 'Percentage: 78%',
      badge: 'ICSE Board',
      focus: 'Foundation Sciences, Mathematics & Computer Applications'
    }
  ]

  return (
    <section id="education" aria-labelledby="education-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Academic Foundations</span>
          <h2 id="education-heading" className="section-title">Education</h2>
          <p className="section-subtitle">
            Formal engineering education and foundational coursework across computer science, quantitative problem solving, and science disciplines.
          </p>
        </div>

        <div className="education-timeline">
          {educationItems.map((edu, index) => (
            <div key={index} className="education-node">
              <div className="education-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <h3 className="education-degree">{edu.degree}</h3>
                  <span className="pill-tag">{edu.badge}</span>
                </div>
                <div className="education-institution">{edu.institution}</div>
                <div className="education-meta">
                  <span>{edu.period}</span> · <strong style={{ color: 'var(--text-primary)' }}>{edu.score}</strong>
                </div>
                <p style={{ marginTop: '0.65rem', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {edu.focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
