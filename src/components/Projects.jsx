import React, { useState } from 'react'

export default function Projects() {
  const [activeModal, setActiveModal] = useState(null)
  const [filter, setFilter] = useState('all')

  const projectsData = [
    {
      id: 'hospital-queue',
      category: 'ai-backend',
      title: 'AI-Based Hospital Queue Optimization System',
      badge: 'Featured · Hackathon Award Winner',
      tagline: 'Predictive patient queuing & appointment optimization platform',
      description:
        'An intelligent healthcare queue orchestration platform engineered to minimize outpatient wait times, forecast appointment duration using machine learning, and streamline clinic triage.',
      specs: [
        'Developed an AI system predicting consultation duration based on triage symptoms and clinic history.',
        'Engineered smart token generation and dynamic slot scheduling to reduce hospital congestion.',
        'Integrated machine learning models (Random Forest, ARIMA time series) and SHAP explainability values.'
      ],
      stack: ['Python', 'Flask', 'MySQL', 'Scikit-learn', 'Pandas', 'NumPy', 'HTML/CSS/JS'],
      github: 'https://github.com/Sudeep29-code',
      metrics: [
        { value: '35%↓', label: 'Congestion Reduction' },
        { value: '91.4%', label: 'Prediction Accuracy' },
        { value: 'XAI', label: 'SHAP Explainability' }
      ],
      architecture: [
        {
          title: '1. Intelligent Triage & Token Generation',
          detail: 'Patients receive algorithmic smart tokens prioritizing urgent triage classifications and smoothing outpatient congestion spikes.'
        },
        {
          title: '2. Predictive Duration Engine',
          detail: 'Random Forest models forecast doctor-patient consultation length, dynamically adjusting real-time waiting estimates.'
        },
        {
          title: '3. Queue Optimization & Storage Layer',
          detail: 'MySQL relational backend handles concurrent patient states with Flask REST APIs serving live queue updates.'
        }
      ]
    },
    {
      id: 'rosetta-ai',
      category: 'ai-backend',
      title: 'Rosetta AI — Cross-Language Code Intelligence',
      badge: 'AI Systems · Code LLM',
      tagline: 'Autonomous multi-language code translation and semantics preserver',
      description:
        'An intelligent code converter and polyglot translation system that accurately converts source code from one programming language to another while maintaining idioms, typing semantics, and syntactic correctness.',
      specs: [
        'Multi-language translation engine converting between Python, Java, C++, and JavaScript.',
        'Preserves logic structure, variable contexts, and control flow across dissimilar syntax paradigms.',
        'Built with Python backend integrating GenAI prompt engineering and syntax validation checkpoints.'
      ],
      stack: ['Python', 'GenAI / LLMs', 'Flask', 'AST Parsing', 'Prompt Engineering'],
      github: 'https://github.com/Sudeep29-code/RosettaAi',
      metrics: [
        { value: 'Polyglot', label: 'Multi-Language Translation' },
        { value: 'Zero-Leak', label: 'Semantic Preservation' },
        { value: 'FastAPI', label: 'Inference Backend' }
      ],
      architecture: [
        {
          title: '1. Source Parsing & Context Extraction',
          detail: 'Analyzes incoming code syntax, structural abstractions, and algorithmic intent before intermediate representation.'
        },
        {
          title: '2. Semantic Translation Engine',
          detail: 'Leverages GenAI model pipelines conditioned with strict syntax rules and language-specific target idioms.'
        },
        {
          title: '3. Validation & Syntax Formatting',
          detail: 'Post-processes translated code through automated linting and syntax verifications before returning to user.'
        }
      ]
    },
    {
      id: 'lunaar-ai',
      category: 'computer-vision',
      title: 'Lunar AI — Rover Hazard Detection & Pathfinding',
      badge: 'Computer Vision & Robotics',
      tagline: 'Autonomous extraterrestrial surface navigation & hazard avoidance',
      description:
        'A computer vision and autonomous pathfinding system that detects hazardous lunar terrain, craters, boulders, and steep inclines to calculate optimal safe landing zones and navigate rovers safely to their destinations.',
      specs: [
        'Computer vision pipelines analyzing terrain elevation, surface roughness, crater boundaries, and rock obstacles.',
        'Calculates optimal, hazard-free touchdown coordinates for planetary landing modules.',
        'Generates smooth, safe waypoints and trajectories guiding rover mobility through safe passages.'
      ],
      stack: ['Python', 'Computer Vision', 'Pathfinding Algorithms', 'Hazard Mapping', 'Autonomous Systems'],
      github: 'https://github.com/AdityaNathChoudhary/Lunar_AI',
      metrics: [
        { value: 'Autonomous', label: 'Real-time Hazard Mapping' },
        { value: 'Safe-Path', label: 'Waypoint Trajectory' },
        { value: 'Vision AI', label: 'Terrain Segmentation' }
      ],
      architecture: [
        {
          title: '1. Surface Hazard Detection',
          detail: 'Identifies boulders, steep elevation gradients, and crater depressions from aerial/sensor surface imagery.'
        },
        {
          title: '2. Landing Zone Scoring Matrix',
          detail: 'Computes safety probability coefficients across candidate touchdown squares based on obstacle clearance.'
        },
        {
          title: '3. Path Planning & Navigation',
          detail: 'Calculates the optimal cost path dodging all detected hazards to reach target coordinates safely.'
        }
      ]
    },
    {
      id: 'fastest-cars',
      category: 'web',
      title: "World's Fastest Cars — Interactive Showcase",
      badge: 'Frontend Engineering',
      tagline: 'High-performance glassmorphism editorial UI with smooth navigation',
      description:
        'A sleek, responsive single-page editorial experience celebrating the world’s pinnacle hypercars. Engineered with clean semantic markup, CSS Grid layouts, and backdrop glassmorphism aesthetics.',
      specs: [
        'Interactive Hero Section: Click on hypercars to smoothly scroll down and reveal detailed technical specifications.',
        'Futuristic Glassmorphism: Engineered with multi-layered CSS backdrop-filter for a fluid, ultra-clean aesthetic.',
        'Zero Bloat & Fluid Responsive: Adapts seamlessly across desktop multi-column grids down to mobile devices.'
      ],
      stack: ['HTML5', 'CSS3 Glassmorphism', 'JavaScript', 'CSS Grid / Flexbox', 'Responsive Design'],
      github: 'https://github.com/Sudeep29-code/World-s-Fastest-Cars',
      metrics: [
        { value: '60 FPS', label: 'Smooth Transitions' },
        { value: '100', label: 'Lighthouse Performance' },
        { value: 'Glass UI', label: 'Backdrop Filter Design' }
      ],
      architecture: [
        {
          title: '1. Dynamic Navigation & Smooth Scroll',
          detail: 'Coordinate-based scroll listeners navigating users smoothly between vehicle showcases and spec sheets.'
        },
        {
          title: '2. Visual Hierarchy & Glass Design',
          detail: 'Engineered with tailored blur filters, high-contrast typography, and adaptive responsive breakpoints.'
        }
      ]
    }
  ]

  const filteredProjects =
    filter === 'all'
      ? projectsData
      : projectsData.filter(p => p.category === filter || (filter === 'ai' && p.category.includes('ai')))

  const selectedModalProject = projectsData.find(p => p.id === activeModal)

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Engineering Portfolio</span>
          <h2 id="projects-heading" className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Exploring backend architectures, computer vision, code intelligence models, and high-performance applications.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: 'var(--space-8)', flexWrap: 'wrap' }}>
          {[
            { key: 'all', label: 'All Projects' },
            { key: 'ai', label: 'AI & Backend Systems' },
            { key: 'computer-vision', label: 'Computer Vision & Robotics' },
            { key: 'web', label: 'Web & UI' }
          ].map(tab => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setFilter(tab.key)}
              className="pill-tag"
              style={{
                cursor: 'pointer',
                background: filter === tab.key ? 'var(--accent-primary)' : 'var(--bg-pill)',
                color: filter === tab.key ? '#FFFFFF' : 'var(--text-primary)',
                borderColor: filter === tab.key ? 'var(--accent-primary)' : 'var(--border-subtle)',
                transition: 'all var(--transition-fast)',
                padding: '0.4rem 1rem',
                fontSize: '0.8rem'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Showcase List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          {filteredProjects.map(proj => (
            <div key={proj.id} className="project-card-featured">
              <div className="project-main-info">
                <div className="project-meta-bar">
                  <span className="pill-tag">{proj.badge}</span>
                </div>

                <h3 className="project-title">{proj.title}</h3>
                <p style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                  {proj.tagline}
                </p>

                <p className="project-desc">{proj.description}</p>

                <ul className="project-specs-list">
                  {proj.specs.map((spec, sIdx) => (
                    <li key={sIdx}>{spec}</li>
                  ))}
                </ul>

                <div className="tech-stack-wrap">
                  {proj.stack.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setActiveModal(proj.id)}
                  >
                    <span>System Architecture</span>
                    <span>⚡</span>
                  </button>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <span>Source Code</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>

              {/* Metrics Sidebar */}
              <div className="project-metrics-panel">
                {proj.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="metric-item">
                    <div className="metric-value">{m.value}</div>
                    <div className="metric-label">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Project Architecture Modal */}
        {selectedModalProject && (
          <div className="modal-overlay" onClick={() => setActiveModal(null)}>
            <div
              className="modal-content"
              onClick={e => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setActiveModal(null)}
                aria-label="Close modal"
              >
                ✕
              </button>

              <span className="pill-tag" style={{ marginBottom: '1rem', display: 'inline-block' }}>
                {selectedModalProject.badge}
              </span>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                {selectedModalProject.title}
              </h3>
              <p style={{ color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '1.25rem' }}>
                {selectedModalProject.tagline}
              </p>

              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                {selectedModalProject.description}
              </p>

              <div style={{ display: 'grid', gap: '1rem', marginBottom: '1.75rem' }}>
                {selectedModalProject.architecture.map((arch, aIdx) => (
                  <div
                    key={aIdx}
                    style={{
                      padding: '1rem',
                      background: 'var(--bg-canvas-subtle)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <h4 style={{ fontWeight: 700, marginBottom: '0.25rem', color: 'var(--accent-primary)' }}>
                      {arch.title}
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {arch.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a
                  href={selectedModalProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                >
                  <span>Open GitHub Repository</span>
                  <span>↗</span>
                </a>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setActiveModal(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
