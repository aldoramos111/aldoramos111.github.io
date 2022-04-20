const el = document.body

setTimeout(() => {
  el.style.display = 'block';}, 1000); 

setTimeout(() => {
  el.style.overflowY = 'scroll';}, 11000); 

setTimeout(() => {
  el.style.height = 'auto';}, 11000);

setTimeout(() => {
  el.style.position = 'relative';}, 11000);
          
let tl = gsap.timeline({Defaults: { Easing: Expo.EaseInOut}});
        tl.from('.intro-video', { duration:6, opacity: 0, ease: Expo.easeInOut})
          .to('.oceanica-img-circle', { duration: 2, opacity: 1}, 2.8)
          .to('.oceanica-img', { duration: 2, opacity: 1}, 3.6)
          .to('.oceanica-img-circle', { duration: 2, opacity: 0}, 3.6)
          .to('.navigation', { duration: 2, opacity: 1}, 6)
          .to('.intro-video', { duration: 2, opacity: 0}, 9)
          .to('.video-overlay', { duration: 2, opacity: 0}, 9)
           .to('.oceanica-img', { duration: 2, opacity: 0}, 9)
          .to('.item', { duration: 2, color:"#050d28", opacity: 1}, 9)
          .to('.home-title', { duration: 2, opacity: 1}, 10.5)
          .to('.home-img', { duration: 2, opacity: 1}, 11)
          .to('.home-subtitle', { duration: 2, opacity: 1, onComplete: () => document.querySelector('.site-wrapper').classList.remove('is-loading')}, 11.5)
          .to('.intro-container', { x:"-200vw"}, 15)