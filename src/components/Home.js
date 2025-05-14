import React, { useState } from 'react';
import { useTheme } from './ThemeContext';
import { useForm, ValidationError } from '@formspree/react';

const Home = () => {
  const { colors } = useTheme();
  const [state, handleSubmit] = useForm("mqaqgqwn");

  return (
    <div className="home-container" style={{ backgroundColor: colors.background, color: colors.text }}>
      {/* HERO SECTION */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <h1 className="hero-title">Yücel Aytaç Akgün</h1>
          <p className="hero-subtitle">Computer Engineering Student, Artificial Intelligence & Robotics Enthusiast</p>
          <div className="hero-buttons">
            <a href="#blog" className="hero-btn primary">Blogs</a>
            <a href="#contact" className="hero-btn outline">Contact Me</a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section about-section">
        <h2 className="section-title">About Me</h2>
        <div className="about-card">
          <p className="about-bio">
            I am a computer engineering student specializing in artificial intelligence, robotics, Image Processing, and Computer Vision. I am passionate about technology and innovation.
          </p>
          <div className="skills-bars">
            <div className="skill-bar">
              <span>React</span>
              <div className="bar-bg"><div className="bar-fill" style={{width: '50%'}}></div></div>
            </div>
            <div className="skill-bar">
              <span>JavaScript</span>
              <div className="bar-bg"><div className="bar-fill" style={{width: '65%'}}></div></div>
            </div>
            <div className="skill-bar">
              <span>Python</span>
              <div className="bar-bg"><div className="bar-fill" style={{width: '90%'}}></div></div>
            </div>
            <div className="skill-bar">
              <span>AI</span>
              <div className="bar-bg"><div className="bar-fill" style={{width: '88%'}}></div></div>
            </div>
            <div className="skill-bar">
              <span>Robotics</span>
              <div className="bar-bg"><div className="bar-fill" style={{width: '85%'}}></div></div>
            </div>
            <div className="skill-bar">
              <span>Java</span>
              <div className="bar-bg"><div className="bar-fill" style={{width: '70%'}}></div></div>
            </div>
            <div className="skill-bar">
              <span>C#</span>
              <div className="bar-bg"><div className="bar-fill" style={{width: '72%'}}></div></div>
            </div>
            <div className="skill-bar">
              <span>C</span>
              <div className="bar-bg"><div className="bar-fill" style={{width: '80%'}}></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG/WORKS SECTION */}
      <section id="blog" className="section works-section">
        <h2 className="section-title">Blogs</h2>
        <div className="works-grid">
          <div className="work-card">
            <div className="work-title">Controlling SMD Mobile Robots with Groq Cloud</div>
            <div className="work-meta">Technology • March 12, 2024 • 10 min read</div>
            <div className="work-desc">A detailed review on controlling SMD mobile robots with the Groq Cloud...</div>
            <a href="https://acrome.net/post/controlling-smd-mobile-robots-with-groq" className="work-btn">Read More →</a>
          </div>
          <div className="work-card">
            <div className="work-title">Delta Robot and Conveyor Example</div>
            <div className="work-meta">Technology • March 10, 2024 • 10 min read</div>
            <div className="work-desc">An automation example with delta robots and conveyor...</div>
            <a href="https://acrome.net/post/delta-robot-and-conveyor-example-a-glimpse-into-industrial-automation" className="work-btn">Read More →</a>
          </div>
        </div>
      </section>

      {/* CV SECTION */}
      <section id="cv" className="section cv-section">
        <h2 className="section-title">CV</h2>
        <div className="cv-card">
          <p className="cv-desc">
            I am a Computer Engineering student with a passion for Artificial Intelligence and Robotics. 
            You can download my detailed CV to learn more about my education, skills, and experience.
          </p>
          <div className="cv-buttons">
            <a 
              href="/cv/yucel-aytac-akgun-cv.pdf" 
              download 
              className="cv-download-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section contact-section">
        <h2 className="section-title">Contact</h2>
        {state.succeeded ? (
          <div className="success-message">
            <p>Thank you for your message! I'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form minimal-form">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
            <textarea
              name="message"
              placeholder="Your message"
              required
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            <button 
              type="submit" 
              className="hero-btn primary" 
              style={{maxWidth: 220, margin: '0 auto'}}
              disabled={state.submitting}
            >
              {state.submitting ? 'Sending...' : 'Send'}
            </button>
          </form>
        )}
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-socials">
            <a href="https://linkedin.com/in/yücel-aytaç-akgün-358130227" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="24" height="24" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg></a>
            <a href="https://github.com/Aytacus" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><svg width="24" height="24" fill="currentColor"><path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.625-5.475 5.922.43.37.823 1.096.823 2.21 0 1.595-.015 2.88-.015 3.27 0 .32.218.694.825.576 4.765-1.587 8.2-6.086 8.2-11.385 0-6.63-5.37-12-12-12z"/></svg></a>
          </div>
          <div className="footer-copy">© 2025 Yücel Aytaç Akgün. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default Home; 