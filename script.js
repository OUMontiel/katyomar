window.onload = function() {
    let text = document.getElementById('text');
    window.addEventListener('scroll', function() {
        let value = window.scrollY;
        text.style.marginBottom = value * 1.25 + 'px';
    })

    $('#scratch').wScratchPad({
        size: 100,
        bg: 'images/image8.jpg',
        fg: 'images/scratch.png'
    });

    const reveal = gsap.utils.toArray('.reveal');
    reveal.forEach((text, i) => {
        ScrollTrigger.create({
            trigger: text,
            toggleClass: 'active',
            start: "top 90%",
            end: "top 20%"
        })
    })

    const images = gsap.utils.toArray('img');
    images.forEach((img, i) => {
        ScrollTrigger.create({
            trigger: img,
            toggleClass: 'active',
            start: "top 90%",
            end: "top 20%"
        })
    })

    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);
}