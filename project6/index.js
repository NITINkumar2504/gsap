gsap.registerPlugin(ScrollTrigger);

function page1Animation() {
    var tl = gsap.timeline()

    tl.from("nav h1, nav h4, nav button", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15
    })

    tl.from(".center-part1 h1", {
        x: -200,
        duration: 0.6,
        opacity: 0
    }, "-=0.4")

    tl.from(".center-part1 p", {
        x: -150,
        duration: 0.5,
        opacity: 0
    })

    tl.from(".center-part1 button", {
        duration: 0.4,
        opacity: 0
    })

    tl.from(".center-part2 img", {
        opacity: 0,
        duration: 0.5
    }, "-=0.8")   // delay in timeline, starts 1s earlier


    tl.from(".section1bottom img", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6
    })
}

function page2Animation() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            // markers: true,
            start: "top 50%",
            end: "top 10%",
            scrub: 2
        }
    })

    tl2.from(".services", {
        y: 30,
        opacity: 0,
        duration: 0.8,
    })

    tl2.from(".line1.left", {
        x: -300,
        opacity: 0,
        duration: 0.8
    }, "line1")

    tl2.from(".line1.right", {
        x: 300,
        opacity: 0,
        duration: 0.8
    }, "line1")

    tl2.from(".line2.left", {
        x: -300,
        opacity: 0,
        duration: 0.8
    }, "line2")

    tl2.from(".line2.right", {
        x: 300,
        opacity: 0,
        duration: 0.8
    }, "line2")
}


page1Animation()
page2Animation()