// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Hero Animations Timeline
const tl = gsap.timeline();

// 1. Fade in Terminal
tl.to(".hero-terminal", {
    opacity: 1,
    duration: 0.5,
    y: 0,
    ease: "power2.out",
})
    // 2. Typewriter Effect inside Terminal
    .to("#typewriter", {
        text: {
            value: "Initializing GCTEK Core Systems...",
            delimiter: "",
        },
        duration: 2,
        ease: "none",
    })
    // 3. Hero Text Reveal
    .to(
        ".hero h1",
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
        },
        "-=0.5"
    )
    // 4. Subtext Reveal
    .to(
        ".hero-sub",
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
        },
        "-=0.8"
    );

// Service Cards Animation on Scroll
gsap.utils.toArray(".card").forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%", // Animation starts when top of card hits 85% of viewport
            toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1, // Stagger effect
        ease: "power3.out",
    });
});

// Header Animation (Glass effect enhancement on scroll)
ScrollTrigger.create({
    start: "top -50",
    end: 99999,
    toggleClass: { className: "scrolled", targets: "nav" },
});

// Interactive Cursor Effect for Terminal (Looping text)
setTimeout(() => {
    let phrases = [
        "Optimizing SCADA Architecture...",
        "Deploying Energy Algorithms...",
        "GCTEK: Ready for Deployment.",
    ];
    let masterTl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    phrases.forEach((phrase) => {
        let tl = gsap.timeline({ yoyo: true, repeat: 1, repeatDelay: 2 });
        tl.to("#typewriter", { duration: 1.5, text: phrase });
        masterTl.add(tl);
    });
}, 4000);
