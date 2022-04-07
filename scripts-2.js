        let tl = gsap.timeline({Defaults: { Easing: Expo.EaseInOut}});

        tl.from('.intro-video', { duration: 6, opacity: 0, ease: Expo.easeInOut, delay: .2})
          .to('.oceanica-img', { duration: 2, opacity: 1}, 3)
          .to('.navigation', { duration: 2, opacity: 1}, 6)
          .to('.oceanica-img', { duration: 2, opacity: 0}, 8)
          .to('.intro-video', { duration: 2, opacity: 0}, 9)
          .to('.item', { duration: 2, color:"#050d28", opacity: 1}, 9)