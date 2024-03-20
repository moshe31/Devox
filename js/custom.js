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
    if (document.querySelector('.default-panel')) {
        let firstPanel = document.querySelector('.default-panel');
        gsap.to(firstPanel, {
            scrollTrigger: {
                trigger: firstPanel,
                start: '49% center',
                end: 'bottom top',
                toggleClass: {targets: "header", className: "dark"}
            }
        });
    }
    // if (document.querySelector('.header .navbar li')) { 
        let header = document.querySelector('header')
        Array.from(document.querySelectorAll("header .navbar ul > li")).forEach(item=> {
            console.log(item);
            item.addEventListener("mouseenter", ()=> {
                header.classList.add('dark2')
            })
            item.addEventListener("mouseleave", ()=> {
                header.classList.remove('dark2')
            })
        })
    // }

});// DOCUMENT READY