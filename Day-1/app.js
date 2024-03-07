tl = gsap.timeline()
tl
.from('header .left .menuIcon',{
    duration:0.3,
    y:'-20px',
    opacity: 0
})
.from('header .left .serviceBtn',{
    duration:0.3,
    y:'-15px',
    opacity: 0
})
.from('header .left .aboutBtn',{
    duration:0.3,
    y:'-10px',
    opacity: 0
})
.from('header .left .dashBtn',{
    duration:0.3,
    y:'-5px',
    opacity: 0
})
.from('header .logo',{
    duration:0.3,
    y:'-20px',
    opacity: 0
})
tl2 = gsap.timeline()
tl2
.from('header .right .contactBtn',{
    duration:0.3,
    y:'-20px',
    opacity: 0
})
.from('header .right .loginBtn',{
    duration:0.3,
    y:'-15px',
    opacity: 0
})
.from('header .right .btn',{
    duration:0.3,
    y:'-10px',
    opacity: 0
})
tl3 = gsap.timeline()
tl3
.from(['main .Top .left','main .Top .right','.logo'],{
    duration:1,
    y:'20px',
    opacity: 0
})

