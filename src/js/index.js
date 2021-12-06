import SmoothScrollbar from 'smooth-scrollbar';
import ScrollTriggerPlugin from 'vendor/smooth-scrollbar/ScrollTriggerPlugin';
import SoftScrollPlugin from 'vendor/smooth-scrollbar/SoftScrollPlugin';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Swiper from "swiper";

// GSAP ScrollTrigger & Soft Edges plugin for SmoothScroll
SmoothScrollbar.use(ScrollTriggerPlugin, SoftScrollPlugin);

// Init smooth scrollbar
const view = document.getElementById('view-main');
const scrollbar = SmoothScrollbar.init(view, {
    renderByPixels: false,
    damping: 0.075
});

const marquee = document.querySelectorAll('.cb-marquee');

marquee.forEach((e) => {

    // Create swiper carousel
    const carousel = e.querySelectorAll('.cb-marquee-carousel');

    carousel.forEach((e) => {
        const items = e.querySelector('.cb-marquee-items');
        const item = e.querySelectorAll('.cb-marquee-item');

        e.classList.add('swiper-container');
        items.classList.add('swiper-wrapper');
        item.forEach(e => e.classList.add('swiper-slide'));

        const slider = new Swiper(e, {
            slidesPerView: 'auto',
            loop: true,
            freeMode: true,
            freeModeMomentumBounce: false,
            freeModeMomentumVelocityRatio: 0.3
        });
    });

    // Scroll triggered movement
    const tl = new gsap.timeline();

    tl.set(carousel, {willChange: "transform"});

    tl.fromTo(carousel[0], {
        x: -300
    }, {
        x: 0,
        ease: "none"
    }, 0);

    tl.fromTo(carousel[1], {
        x: 300
    }, {
        x: 0,
        ease: "none"
    }, 0);

    tl.set(carousel, {willChange: "auto"});

    ScrollTrigger.create({
        trigger: e,
        animation: tl,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.3,
        refreshPriority: -14
    })
});