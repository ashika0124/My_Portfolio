import React, { useState, useEffect } from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope,
  FaArrowUp,
  FaHeart,
  FaCode
} from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import './Footer.css';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { personal } = portfolioData;
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: `https://${personal.github}`,
      name: 'GitHub'
    },
    {
      icon: <FaLinkedin />,
      url: `https://${personal.linkedin}`,
      name: 'LinkedIn'
    },
    {
      icon: <SiLeetcode />,
      url: `https://${personal.leetcode}`,
      name: 'LeetCode'
    },
    {
      icon: <SiHackerrank />,
      url: `https://${personal.hackerrank}`,
      name: 'HackerRank'
    },
    {
      icon: <FaEnvelope />,
      url: `mailto:${personal.email}`,
      name: 'Email'
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          {/* Main Footer Content */}
          <div className="footer-main">
            {/* About Column */}
            <div className="footer-section footer-about">
              <h3 className="footer-logo">{personal.name}</h3>
              <p className="footer-tagline">
                {personal.title}
              </p>
              <p className="footer-description">
                Building scalable backend solutions with Java, Spring Boot, and modern technologies. 
                Passionate about clean code and system design.
              </p>
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label={social.name}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="footer-section footer-links">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="footer-section footer-contact">
              <h4>Contact Info</h4>
              <ul className="contact-list">
                <li>
                  <FaEnvelope />
                  <a href={`mailto:${personal.email}`}>{personal.email}</a>
                </li>
                <li>
                  <FaEnvelope />
                  <span>{personal.phone}</span>
                </li>
                <li>
                  <FaEnvelope />
                  <span>{personal.location}</span>
                </li>
              </ul>
            </div>

            {/* Newsletter/CTA Column */}
            <div className="footer-section footer-cta">
              <h4>Let's Connect</h4>
              <p>Open to new opportunities and collaborations.</p>
              <a href="#contact" className="cta-button">
                Get In Touch
              </a>
              <div className="availability-badge">
                <span className="availability-dot"></span>
                Available for work
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="footer-divider"></div>

          {/* Bottom Footer */}
          <div className="footer-bottom">
            <div className="copyright">
              <p>
                © {new Date().getFullYear()} {personal.name}. All rights reserved.
              </p>
              <p className="made-with">
                Made with <FaHeart className="heart-icon" /> and <FaCode className="code-icon" /> by {personal.name}
              </p>
            </div>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        className={`scroll-to-top ${showScrollTop ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;