/******/ (() => { // webpackBootstrap
/*!**************************************!*\
  !*** ./src/timeline-roadmap/view.js ***!
  \**************************************/
/* global IntersectionObserver */
(function () {
  document.querySelectorAll('.gk-timeline').forEach(function (timeline) {
    const isAnimated = timeline.getAttribute('data-animate') === 'true';
    const items = timeline.querySelectorAll('.gk-timeline__item');
    if (!isAnimated) {
      // Immediately show all items if animation is disabled
      items.forEach(function (item) {
        item.classList.add('is-visible');
      });
      return;
    }

    // Scroll reveal animation observer
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px' // Trigger slightly before it fully crosses
    });
    items.forEach(function (item) {
      observer.observe(item);
    });
  });
})();
/******/ })()
;
//# sourceMappingURL=view.js.map