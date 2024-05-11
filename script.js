function loader() {
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
tl.from("nav",{
    opacity:0
})
tl.from(".hero1 h1,.hero2 h1,.hero3 h2,.hero3 h3,.hero4 h1",{
    y:120,
    stagger:0.2,
    duration:1.1
})
}
function crsrAnime() {
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y,
        })
    })
}
function magnetEffect(params) {
Shery.makeMagnet("#part-2 h4" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,});
}
loader()
crsrAnime()
magnetEffect()