// Webflow is initialized
window.Webflow ||= [];
window.Webflow.push(() => {
  // Run code once webflow is initialized
  console.log('hello webflow');

  // Page Load Animation
  function pageLoad() {
    let tl = gsap.timeline({ delay: 0.3 });
    tl.set('.section_header-stacked', {
      opacity: 1,
    });
    tl.from(
      '.section_header-stacked :is(h1, h2, p, .button_component)',
      {
        y: '1rem',
        opacity: 0,
        ease: 'power2.out',
        stagger: { each: 0.2, duration: 0.8 },
      },
      '<'
    );
    tl.from(
      '.section_header-stacked .header-stacked_image',
      {
        y: '3rem',
        opacity: 0,
        ease: 'power2.out',
        duration: 0.8,
      },
      '<.4'
    );
  }
  pageLoad();

  gsap.registerPlugin(ScrollTrigger);

  // Page Scroll Animation
  function solutionsScroll() {
    const tabLinks = document.querySelectorAll('.process-split_tab-link');

    // for each tab link add an event listener that will scroll to the correct id
    tabLinks.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const clicked = e.target.closest('.process-split_tab-link');
        if (!clicked) return;
        // get the DOM element by the text content (scroll-target value)
        const target = clicked.querySelector('.process-split_tab-text').textContent;
        //click the element with an id matching the target
        el = document.getElementById(target);
        el.scrollIntoView({
          behavior: 'smooth',
        });
      });
    });

    const processItems = document.querySelectorAll('.process-split_content');
    const processImages = document.querySelectorAll('.process-split_image');
    const processTabs = document.querySelectorAll('.process-split_tab-link');
    const ACTIVE_CLASS = 'is-active';
    // remove all active classes
    processImages.forEach((item) => item.classList.remove(ACTIVE_CLASS));
    //set first item to be active
    processImages[0].classList.add(ACTIVE_CLASS);

    processItems.forEach((item, index) => {
      const image = processImages[index];
      const tab = processTabs[index];
      const imageTL = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          onEnter: () => {
            image.classList.add(ACTIVE_CLASS);
            tab.classList.add(ACTIVE_CLASS);
          },
          onLeave: () => {
            // don't remove class on leave of the last item
            if (index !== processImages.length - 1) {
              image.classList.remove(ACTIVE_CLASS);
            }
            tab.classList.remove(ACTIVE_CLASS);
          },
          onEnterBack: () => {
            image.classList.add(ACTIVE_CLASS);
            tab.classList.add(ACTIVE_CLASS);
          },
          onLeaveBack: () => {
            // don't remove class on leaveback of the first item
            if (index !== 0) {
              image.classList.remove(ACTIVE_CLASS);
            }
            tab.classList.remove(ACTIVE_CLASS);
          },
        },
      });
    });
  }
  solutionsScroll();
});
