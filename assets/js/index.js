document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".topic-slide");
    const container = document.querySelector(".vertical-slider");
    const upArrow = document.querySelector(".up-arrow");
    const downArrow = document.querySelector(".down-arrow");
    const topicIcon = document.getElementById("topic-icon");

    const iconMap = [
        "oops.png",
        "git.png",
        "database.svg",
        "distributed.png",
        "systemdesign.png",
    ];

    let current = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });

        // Update icon
        if (topicIcon && iconMap[index]) {
            topicIcon.src = `/assets/icons/${iconMap[index]}`;
            topicIcon.alt = slides[index].textContent + " Icon";
        }
    }

    function nextSlide() {
        current = (current + 1) % slides.length;
        showSlide(current);
    }

    function prevSlide() {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    }

    showSlide(current);
    container.focus();

    // Keyboard navigation
    container.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown") nextSlide();
        else if (e.key === "ArrowUp") prevSlide();
    });

    // Scroll wheel
    let wheelCooldown = false;
    container.addEventListener("wheel", (e) => {
        if (wheelCooldown) return;
        wheelCooldown = true;
        e.deltaY > 0 ? nextSlide() : prevSlide();
        setTimeout(() => (wheelCooldown = false), 400);
    });

    // Click navigation
    upArrow.addEventListener("click", prevSlide);
    downArrow.addEventListener("click", nextSlide);

    // Allow click anywhere to re-focus slider
    document.body.addEventListener("click", () => container.focus());
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
