gsap.to('.logoImg', {
    duration: 1,
    delay: 1,
    width: '10vw',
    marginRight: '1vw',
    ease: "sine"
})
gsap.to('.reel .inner h1', {
    x: '-100%',
    yoyo: true,
    ease: 'sine',
    stagger: .01,
    duration: 20,
})
// function navReveal() {
//     var lastScrollTop;
//     navbar = document.getElementById('navbar');
//     window.addEventListener('scroll', function () {
//         var scrollTop = window.scrollY || document.documentElement.scrollTop;
//         if (scrollTop > lastScrollTop) {
//             navbar.style.top = '-80px';
//         }
//         else {
//             navbar.style.top = '0';
//         }
//         lastScrollTop = scrollTop;
//     });
// }
// navReveal()