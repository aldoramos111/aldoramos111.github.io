
        let tl = gsap.timeline({Defaults: { Easing: Expo.easeInOut}});

        tl.to('.intro-video', { duration: 3, clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)", ease: Expo.easeInOut, delay: 1.2})
.to('.oceanica-img', { duration: 3, clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)", y:0, ease: Expo.easeInOut}, 2)
.to('.navigation', { duration: 3, clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)", y:0, ease: Expo.easeInOut}, 5)
.to('.oceanica-img', { clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)", y:0}, 8)
.to('.oceanica-img', {duration: 2, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", y:-200, ease: Expo.easeInOut}, 9)
.to('.intro-video', { clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)", y:0, ease: Expo.easeInOut}, 9)
.to('.intro-video', {duration: 2, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", ease: Expo.easeInOut}, 9)
.to('.oceanica-img-2', {duration: 2, clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)", y:0, ease: Expo.easeInOut}, 8.8)
.to('.item', {duration: 3, color: "#050d28", duration: 3}, 9)
.to('.loader-container', { opacity: 0}, 6)