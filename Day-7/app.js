let tl1 = gsap.timeline()
tl1.to('#F4',{
    y: '0vh',
    duration: 2
})
.to('#F4',{
    width: '50vw',
    height: '100vh',
    duration: 1,
    right: 0,
    top: 0
})
.to('#F1',{
   x:0,
    duration: 1,
})
.to('#F4',{
    width: '30vw',
    height: '50vh',
    duration: 2,
    y: '50vh',
    right: 0,
    bottom: 0
})
.to('#F1',{
    width: '70vw',
    height: '50vh',
    duration: 1
})
.to(['#F2','#F3'],{
    y:0,
     duration: 1,
 })
 .to('.page1',{
    y:'100vh',
     duration: 1,
 })