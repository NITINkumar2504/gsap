var finalPath = `M 10 90 Q 400 90 790 90`
var path = `M 10 90 Q 400 90 790 90`

var svgDiv = document.querySelector(".svgDiv") 

svgDiv.addEventListener("mousemove", (e) => {
    // console.log(e.y)
    path = `M 10 90 Q 400 ${e.y} 790 90`

    gsap.to("svg path", {
        attr: {
            d: path
        },
        duration: 0.3,
        ease: "power3.out"
    })
})

svgDiv.addEventListener("mouseleave", (e) => {
    gsap.to("svg path", {
        attr: {
            d: finalPath
        },
        duration: 1.5,
        ease: "elastic.out(1, 0.2)"
    })
})