var timeout;

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .from("#herofooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
    
}


function circleChaptaKaro() {
  // define default scale value
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(function () {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 100);
  });
}

function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}




document.querySelectorAll(".element").forEach(function (element)
 {
  var rotate = 0;
  var diffrot = 0;


  element.addEventListener("mouseleave", function (dets) {
    gsap.to(element.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  element.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - element.getBoundingClientRect();
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(element.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      centre: diff,
      right: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 1),
    });
  });
});
circleChaptaKaro();
circleMouseFollower();
firstPageAnim();

function lastPageAnim() {
  var tl2 = gsap.timeline();

  tl2.from("#about", {
    y: "-10",
    opacity: 0,
    duration: 6.5,
    ease: Expo.easeInOut,
  })
  .to("#textabout", {
    y: 0,
    ease: Expo.easeInOut,
    duration: 4,
    delay: -5,
    stagger: 0.3,
  })
}

  lastPageAnim();

  function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
  }

  startTime();