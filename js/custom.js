jQuery(document).ready(function () {
    // DOCUMENT READY
    gsap.registerPlugin(ScrollTrigger)
    let loaderTl = gsap.timeline({
        ScrollTrigger: ".loader-overlay",
        defaults: {
            duration: 0.9,
            ease: 'power2.inOut',
        }
    });
    loaderTl
        .fromTo(".loader-icon", {
            rotateY: '0deg',
        }, {
            rotateY: '90deg',
            opacity: 0.5,
            delay: 0.4,
        })
        .fromTo(".loader-logo", {
            opacity: 0.5,
            opacity: 1,
            rotateY: '90deg'
        }, {
            opacity: 1,
            rotateY: '0deg'
        })
        .to(".loader-overlay", {
            yPercent: -100,
            duration: 1.5,
            ease: 'power4.inOut'
        }, "-=0.5")






});// DOCUMENT READY