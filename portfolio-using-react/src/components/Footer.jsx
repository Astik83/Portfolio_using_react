import './Footer.css';
import { socialLinks } from '../data/socialLinks';

export function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2025 Astik's Portfolio. All rights reserved.</p>
        <div className="social-links">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-icon ${link.className}`}
              aria-label={link.name}
            >
              <i className={link.iconClass}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
