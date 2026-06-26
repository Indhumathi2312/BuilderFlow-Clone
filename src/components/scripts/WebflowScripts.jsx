"use client";

import Script from "next/script";
import { useEffect } from "react";
import { initAll, cleanupAnimations } from "./initAnimations";

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

    const checkAndInit = () => {
      removeWebflowBadge();
      if (window.gsap && window.ScrollTrigger && window.Observer && window.SplitText) {
        initAll();
        removeWebflowBadge();
      } else {
        setTimeout(checkAndInit, 100);
      }
    };

    removeWebflowBadge();
    const badgeObserver = new MutationObserver(removeWebflowBadge);
    badgeObserver.observe(document.body, { childList: true, subtree: true });

    if (document.readyState === "complete") {
      checkAndInit();
    } else {
      window.addEventListener("load", checkAndInit);
    }

    return () => {
      window.removeEventListener("load", checkAndInit);
      badgeObserver.disconnect();
      if (badgeInterval) clearInterval(badgeInterval);
      cleanupAnimations();
    };
  }, []);

  return (
    <>
      <Script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=68cc21ec139e2486889bb97d"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.prod.website-files.com/68cc21ec139e2486889bb97d/js/webflow.schunk.f2efb3c5440a81cf.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.prod.website-files.com/68cc21ec139e2486889bb97d/js/webflow.schunk.ca1fb8ce04a3f87b.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.prod.website-files.com/68cc21ec139e2486889bb97d/js/webflow.schunk.61b534daaaeddbc7.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.prod.website-files.com/68cc21ec139e2486889bb97d/js/webflow.8d41a331.03b721009e88143b.js"
        strategy="afterInteractive"
      />
      <Script src="https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js" strategy="afterInteractive" />
      <Script
        src="https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
        strategy="afterInteractive"
      />
      <Script src="https://cdn.prod.website-files.com/gsap/3.15.0/Observer.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.prod.website-files.com/gsap/3.15.0/SplitText.min.js" strategy="afterInteractive" />
    </>
  );
}

