import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './SocialLinks.css';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub size={24} />,
      url: 'https://github.com/kareldrnec', // Replace with your GitHub URL
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={24} />,
      url: 'https://linkedin.com/in/kareldrnec', // Replace with your LinkedIn URL
    },
  ];

  return (
    <div className="social-links">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label={`Visit my ${link.name} profile`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks; 