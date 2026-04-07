import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload, FaCode } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import './Hero.css';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { personal, summary } = portfolioData;

  const socialLinks = [
    { icon: <FaGithub />, url: `https://${personal.github}`, label: 'GitHub' },
    { icon: <FaLinkedin />, url: `https://${personal.linkedin}`, label: 'LinkedIn' },
    { icon: <SiLeetcode />, url: `https://${personal.leetcode}`, label: 'LeetCode' },
    { icon: <SiHackerrank />, url: `https://${personal.hackerrank}`, label: 'HackerRank' },
  ];

  const handleDownloadResume = () => {
    // For now, this will just log - we'll add the PDF later
    window.open('/Ashika_Backend_developer.pdf', '_blank');    // Later: window.open('/resume.pdf', '_blank');
  };

  const handleContactClick = () => {
    // Smooth scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          {/* Main Content */}
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="wave">👋</span>
              <span>Hello, I'm</span>
            </div>
            
            <h1 className="hero-name">{personal.name}</h1>
            
            <h2 className="hero-title">
              <span className="highlight">{personal.title}</span>
            </h2>
            
            <p className="hero-tagline">{personal.tagline}</p>
            
            <p className="hero-summary">{summary}</p>

            {/* Quick Info */}
            <div className="hero-info">
              <div className="info-item">
                <FaMapMarkerAlt />
                <span>{personal.location}</span>
              </div>
              <div className="info-item">
                <FaEnvelope />
                <a href={`mailto:${personal.email}`}>{personal.email}</a>
              </div>
              <div className="info-item">
                <FaPhone />
                <a href={`tel:${personal.phone}`}>{personal.phone}</a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={handleDownloadResume}>
                <FaDownload />
                Download Resume
              </button>
              <button className="btn btn-secondary" onClick={handleContactClick}>
                <FaEnvelope />
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="hero-social">
              <p className="social-label">Connect with me:</p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.label}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Side Image/Illustration */}
          <div className="hero-image">
            <div className="image-container">
              <div className="code-animation">
                <FaCode className="code-icon" />
              </div>
              <div className="floating-card card-1">
                <span>☕ Java</span>
              </div>
              <div className="floating-card card-2">
                <span>🍃 Spring Boot</span>
              </div>
              <div className="floating-card card-3">
                <span>🗄️ MySQL</span>
              </div>
              <div className="floating-card card-4">
                <span>🐳 Docker</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p>Scroll to explore</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;