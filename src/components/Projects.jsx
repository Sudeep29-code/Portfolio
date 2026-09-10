import React from 'react'

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading">Featured Project</h2>
      <div className="project-card">
        <h3>Hospital Queue Management System</h3>
        <ul className="project-bullets">
          <li>AI-driven system designed to improve hospital patient queue and appointment management.</li>
          <li>Uses machine learning for consultation-duration and no-show prediction.</li>
          <li>Includes queue optimization, scheduling, forecasting, and explainable AI concepts.</li>
        </ul>
        <p>
          <strong>Technology focus:</strong> Python, Flask, MySQL, Random Forest, ARIMA, and SHAP.
        </p>
      </div>
    </section>
  )
}
