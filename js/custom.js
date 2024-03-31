jQuery(document).ready(function () {
    // DOCUMENT READY
    gsap.registerPlugin(ScrollTrigger)
    let header = document.querySelector('header')
    let loaderTl = gsap.timeline({
        ScrollTrigger: ".loader-overlay",
        defaults: {
            duration: 0.9,
            ease: 'power2.inOut',
        }
    });
    loaderTl
        // .to('body', {
        //     overflow: 'hidden',
        //     duration: 0
        // })
        .fromTo(".loader-icon", {
            rotateY: '0deg',
        }, {
            rotateY: '90deg',
            opacity: 0.5,
            delay: 0.4,
        })
        .fromTo(".loader-logo", {
            opacity: 0.5,
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
    // .to('body', {
    //     overflow: 'visible',
    //     duration: 0
    // })

    // HOMEPAGE SLIDER
    $('.homepage-banner .slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        nextArrow: `<img class='slick-arrow slick-next' src='./images/left-white-arrow.svg'>`,
        prevArrow: `<img class='slick-arrow slick-prev' src='./images/right-white-arrow.svg'>`,
    });
    // HEADER
    if (document.querySelector('header .nav-toggle')) {
        let menuToggle = document.querySelector('header .nav-toggle');
        let navMenu = document.querySelector('header .navbar .navlist');
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active')
            menuToggle.classList.toggle('change')
        })
    }
    // if (window.matchMedia("(max-width: 767px)").matches) {
    if (document.querySelector('.intro-section')) {
        let firstPanel = document.querySelector('.intro-section');
        gsap.to(firstPanel, {
            scrollTrigger: {
                trigger: firstPanel,
                start: '50px 50px',
                end: 'bottom top',
                onEnter: () => {
                    header.classList.add('dark')
                },
                onLeaveBack: () => {
                    header.classList.remove('dark')
                }
            }
        });
        // }
    }
    if (window.matchMedia("(min-width: 992px)").matches) {
        Array.from(document.querySelectorAll("header .navbar ul > li")).forEach(item => {
            if (item.querySelector('.megamenu')) {
                item.addEventListener("mouseenter", () => {
                    header.classList.add('dark2')
                })
                item.addEventListener("mouseleave", () => {
                    header.classList.remove('dark2')
                })
            }
        })
    }
    if (window.matchMedia("(min-width: 992px)").matches) {
        gsap.utils.toArray('.default-panel').forEach(panel => {
            gsap.from(panel.querySelectorAll('.bg-lg .default-panel-bg-lg:not(:first-child)'), {
                opacity: 0,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: panel,
                    scrub: 1,
                    pin: true,
                    start: 'bottom bottom'
                }
            })
        })
    }
    else {
        gsap.utils.toArray('.default-panel').forEach(panel => {
            gsap.from(panel.querySelectorAll('.bg-sm .default-panel-bg-sm:not(:first-child)'), {
                opacity: 0,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: panel,
                    scrub: 1,
                    // pin: true,
                    start: '100px bottom',
                    markers: true
                }
            })
        })
    }
    // }

    // const cardsTl2 = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: '.intro-section',
    //         scrub: true,
    //         start: '50% bottom'
    //     },
    //     defaults: {
    //         duration: 1.5
    //     }

    // })
    const cardsTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.intro-section1',
            start: '55% bottom',
            end: 'bottom top'
        },
        defaults: {
            duration: 2
        },
        onComplete: () => {
            let cards = Array.from(document.querySelectorAll('.intro-section1 .hovering-card'))
            cards.forEach(card => {
                gsap.to(card, {
                  duration: Math.random() * 2 + 1, // Random duration between 1 and 3 seconds
                  y: 10,
                  ease: "power1.inOut",
                  repeat: -1,
                  yoyo: true
                });
              });
        }
    })
    cardsTl
        .from('.intro-section1 h2', {
            y: 150,
            duration: 1,
            opacity: 0,
        })
        .from('.intro-section1 .hovering-card.black', {
            xPercent: -50,
            // yPercent: -50,
            opacity: 0,
            ease: 'power4.inOut'
        }, 0)
        .from('.intro-section1 .hovering-card.smoke', {
            yPercent: -50,
            opacity: 0,
            ease: 'power4.inOut'
        }, 0)
        .from('.intro-section1 .hovering-card.brown', {
            xPercent: 50,
            // yPercent: -50,
            opacity: 0,
            ease: 'power4.inOut'
        }, 0)
        .from('.intro-section1 .hovering-card.gray', {
            xPercent: -50,
            // yPercent: 50,
            opacity: 0,
            ease: 'power4.inOut'
        }, 0)
        .from('.intro-section1 .hovering-card.white', {
            xPercent: 50,
            // yPercent: 50,
            opacity: 0,
            ease: 'power4.inOut'
        }, 0);
    // const cardsTl2 = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: '.intro-section2',
    //         start: '30% bottom',
    //         end: 'bottom top',
    //         scrub: 1
    //     },
    //     // defaults : {
    //     //     duration: 2
    //     // }
    // })
    // cardsTl2
    // .to('.intro-section2 .hovering-card', {
    //     y: -200,
    //     // opacity: 0,
    //     // ease: 'power4.inOut'
    //     stagger: 0.01
    // }, 0);
});// DOCUMENT READY