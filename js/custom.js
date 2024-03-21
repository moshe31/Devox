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
        let navMenu = document.querySelector('header .navbar ul');
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active')
            menuToggle.classList.toggle('change')
        })
    }
    if (window.matchMedia("(min-width: 768px)").matches) {
        if (document.querySelector('.skewing-section')) {
            let firstPanel = document.querySelector('.skewing-section');
            gsap.to(firstPanel, {
                scrollTrigger: {
                    trigger: firstPanel,
                    start: '100px 100px',
                    end: 'bottom top',
                    onEnter: () => {
                        header.classList.add('dark')
                    },
                    onLeaveBack: () => {
                        header.classList.remove('dark')
                    }
                }
            });
        }
    }
    if (window.matchMedia("(max-width: 767px)").matches) {
        if (document.querySelector('.default-panel')) {
            let firstPanel = document.querySelector('.default-panel');
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
        }
    }

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
    // }
    if (window.matchMedia("(min-width: 992px)").matches) {
        document.addEventListener('mousemove', function (e) {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 5;
            const centerY = window.innerHeight / 2;
            const deltaX = (clientX - centerX) * 0.1;
            const deltaY = (clientY - centerY) * 0.1;

            gsap.to('.skewing-section .thumbnail img', {
                duration: 1.5,
                rotationY: 0.05 * deltaX,
                rotationX: -0.1 * deltaY,
                transformPerspective: 500,
                ease: "power3.out"
            });
        });


        // default-panel
        // if (window.matchMedia("(min-width: 992px)").matches) {
        gsap.utils.toArray('.default-panel').forEach(panel => {
            gsap.from(panel.querySelectorAll('.default-panel-bg:not(:first-child)'), {
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

});// DOCUMENT READY