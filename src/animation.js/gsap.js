useEffect(() => {
    //gsap.from(boxRef.current, {opacity:0, duration:1,translateY:10})
    //gsap.to(boxRef.current, {opacity:1, duration:1.5, translateY:0})
    //gsap.from(heroRef.current, {opacity:0, duration:1, translateX:-40})
    //gsap.to(heroRef.current, {opacity:1, duration:2.5, translateX:0})
    //gsap.from(heroBRef.current, {opacity:0, duration:1, translateX:-40} )
    //gsap.to(heroBRef.current, {opacity:1, duration:1.5, translateX:0})
    let tl = gsap.timeline({paused: true, repeat: -1, repeatDelay: 0.5})

    var items = document.querySelectorAll("#copywrite"), length = items.length
    //tl.to(ttRef.current, {y:20, duration:1.5})
    console.log((props.show))
}, [props.show])