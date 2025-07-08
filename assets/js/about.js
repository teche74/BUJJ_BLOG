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




document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("smartSidebar");

    document.addEventListener("mousemove", (e) => {
        const isNearLeftEdge = e.clientX <= 20;
        const isOutsideSidebar = e.clientX > 200;

        if (isNearLeftEdge) {
            sidebar.classList.add("active");
        } else if (isOutsideSidebar) {
            sidebar.classList.remove("active");
        }
    });
});
