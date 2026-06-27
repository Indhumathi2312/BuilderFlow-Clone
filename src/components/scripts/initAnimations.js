import { cleanupTemplateAnimations, runTemplateAnimations } from "./templateAnimations";

export function cleanupAnimations() {
  cleanupTemplateAnimations();
}

export function initWebflow() {
  const wf = window.Webflow;
  if (!wf) return;

  try {
    wf.destroy();
  } catch {
    // ignore destroy errors on first init
  }

  wf.ready();

  try {
    const ix2 = wf.require("ix2");
    ix2?.init?.();
  } catch {
    // ix2 may already be initialized via ready()
  }
}

export function initAll() {
  const run = () => {
    initWebflow();
    const animationsReady = runTemplateAnimations();
    window.ScrollTrigger?.refresh();

    if (!animationsReady) {
      window.setTimeout(() => {
        runTemplateAnimations();
        window.ScrollTrigger?.refresh();
      }, 500);
    }
  };

  requestAnimationFrame(() => {
    run();
    setTimeout(run, 250);
    setTimeout(run, 1000);
  });
}
