import React from 'react'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming',
      skills: 'Java, Python, C, C++, PHP'
    },
    {
      title: 'Web',
      skills: 'HTML, CSS, JavaScript'
    },
    {
      title: 'Backend / Frameworks',
      skills: 'Flask, FastAPI, Java backend technologies'
    },
    {
      title: 'Databases',
      skills: 'MySQL, PostgreSQL, DBeaver'
    },
    {
      title: 'Tools',
      skills: 'Git, GitHub'
    },
    {
      title: 'Additional Focus',
      skills: 'Data Structures & Algorithms, Machine Learning, backend development'
    }
  ]

  return (
    <section id="skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading">Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((item, index) => (
          <div key={index} className="skill-card">
            <h3>{item.title}</h3>
            <p>{item.skills}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
