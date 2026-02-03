function LocomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

function navAnimation(){
    let nav = document.querySelector('nav')

    let tl = gsap.timeline({ paused: true }) 
    // paused so it doesn't auto-play

    tl.to('#nav-bottom', {
        height: '21vh',
        duration: 0.68,
        ease: "power4.out"
    })

    tl.to('#nav-part2 h4', {
        display: 'block',
        duration: 0.3,
        ease: "power4.out"
    })

    tl.from('#nav-part2 h4 span', {
        y: 25,
        stagger: {
            amount: 0.09
        },
        duration: 0.3,
        ease: "power4.out"
    })

nav.addEventListener('mouseleave', function () {
    tl.reverse()
})

nav.addEventListener('mouseenter', function () {
    tl.play()
})
}

function page2Animation(){
    let relem = document.querySelectorAll('.right-elem')

    relem.forEach((elem) =>{
        elem.addEventListener('mouseenter', ()=>{
            gsap.to(elem.childNodes[3],{
                opacity:1,
                scale:1
            })
        })

    elem.addEventListener('mouseleave', ()=>{
        gsap.to(elem.childNodes[3],{
            opacity:0,
            scale:0
        })
    })

    elem.addEventListener('mousemove', (dets)=>{
        // console.log(elem.getBoundingClientRect()) gives the exact dimensions of div
        gsap.to(elem.childNodes[3], {
            x: dets.x - elem.getBoundingClientRect().x - 100,
            y: dets.y - elem.getBoundingClientRect().y - 140
        })
    })
})
}

function page3videoAnimation(){
    var page3Center = document.querySelector('#page3-center')
    var video  = document.querySelector('#page3 video')

    page3Center.addEventListener('click', ()=>{
        video.play()
        gsap.to(video, {
            transform :'scaleX(1) scaleY(1)',
            opacity: 1,
            borderRadius:0
        })
    })

    video.addEventListener('mouseleave', ()=>{
        video.pause()
        gsap.to(video, {
            transform :'scaleX(0.7) scaleY(0)',
            opacity: 0,
            borderRadius:0
        })
    })
}

function page5VideoAnimatn(){
    let secRight = document.querySelectorAll('.sec-right')

    secRight.forEach((elem)=>{
        elem.addEventListener('mouseenter', ()=>{
            elem.childNodes[3].style.opacity = 1,
            elem.childNodes[3].play()
        })

        elem.addEventListener('mouseleave', ()=>{
            elem.childNodes[3].style.opacity = 0,
            elem.childNodes[3].load()
        })
    })
}

LocomotiveAnimation()

navAnimation()

page2Animation()

page3videoAnimation()

page5VideoAnimatn()