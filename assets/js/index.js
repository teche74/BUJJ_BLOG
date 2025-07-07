document.addEventListener("DOMContentLoaded", () => {
    const blocks = document.querySelectorAll(".timeline-block");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    entry.target.style.transitionDelay = `${index * 0.2}s`;
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    blocks.forEach((block) => observer.observe(block));
});
