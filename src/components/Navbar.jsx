import React from 'react'

export default function Navbar({ theme, toggleTheme }) {
  return (
    <header id="header">
      <nav id="navbar" aria-label="Main Navigation">
        <a href="#hero" className="brand-link" aria-label="Sudeep Kumar Surya">
          <span className="brand-badge" aria-hidden="true"></span>
          <span>Sudeep.dev</span>
        </a>

        <ul className="nav-links">
          <li><a href="#hero">Overview</a></li>
          <li><a href="#projects">Work</a></li>
          <li><a href="#skills">Stack</a></li>
          <li><a href="#about">Story</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <span>{theme === 'dark' ? '☀️' : '🌙'}</span>
              <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
