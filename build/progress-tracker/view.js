/******/ (() => { // webpackBootstrap
/*!**************************************!*\
  !*** ./src/progress-tracker/view.js ***!
  \**************************************/
/* global IntersectionObserver */
(function () {
  const initTracker = function (tracker) {
    const type = tracker.getAttribute('data-type') || 'bar';
    const percentage = parseInt(tracker.getAttribute('data-percentage')) || 0;
    const duration = parseInt(tracker.getAttribute('data-duration')) || 1500;
    const textEl = tracker.querySelector('.gk-progress-tracker__text');
    let fillEl = null;
    let circumference = 0;
    if (type === 'bar') {
      fillEl = tracker.querySelector('.gk-progress-tracker__bar-fill');
    } else {
      fillEl = tracker.querySelector('.gk-progress-tracker__circle-fill');
      if (fillEl) {
        circumference = parseFloat(fillEl.getAttribute('stroke-dasharray')) || 0;
      }
    }
    let startTimestamp = null;
    const step = function (timestamp) {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      // Ease Out Quad
      const easeProgress = progress * (2 - progress);
      const currentPercent = Math.round(easeProgress * percentage);

      // Update Text
      if (textEl) {
        textEl.textContent = currentPercent + '%';
      }

      // Update visual indicator
      if (fillEl) {
        if (type === 'bar') {
          fillEl.style.width = easeProgress * percentage + '%';
        } else if (type === 'circle' && circumference > 0) {
          const offset = circumference - easeProgress * percentage / 100 * circumference;
          fillEl.style.strokeDashoffset = offset;
        }
      }
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  // Viewport Trigger using IntersectionObserver
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        initTracker(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  document.querySelectorAll('.gk-progress-tracker').forEach(tracker => {
    observer.observe(tracker);
  });
})();
/******/ })()
;
//# sourceMappingURL=view.js.map