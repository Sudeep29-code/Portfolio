import React from 'react'

export default function Education() {
  const educationItems = [
    {
      degree: 'B.Tech — Computer Science Engineering',
      institution: 'GIET University',
      details: '2025–2029 · CGPA 8.7'
    },
    {
      degree: 'Intermediate',
      institution: 'Jawahar Navodaya Vidyalaya, Rayagada',
      details: 'CBSE · 2025 · 80%'
    },
    {
      degree: 'Matriculation',
      institution: 'Sacred Heart School, Rayagada',
      details: 'ICSE · 2023 · 78%'
    }
  ]

  return (
    <section id="education" aria-labelledby="education-heading">
      <h2 id="education-heading">Education</h2>
      <div className="education-list">
        {educationItems.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree}</h3>
            <p><strong>{edu.institution}</strong></p>
            <p>{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
