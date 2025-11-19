import React from 'react';
import { useTheme } from './ThemeContext'; 

const Navbar = () => {
  const { theme, toggleTheme, colors } = useTheme();

  return (
    <nav className="navbar" style={{ backgroundColor: colors.background, color: colors.text, borderBottom: `1px solid ${colors.text}20` }}>
      <div className="navbar-content">
        <div className="navbar-logo" style={{ color: colors.text }}>
            Yücel Aytaç Akgün
        </div>
        
        <ul className="navbar-links">
          {/* Her bir linke colors.text rengini uyguluyoruz */}
          <li><a href="#home" style={{ color: colors.text }}>Home</a></li>
          <li><a href="#about" style={{ color: colors.text }}>About</a></li>
          <li><a href="#projects" style={{ color: colors.text }}>Projects</a></li>
          <li><a href="#blog" style={{ color: colors.text }}>Blogs</a></li>
          <li><a href="#contact" style={{ color: colors.text }}>Contact</a></li>
        </ul>

        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;