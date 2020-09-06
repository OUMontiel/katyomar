window.onload = function() {
    $('#scratch').wScratchPad({
        size        : 100,                      // The size of the brush/scratch.
        bg          : 'images/background.png',  // Background (image path or hex color).
        fg          : '#000'                    // Foreground (image path or hex color).
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
}