
// go top when page is reload 
document.addEventListener("DOMContentLoaded", () => {
    // Scroll to the top of the page when the page loads
    window.scrollTo(0, 0);
  
    // Optionally remove any hash in the URL without reloading the page
    if (location.hash) {
      history.replaceState(null, null, " ");
    }
  });


  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");
  
  // Handle menu toggle
  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuIcon.innerHTML = navLinks.classList.contains("active") ? "&times;" : "&#9776;"; // Change icon between X and menu
  });
  

// JavaScript for active section highlight
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("#nav-links .nav-link");

  // Handle click events on nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Remove active class from all links
      navLinks.forEach((l) => l.classList.remove("active"));

      // Add active class to clicked link
      link.classList.add("active");
    });
  });

  // IntersectionObserver for scrolling
  const observer = new IntersectionObserver(
    (entries) => {
      let mostVisibleSection = null;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (
            !mostVisibleSection ||
            entry.intersectionRatio > mostVisibleSection.intersectionRatio
          ) {
            mostVisibleSection = entry.target;
          }
        }
      });

      if (mostVisibleSection) {
        const activeLink = document.querySelector(
          `#nav-links .nav-link[href="#${mostVisibleSection.id}"]`
        );
        if (activeLink) {
          navLinks.forEach((link) => link.classList.remove("active"));
          activeLink.classList.add("active");
        }
      }
    },
    { threshold: 0.3 } // Adjusted threshold for better visibility detection
  );

  sections.forEach((section) => observer.observe(section));
});



// project pop 

function pop_msg() {
  document.getElementById("pop_msg").style.display = "block";
  setTimeout(function () {
    document.getElementById("pop_msg").style.display = "none";
  }, 1000);
  return true; // Prevent default form submission
}

// Ensure DOM content is loaded before selecting elements
document.addEventListener("DOMContentLoaded", () => {
  const Btn_onging = document.querySelector(".btn_ongoing");
  if (Btn_onging) {
    Btn_onging.addEventListener("click", () => {
      pop_msg();
    });
  } else {
    console.error("Element with class 'btn_ongoing' not found.");
  }
});


// contact pop msg

  function showSuccessMessage() {
    document.getElementById("successMessage").style.display = "block";
    setTimeout(function () {
        document.getElementById("contactForm").reset();
        document.getElementById("successMessage").style.display = "none";
    }, 3000);
    return true; // Prevent default form submission
}

