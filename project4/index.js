function breakText() {
    var h1Text = document.querySelector("h1").textContent;

    var splittedText = h1Text.split("");
    // console.log(splittedText)

    let text = "";
    splittedText.forEach((char) => {
        text += `<span>${char}</span>`;
    });

    document.querySelector("h1").innerHTML = text;
}

breakText()

gsap.from("h1 span", {
    y: 70,
    duration: 0.6,
    stagger: {
        each: -0.1,
        from: "center"
    },
    opacity: 0,
    delay: 0.5
    // ease: "elastic.out"
})