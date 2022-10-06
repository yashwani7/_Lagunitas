gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



gsap.to("#bottle_img", {
    rotate: -15,
    scrollTrigger:{
        trigger:"#bottle_img",
        scroller:".main",
        // markers:true,
        start: "top 1%",
        end: "top -460%",
        pin:true,
        scrub:true
    },
})

gsap.to("#bottle_img", {
  scale: 0.4,
  scrollTrigger:{
      trigger:".page_5",
      scroller:".main",
      // markers:true,
      start: "top 390%",
      end: "top -380%",
      scrub:true,
  },
})
var tl=gsap.timeline()
tl.from(".nav-top > img",{
  scale:0,
  opacity:0,
  duration:1
})
tl.from(".nav-top > button",{
  scale:0,
  opacity:0,
  duration:1
})
tl.from(".main > .page1 > .logo",{
  scale:0,
  opacity:0,
  duration:1
})
tl.from(".page2",{
  scale:0.8,
  opacity:0.8,
  duration:1,
  scrollTrigger:{
    trigger:".page2-right",
    scroller:".main",
    markers:false,
    scrub:true
  }

})
tl.from(".page3 >.page3-top > h1",{
  
  opacity:0.8,
  scale:0.7,
  duration:1,
  scrollTrigger:{
    trigger:".page3-top",
    scroller:".main",
    // start:"center",
    markers:false,
    scrub:true
  }

})
gsap.from(".page3-right",{
  x:70,
  // opacity:0.3,
  duration:1,
  scrollTrigger:{
    trigger:".page3",
    scroller:".main",
    scrub:true
  }
})
