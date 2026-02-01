let nav = document.querySelector('nav')

nav.addEventListener('mouseenter', function() {
    let tl = gsap.timeline() //timeline ensures code synchronously chale, ek ke baad ek 

    tl.to('#nav-bottom' , {
        height:'21vh'
    })

    tl.to('#nav-part2 h4', {
        display: 'block'
    })

    tl.from('#nav-part2 h4 span'), {
        y:25,
        stagger:{
            amount:0.6
        }
    }
})

nav.addEventListener('mouseleave', function() {
    let tl = gsap.timeline() //timeline ensures code synchronously chale, ek ke baad ek 

    tl.to('#nav-part2 h4 span'), {
        y:25,
        stagger:{
            amount:0.2
        }
    }

    tl.to('#nav-part2 h4', {
        display: 'none',
        duration: 0.1
    })
    tl.to('#nav-bottom' , {
        height:'0', 
        duration: 0.2
    })
})
