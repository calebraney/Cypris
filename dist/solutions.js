(()=>{window.Webflow||=[];window.Webflow.push(()=>{function l(){let t=gsap.timeline({delay:.3});t.set(".section_header-stacked",{opacity:1}),t.from(".section_header-stacked :is(h1, h2, p, .button_component)",{y:"1rem",opacity:0,ease:"power2.out",stagger:{each:.2,duration:.8}},"<"),t.from(".section_header-stacked .header-stacked_image",{y:"3rem",opacity:0,ease:"power2.out",duration:.8},"<.4")}l(),gsap.registerPlugin(ScrollTrigger);function a(){document.querySelectorAll(".process-split_tab-link").forEach(s=>{s.addEventListener("click",o=>{o.preventDefault();let e=o.target.closest(".process-split_tab-link");if(!e)return;let i=e.querySelector(".process-split_tab-text").textContent;el=document.getElementById(i),el.scrollIntoView({behavior:"smooth"})})})}function d(){let t=document.querySelector(".process_split-component"),s=document.querySelector(".process-split_tabs-line-fill");if(!t||!s)return;gsap.timeline({scrollTrigger:{trigger:t,start:"top top",end:"bottom bottom",ease:"none",scrub:1}}).to(s,{height:"100%",ease:"none"})}function p(){let t=document.querySelectorAll(".process-split_content"),s=document.querySelectorAll(".process-split_image"),o=document.querySelectorAll(".process-split_tab-link"),e="is-active";s.forEach(i=>i.classList.remove(e)),s[0].classList.add(e),t.forEach((i,c)=>{let n=s[c],r=o[c],u=gsap.timeline({scrollTrigger:{trigger:i,start:"top center",end:"bottom center",scrub:1,onEnter:()=>{n.classList.add(e),r.classList.add(e)},onLeave:()=>{c!==s.length-1&&n.classList.remove(e),r.classList.remove(e)},onEnterBack:()=>{n.classList.add(e),r.classList.add(e)},onLeaveBack:()=>{c!==0&&n.classList.remove(e),r.classList.remove(e)}}})})}gsap.matchMedia().add({isMobile:"(max-width: 767px)",isTablet:"(min-width: 768px)  and (max-width: 991px)",isDesktop:"(min-width: 992px)",reduceMotion:"(prefers-reduced-motion: reduce)"},t=>{let{isMobile:s,isTablet:o,isDesktop:e,reduceMotion:i}=t.conditions;console.log(t.conditions),(e||o)&&(p(),a(),d())})});})();
