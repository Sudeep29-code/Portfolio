import React from 'react'

export default function Navbar({ theme, toggleTheme }) {
  return (
    <header id="header">
      <nav id="navbar" aria-label="Main Navigation">
        <div className="brand-title">Sudeep Kumar Surya</div>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Profiles</a></li>
          <li>
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
