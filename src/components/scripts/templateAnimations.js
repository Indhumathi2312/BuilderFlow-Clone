function numberWithCommas(x, decimals = 0) {
  return x.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function runTemplateAnimations() {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  const Observer = window.Observer;
  const SplitText = window.SplitText;
  if (!gsap || !ScrollTrigger) return false;

  // Register GSAP plugins
  if (Observer && SplitText) {
    gsap.registerPlugin(ScrollTrigger, SplitText, Observer);
  } else {
    gsap.registerPlugin(ScrollTrigger);
  }

  // ============================================
  // NUMBER COUNTER ANIMATION
  // ============================================
  const counterElements = gsap.utils.toArray(".count-up-number-animation");
  if (counterElements.length > 0) {
    counterElements.forEach((element, index) => {
      const targetValue = parseFloat(element.getAttribute("data-count")) || 100;
      const decimals = targetValue % 1 !== 0 ? 1 : 0;

      gsap.fromTo(
        element,
        { textContent: 0 },
        {
          textContent: targetValue,
          duration: 2,
          ease: "power1.out",
          snap: decimals ? { textContent: 0.1 } : { textContent: 1 },
          delay: index * 0.1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            once: true,
            toggleActions: "play none none none",
          },
          onUpdate() {
            const currentValue = parseFloat(element.textContent);
            element.textContent = numberWithCommas(currentValue, decimals);
          },
        }
      );
    });
  }

  // ============================================
  // BATCH SCROLL ANIMATIONS (.animate-on-scroll)
  // ============================================
  const animateElements = document.querySelectorAll(".animate-on-scroll");
  if (animateElements.length > 0) {
    ScrollTrigger.batch(".animate-on-scroll", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          overwrite: true,
        }),
      onLeave: (batch) =>
        gsap.set(batch, {
          opacity: 0,
          y: 100,
          overwrite: true,
        }),
      onEnterBack: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          overwrite: true,
        }),
      onLeaveBack: (batch) =>
        gsap.set(batch, {
          opacity: 0,
          y: -100,
          overwrite: true,
        }),
    });
  }

  ScrollTrigger.refresh();
  return true;
}

export function cleanupTemplateAnimations() {
  window.ScrollTrigger?.getAll().forEach((trigger) => trigger.kill());
}
