import React from 'react';
import './About.css';

function About() {
  return (
    <div>
      <header className="brand-header">
        <div className="logo">🚀</div>
        <h1 className="brand-name">AutoBrand</h1>
        <p className="tagline">Transform your startup vision into a powerful brand identity</p>
      </header>

      <div className="container">
        <h1>About Us</h1>
        <p>
          AutoBrand is a simple and powerful tool designed to help entrepreneurs, startups, and innovators instantly
          generate a cohesive brand identity — including a name, tagline, and color scheme — based on their ideas.
        </p>

        <h2>Our Mission</h2>
        <p>
          We believe that branding should be accessible and easy for everyone. Our mission is to empower creators by
          simplifying the early steps of building a brand, saving time, and unlocking creativity.
        </p>

        <h2>How It Works</h2>
        <p>
          Just share your startup idea, industry, and target audience — and we’ll generate a unique brand name, a catchy
          tagline, and a color scheme using intelligent algorithms and creative logic.
        </p>

        <h2>Why AutoBrand?</h2>
        <p>
          Coming up with a brand identity can be overwhelming. AutoBrand provides a jumpstart to entrepreneurs by turning
          ideas into identities in seconds — perfect for pitch decks, landing pages, and MVPs.
        </p>

        <p className="made">
          Made with <span style={{ color: 'red' }}>&hearts;</span> by Team AutoBrand
        </p>

        <footer>
          &copy; 2025 AutoBrand. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default About;
