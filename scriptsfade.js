
let tl = gsap.timeline({Defaults: { Easing: Expo.EaseInOut}});
        tl.from('.intro-video', { duration:6, opacity: 0, ease: Expo.easeInOut})
          .to('.oceanica-img-full', { duration: 2, opacity: 1}, 3)
          .to('.oceanica-img-circle', { duration: 2, opacity: 1}, 5)
          .to('.oceanica-img-full', { duration: 2, opacity: 0}, 5)
          .to('.navigation', { duration: 2, opacity: 1}, 6)
          .to('.intro-video', { duration: 2, opacity: 0}, 9)
          .to('.video-overlay', { duration: 2, opacity: 0}, 9)
           .to('.oceanica-img-circle', { duration: 2, opacity: 0}, 9)
          .to('.item', { duration: 2, color:"#050d28", opacity: 1}, 9)
          /*.to('.oceanica-img-2', {duration: 2, opacity: 1},9.5)*/
          .to('.home-title', { duration: 2, opacity: 1}, 11)
          .to('.home-img', { duration: 2, opacity: 1}, 11.5)
          .to('.home-subtitle', { duration: 2, opacity: 1}, 12)