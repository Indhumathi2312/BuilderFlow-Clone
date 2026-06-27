"use client";

import { useEffect } from "react";
import { initAll, cleanupAnimations } from "./initAnimations";

function loadScript(src) {
  return new Promise((resolve, reject) => {
    // Check if script is already loaded
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.type = "text/javascript";
    script.async = false;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script ${src}`));
    document.body.appendChild(script);
  });
}

export default function WebflowScripts() {
  useEffect(() => {
    document.documentElement.classList.add("w-mod-js");

    const removeWebflowBadge = () => {
      document.querySelectorAll(".w-webflow-badge").forEach((el) => {
        el.remove();
      });
    };

    // BRIX Badge cycling script
    const cards = document.querySelectorAll(".more-templates-badge-wrapper");
    let currentIndex = 0;
    const ANIMATION_INTERVAL = 8000;
    let badgeInterval;

    function updateCards() {
      if (cards.length === 0) return;
      cards.forEach((card, index) => {
        card.classList.remove("active", "next");
        if (index === currentIndex) {
          card.classList.add("active");
        } else if (index === (currentIndex + 1) % cards.length) {
          card.classList.add("next");
        }
      });
      currentIndex = (currentIndex + 1) % cards.length;
    }

    if (cards.length > 0) {
      updateCards();
      badgeInterval = setInterval(updateCards, ANIMATION_INTERVAL);
    }

    let isUnmounted = false;

    const loadScriptsSequentially = async () => {
      try {
        // Load jQuery first
        await loadScript("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=68cc21ec139e2486889bb97d");
        
        if (isUnmounted) return;

        // Load GSAP core and plugins
        await loadScript("https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js");
        await loadScript("https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js");
        await loadScript("https://cdn.prod.website-files.com/gsap/3.15.0/Observer.min.js");
        await loadScript("https://cdn.prod.website-files.com/gsap/3.15.0/SplitText.min.js");

        if (isUnmounted) return;

        // Load Webflow script chunks in order
        await loadScript("https://cdn.prod.website-files.com/68cc21ec139e2486889bb97d/js/webflow.schunk.f2efb3c5440a81cf.js");
        await loadScript("https://cdn.prod.website-files.com/68cc21ec139e2486889bb97d/js/webflow.schunk.ca1fb8ce04a3f87b.js");
        await loadScript("https://cdn.prod.website-files.com/68cc21ec139e2486889bb97d/js/webflow.schunk.61b534daaaeddbc7.js");
        await loadScript("https://cdn.prod.website-files.com/68cc21ec139e2486889bb97d/js/webflow.8d41a331.03b721009e88143b.js");

        if (isUnmounted) return;

        // Initialize GSAP and Webflow animations after all scripts have loaded
        initAll();
        removeWebflowBadge();
      } catch (err) {
        console.error("Failed to load scripts sequentially:", err);
      }
    };

    removeWebflowBadge();
    const badgeObserver = new MutationObserver(removeWebflowBadge);
    badgeObserver.observe(document.body, { childList: true, subtree: true });

    loadScriptsSequentially();

    return () => {
      isUnmounted = true;
      badgeObserver.disconnect();
      if (badgeInterval) clearInterval(badgeInterval);
      cleanupAnimations();
    };
  }, []);

  return null;
}
