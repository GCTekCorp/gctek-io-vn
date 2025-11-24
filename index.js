// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// --- HERO ANIMATIONS ---
const tl = gsap.timeline();

tl.to(".hero-terminal", {
    opacity: 1,
    duration: 0.5,
    y: 0,
    ease: "power2.out",
})
    .to("#typewriter", {
        text: {
            value: "Initializing GCTEK Core Systems...",
            delimiter: "",
        },
        duration: 2,
        ease: "none",
    })
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

// --- SERVICES ANIMATIONS ---
gsap.utils.toArray(".card").forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1,
        ease: "power3.out",
    });
});

// --- TEAM ANIMATIONS (NEW) ---
gsap.to(".team-member", {
    scrollTrigger: {
        trigger: ".team-grid",
        start: "top 80%",
        toggleActions: "play none none reverse",
    },
    y: 0,
    opacity: 1,
    duration: 0.6,
    stagger: 0.1, // Members pop in one by one
    ease: "back.out(1.7)", // Slight bounce effect
});

// --- CTA SECTION ANIMATION (NEW) ---
gsap.to(".cta-content", {
    scrollTrigger: {
        trigger: ".cta-section",
        start: "top 75%",
        toggleActions: "play none none reverse",
    },
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: "power4.out",
});

// --- NAVBAR SCROLL EFFECT ---
ScrollTrigger.create({
    start: "top -50",
    end: 99999,
    toggleClass: { className: "scrolled", targets: "nav" },
});

// --- HERO TERMINAL LOOP ---
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
