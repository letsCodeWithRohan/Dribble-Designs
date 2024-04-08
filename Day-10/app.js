Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.3,
});
var magnets = document.querySelectorAll('.magnet')
var strength = 50

magnets.forEach( (magnet) => {
  magnet.addEventListener('mousemove', moveMagnet );
  magnet.addEventListener('mouseout', function(event) {
    TweenMax.to( event.currentTarget, 1, {x: 0, y: 0, ease: Power4.easeOut})
  } );
});

function moveMagnet(event) {
  var magnetButton = event.currentTarget
  var bounding = magnetButton.getBoundingClientRect()

  //console.log(magnetButton, bounding)

  TweenMax.to( magnetButton, 1, {
    x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * strength,
    y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * strength,
    ease: Power4.easeOut
  })

  //magnetButton.style.transform = 'translate(' + (((( event.clientX - bounding.left)/(magnetButton.offsetWidth))) - 0.5) * strength + 'px,'+ (((( event.clientY - bounding.top)/(magnetButton.offsetHeight))) - 0.5) * strength + 'px)';
}

document.querySelector('.email').addEventListener('click',() => {
    let tl = gsap.timeline();
    tl
    .to(['.menu h1','.menu .close','.menu .line'],{
        display: 'block',
    })
    .to('.menu',{
        width: '100%',
        height: '100vh',
        top: '0%',
        left: '0%',
        transform: 'scale(1) translate(0%,0%)',
        borderRadius: '0%',
        duration: 0.5
    })
})
document.querySelector('.close').addEventListener('click',() => {
    let tl = gsap.timeline();
    tl
    .to(['.menu h1','.menu .close','.menu .line'],{
        display: 'none',
    })
    .to('.menu',{
        width: 0,
        height: 0,
        top: '50%',
        left: '50%',
        transform: 'scale(0) translate(-50%,-50%)',
        borderRadius: '50%',
        duration: 0.5
    })
})

let tl = gsap.timeline();
tl
.to('.hello p',{
    top: '0',
    duration: 0.2,
    ease: 'power3.inOut',
})
.to('.hello p',{
    duration: 0.8,
    ease: 'power3.inOut',
    transform: 'rotate3d(1, 0, 0, 0deg)'
})
.to(['.leftImg','.rightImg'],{
    duration: 0.5,
    transform: 'scaleY(100%)'
})
.to('.email',{
    transform: 'scale(1) rotate(-33deg)',
    duration: 0.5,
})