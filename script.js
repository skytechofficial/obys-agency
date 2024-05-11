let tl = gsap.timeline()
tl.from("#loader h1",{
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5
})
let h5 = document.querySelector("#geo")
let grow = 0
setInterval(() => {
    if (grow<100) {
        h5.innerHTML = grow++
    }else{
        h5.innerHTML = grow
    }
}, 45);
tl.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:4,
})
tl.from("#page-1",{
    delay:0.2,
    y:1200,
    opacity:0,
    ease:Power4
})
tl.to("#loader",{
    display:"none"
})