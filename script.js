function navAnimation(){
    var nav = document.querySelector("nav")
nav.addEventListener("mouseenter", function(){
    let tl =gsap.timeline()    
    tl.to("#nav-bottom",{
            height:"21vh"
        })
        tl.to(".nav-part2 h5",{
            display: "block"    
        })
          tl.to(".nav-part2 h5 span",{
            y:0,
            // duration:0.3,
            stagger:{
                amount:0.6
            }   
        })
})
nav.addEventListener("mouseleave", function(){
    let tl =gsap.timeline()    
   
          tl.to(".nav-part2 h5 span",{
           y:25,
            // duration:0.3,
            stagger:{
                amount:0.2
            }   
        })
        tl.to(".nav-part2 h5",{
            display:"none",
            duration:0.1,
        })
        tl.to("#nav-bottom",{
            height:0,
            duration:0.2,
        })
})
}
navAnimation();

function page2Animation(){
var rightElems =document.querySelectorAll(".right-elem")
rightElems.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to(elem.childNodes[3],{
            opacity : 1,
            scale: 1,
        })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.childNodes[3],{
            opacity : 0,
            scale:0,
        })
    })
    elem.addEventListener("mousemove",function(dets){
        gsap.to(elem.childNodes[3],{
            x:dets.x -elem.getBoundingClientRect().x - 50,
            y:dets.y -elem.getBoundingClientRect().y -150,
        } )
    })
})  
}
page2Animation();
function page3videoAnimation(){
    var page3centre = document.querySelector(".page3-centre")
var video = document.querySelector("#page3 video")
page3centre.addEventListener("click", function(){
    video.play()
    gsap.to(video,{
        transform:"scaleX(1) scaleY(1)",
        opacity: 1,
        borderRadius: 0,
    })
})
video.addEventListener("click", function(){
    video.pause()
    gsap.to(video,{
        transform:"scaleX(0.7) scaleY(0)",
        opacity: 0,
        borderRadius: "30px",
    })
})
}
page3videoAnimation();
function videoHoverEffect(sectionSelector) {
    const sections = document.querySelectorAll(sectionSelector);

    sections.forEach((sec) => {
        const video = sec.querySelector("video");
        const img = sec.querySelector("img");

        sec.addEventListener("mouseenter", () => {
            img.style.opacity = "0";
            video.style.opacity = "1";
            video.currentTime = 0;
            video.play();
        });

        sec.addEventListener("mouseleave", () => {
            video.pause();
            video.style.opacity = "0";
            img.style.opacity = "1";
        });
    });
}

videoHoverEffect(".sec-right");
gsap.registerPlugin(ScrollTrigger);

function page7HorizontalScroll() {

  gsap.from(".move-slow", {
    x: -60,
    scrollTrigger: {
      trigger: "#page7",
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    }
  });

  gsap.from(".move-medium", {
    x: -120,
    scrollTrigger: {
      trigger: "#page7",
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    }
  });

  gsap.from(".move-fast", {
    x: -180,
    scrollTrigger: {
      trigger: "#page7",
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    }
  });

  gsap.from(".move-fastest", {
    x: -240,
    scrollTrigger: {
      trigger: "#page7",
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    }
  });

}

page7HorizontalScroll();
