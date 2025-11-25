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
/* =========================================
   INTERACTIVE MOUSE EFFECTS
   ========================================= */

// --- 1. BINARY RAIN EFFECT ---
let lastBinaryTime = 0;
const binaryInterval = 50; // New number every 50ms

document.addEventListener("mousemove", (e) => {
    const now = Date.now();

    // Create Binary Drop
    if (now - lastBinaryTime > binaryInterval) {
        createBinaryDrop(e.clientX, e.clientY);
        lastBinaryTime = now;
    }

    // Update Charge Orb Position (if active)
    if (activeOrb) {
        gsap.set(activeOrb, {
            x: e.clientX,
            y: e.clientY,
            xPercent: -50, // Centers the div on cursor
            yPercent: -50,
        });
    }
});

function createBinaryDrop(x, y) {
    const el = document.createElement("div");
    el.classList.add("binary-drop");
    el.innerText = Math.random() > 0.5 ? "1" : "0";
    document.body.appendChild(el);

    // 1. Set initial state EXACTLY at mouse position
    gsap.set(el, {
        x: x,
        y: y,
        scale: 1,
        opacity: 1,
    });

    // 2. Animate falling down
    gsap.to(el, {
        y: window.innerHeight + 50, // Fall off bottom of screen
        duration: Math.random() * 1 + 0.5, // Random speed (0.5s to 1.5s)
        ease: "none", // Linear speed
        onComplete: () => {
            if (el.parentNode) el.remove();
        },
    });

    // 3. Optional: Fade out halfway through
    gsap.to(el, {
        opacity: 0,
        delay: 0.2,
        duration: 0.5,
    });
}

// --- 2. HOLD & EXPLODE EFFECT ---

let activeOrb = null;
let chargeTween = null;

document.addEventListener("mousedown", (e) => {
    if (e.button !== 0) return; // Left click only

    activeOrb = document.createElement("div");
    activeOrb.classList.add("charge-orb");
    document.body.appendChild(activeOrb);

    // Initial Set
    gsap.set(activeOrb, {
        x: e.clientX,
        y: e.clientY,
        xPercent: -50,
        yPercent: -50,
        scale: 0,
    });

    // Charging Animation
    chargeTween = gsap.to(activeOrb, {
        scale: 4,
        duration: 1.5,
        ease: "power2.in",
        // Shake effect
        keyframes: {
            "0%": { rotation: 0 },
            "25%": { rotation: 5 },
            "50%": { rotation: -5 },
            "75%": { rotation: 5 },
            "100%": { rotation: 0 },
            easeEach: "none",
        },
    });
});

document.addEventListener("mouseup", (e) => {
    if (activeOrb) {
        const currentScale = gsap.getProperty(activeOrb, "scale");

        activeOrb.remove();
        activeOrb = null;
        if (chargeTween) chargeTween.kill();

        explode(e.clientX, e.clientY, currentScale);
    }
});

function explode(x, y, scale) {
    // If clicked quickly (scale is small), use a minimum scale for visibility
    const effectiveScale = Math.max(scale, 0.5);
    const particleCount = Math.floor(effectiveScale * 15) + 10;

    for (let i = 0; i < particleCount; i++) {
        const p = document.createElement("div");
        p.classList.add("explosion-particle");
        if (Math.random() > 0.5) p.classList.add("green");

        document.body.appendChild(p);

        // Random Angle
        const angle = Math.random() * Math.PI * 2;
        // Velocity based on charge time
        const velocity = (Math.random() * 150 + 50) * effectiveScale;

        const destX = x + Math.cos(angle) * velocity;
        const destY = y + Math.sin(angle) * velocity;

        gsap.set(p, {
            x: x,
            y: y,
            xPercent: -50,
            yPercent: -50,
            scale: Math.random(),
        });

        gsap.to(p, {
            x: destX,
            y: destY,
            opacity: 0,
            scale: 0,
            duration: Math.random() * 0.5 + 0.4,
            ease: "power3.out",
            onComplete: () => {
                if (p.parentNode) p.remove();
            },
        });
    }
}
