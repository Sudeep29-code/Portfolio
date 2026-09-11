import React from 'react'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Backend & APIs',
      badge: 'Core Focus',
      highlight: true,
      skills: ['Flask', 'FastAPI', 'REST APIs', 'Backend Architecture', 'Server Logic']
    },
    {
      title: 'Languages & Problem Solving',
      badge: 'DSA in Java',
      highlight: true,
      skills: ['Java (Data Structures & Algorithms)', 'Python', 'C']
    },
    {
      title: 'Database Management Systems',
      badge: 'Strong Core',
      highlight: true,
      skills: ['MySQL', 'Relational Schema Design', 'Query Optimization', 'DBMS Principles', 'Data Normalization']
    },
    {
      title: 'AI, ML & GenAI',
      badge: 'Intelligence',
      skills: ['GenAI Integration', 'Scikit-learn', 'Pandas', 'NumPy', 'Computer Vision Basics']
    },
    {
      title: 'Frontend Development',
      badge: 'Web UI',
      skills: ['HTML5', 'CSS3 / Modern Layouts', 'JavaScript', 'Responsive Design', 'Glassmorphism UI']
    },
    {
      title: 'Developer Tools & Platforms',
      badge: 'Workflow',
      skills: ['Git', 'GitHub', 'Version Control', 'VS Code', 'LinkedIn']
    }
  ]

  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Technical Competencies</span>
          <h2 id="skills-heading" className="section-title">Skills & Tech Stack</h2>
          <p className="section-subtitle">
            Grounded in core Computer Science fundamentals: algorithmic problem-solving with Java, robust DBMS principles, and production backend development with Python & MySQL.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="skill-card"
              style={{
                borderColor: cat.highlight ? 'var(--border-accent)' : 'var(--border-subtle)',
                background: cat.highlight ? 'var(--bg-card-hover)' : 'var(--bg-card)'
              }}
            >
              <div className="skill-card-header">
                <h3 className="skill-card-title">{cat.title}</h3>
                <span
                  className="pill-tag"
                  style={{
                    background: cat.highlight ? 'rgba(99, 102, 241, 0.15)' : 'var(--bg-pill)',
                    borderColor: cat.highlight ? 'var(--accent-primary)' : 'var(--border-subtle)'
                  }}
                >
                  {cat.badge}
                </span>
              </div>

              <div className="skill-chips-wrap">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="skill-badge"
                    style={{
                      borderColor: cat.highlight ? 'rgba(99, 102, 241, 0.25)' : 'var(--border-subtle)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
