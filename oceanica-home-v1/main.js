


gsap.registerPlugin(ScrollTrigger);

const select = (e) => document.querySelector(e);
const selectAll = (e) => document.querySelectorAll(e);


function initLoader() {
    const tlLoaderIn = gsap.timeline({
        id:  'tlLoaderIn',
        defaults: {
            duration: 2,
            ease: 'ease.inout'
        }, onComplete: function(){
gsap.to(".content-section-col-1", {
  scrollTrigger: ".content-section-col-1", duration: 1.2, opacity: 1, y: 0, delay: 1
});

gsap.to(".content-section-col-2", {
  scrollTrigger: ".content-section-col-2", duration: 1.2, opacity: 1, y: 0, delay: 1.5
});

gsap.to(".intro-title", {
  scrollTrigger: ".intro-title", duration: 1.2, opacity: 1, y: 0, delay: .5
});

gsap.to(".quote", {
  scrollTrigger: ".quote", duration: 1.2, opacity: 1, y: 0, delay: .5
});
gsap.to(".img-container", {
  scrollTrigger: ".img-container", duration: 1.8, opacity: 1, y: 0, delay: .5
});
gsap.to(".building-animation", {
  scrollTrigger: ".building-animation", duration: 1.8, opacity: 1, y: 0, delay: .5
});
}
    });

    const isLoading = select('.body-class')
    const loaderInner = select('.intro-video');
    const imgCircle = select('.oceanica-img-circle');
    const imgFull = select('.oceanica-img');
    const nav = select('.navigation');
    const transitionItem = select('.item');
    const videoOverlay = select('.video-overlay');
    const homeTitle = select('.home-title');
    const homeSubtitle = select('.home-subtitle');
    const homeImg = select('.home-img');
    const navItem = select('.nav-item');
    const navItem2 = select('.nav-item2');
    const navItem3 = select('.nav-item3');
    const navItem4 = select('.nav-item4');
    const mobileToggle = select('.menu-toggle');
    const logoTxt = select('.oceanica-logo-txt');


    tlLoaderIn
    .to(loaderInner, {
        opacity: 1,
        delay: 1
})
    .to(imgCircle, {
        opacity: 1,
    }, 1.8)
    .to(imgFull, {
        opacity: 1,
    }, 2.6)
    .to(imgCircle, {
        opacity: 0
    }, 2.6)
    .to(nav, {
        opacity: 1
    }, 5)
    .to(imgFull, {
        opacity: 0
    }, 8.5)
    .to(loaderInner, {
        opacity: 0
    }, 9)
    .to(videoOverlay, {
        opacity: 0
    }, 9)
    .to(transitionItem, {
        opacity: 1
    }, 9)
    .to(logoTxt, {
        opacity: 1
    }, 9)
    .to(navItem, {
        color:"#050d28"
    }, 9)
    .to(navItem2, {
        color:"#050d28"
    }, 9)
    .to(navItem3, {
        color:"#050d28"
    }, 9)
    .to(navItem4, {
        color:"#050d28", onComplete: () => document.querySelector('.body-class').classList.remove('is-loading')
    }, 9)
    .to(homeTitle, {
        opacity: 1
    }, 10.5)
    .to(homeSubtitle, {
        opacity: 1
    }, 11)
    .to(homeImg, {
        opacity: 1
    }, 11.5)
    .to(mobileToggle, {
        opacity: 1
    }, 9)
    .to(isLoading, {
        backgroundColor: "#EFF4F2"
}, 4);

}

function init(){
    
    initLoader();

}

window.addEventListener('load', function(){
    init();
});


setTimeout(() => {
  document.querySelector('.intro-col-1').classList.add('active')}, 6000);

function myFunction() {
  var element = document.getElementById("myDIV");
  element.classList.toggle("active");
} 