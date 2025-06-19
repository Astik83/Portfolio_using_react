import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Resume } from './pages/Resume';
import './App.css';

function App() {
  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);

    // Remove hash from URL
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname);
    }

    // Nav link highlighting logic
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#nav-links .nav-link');

    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisible = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (
              !mostVisible ||
              entry.intersectionRatio > mostVisible.intersectionRatio
            ) {
              mostVisible = entry.target;
            }
          }
        });

        if (mostVisible) {
          const activeLink = document.querySelector(
            `#nav-links .nav-link[href="#${mostVisible.id}"]`
          );
          if (activeLink) {
            navLinks.forEach((link) => link.classList.remove('active'));
            activeLink.classList.add('active');
          }
        }
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    // Back to top button logic
    const backToTopButton = document.getElementById('backToTop');
    const handleScroll = () => {
      if (backToTopButton) {
        backToTopButton.style.display =
          window.scrollY > 300 ? 'block' : 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              {/* Back to Top Button */}
              <button
                id="backToTop"
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              >
                ↑ Top
              </button>
            </>
          }
        />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
