const body = document.body;

// Listen for the scroll event
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY; // Get the vertical scroll position

    // Check if the user has scrolled
    if (scrollTop > 0) {
        const scrollAmount = scrollTop / window.innerHeight; // Calculate scroll distance as a fraction of the viewport height
        const darkness = Math.min(0.2 + scrollAmount * 0.3, 0.5); // Adjust darkness (maximum of 0.5)
        body.style.setProperty("--overlay-darkness", darkness); // Dynamically update the darkness
        body.classList.add("scrolled"); // Add a class to indicate scrolling
    } else {
        body.style.setProperty("--overlay-darkness", 0.2); // Reset to the initial value
        body.classList.remove("scrolled"); // Remove the scrolling class
    }
});