document.addEventListener("DOMContentLoaded", function () {
    // Add the 'loaded' class when the page finishes loading
    setTimeout(() => {
      document.body.classList.add("loaded");
    }, 50); // Tiny delay for smoother effect
  
    const links = document.querySelectorAll("a");
  
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        if (link.getAttribute("href").startsWith("#")) return; // Ignore anchor links
        e.preventDefault(); // Prevent default navigation
  
        document.body.classList.add("zoom"); // Add zoom effect
  
        setTimeout(() => {
          window.location.href = link.href; // Navigate after animation
        }, 750); // Match transition duration
      });
    });
  });
  