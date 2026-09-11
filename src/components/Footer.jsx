import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <p>© {currentYear} Sudeep Kumar Surya · Engineered with React & Modern CSS</p>
          </div>
          <div>
            <a href="#hero" className="footer-back-top">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
