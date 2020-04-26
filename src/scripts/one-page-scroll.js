import closeGmb from "./gamburger-menu.js";

const blocks = document.querySelectorAll(".section"),
  block = document.querySelector("section"),
  sectionHeight = parseInt(window.getComputedStyle(block).height),
  links = document.querySelectorAll(".link"),
  linksFooter = document.querySelectorAll(".link_footer"),
  linksGmb = document.querySelectorAll(".link_gmb");


let inScroll = false, //flag for correct duration step by step
  durationOneScroll = 150, //duration if one step
  arrSections = [],
  step = 0;

for (let i = 0; i < blocks.length; i++) {
  arrSections.push(sectionHeight * i);
};

function scrollToStep(step) {
  window.scrollTo({
    top: arrSections[step],
    behavior: "smooth"
  });
  setTimeout(() => { inScroll = false }, durationOneScroll);
};

//one page scroll by mouse wheel
document.addEventListener("wheel", function (event) {
  if (inScroll === false) {
    inScroll = true;
    //move down
    if (event.deltaY > 0) {
      step >= arrSections.length - 1 ? step = arrSections.length - 1 : step = step + 1;
      scrollToStep(step)
    } else {
      //move up
      step === 0 ? step = 0 : step = step - 1;
      scrollToStep(step)
    };
  };
});

//scroll to sections by links in header
for (let j = 0; j < links.length; j++) {
  let link = links[j];
  link.addEventListener("click", function (event) {
    event.preventDefault();
    if (inScroll === false) {
      inScroll = true;
      window.scrollTo({
        top: arrSections[j],
        behavior: "smooth"
      });
      step = j;
      setTimeout(() => { inScroll = false }, durationOneScroll);
    };
  });
};

//scroll to sections by links in footer
for (let j = 0; j < linksFooter.length; j++) {
  let link = linksFooter[j];
  link.addEventListener("click", function (event) {
    event.preventDefault();
    if (inScroll === false) {
      inScroll = true;
      window.scrollTo({
        top: arrSections[j],
        behavior: "smooth"
      });
      step = j;
      setTimeout(() => { inScroll = false }, durationOneScroll);
    };
  });
};

//scroll to sections by links in gamburger menu
for (let j = 0; j < linksGmb.length; j++) {
  let link = linksGmb[j];
  link.addEventListener("click", function (event) {
    event.preventDefault();
    if (inScroll === false) {
      inScroll = true;
      window.scrollTo({
        top: arrSections[j],
        behavior: "smooth"
      });
      closeGmb.click(); // close gmb menu after click by one of the links in gmb menu
      step = j;
      setTimeout(() => { inScroll = false }, durationOneScroll);
    };
  });
};

//one page scroll by keydown
window.addEventListener("keydown", function (e) {
  if (inScroll === false) {
    inScroll = true;
    if (e.keyCode === 40) {
      //move down
      e.preventDefault();
      step >= arrSections.length - 1 ? step = arrSections.length - 1 : step = step + 1;
      scrollToStep(step)
    } else if (e.keyCode === 38) {
      //move up
      e.preventDefault();
      step === 0 ? step = 0 : step = step - 1;
      scrollToStep(step)
    } else {
      inScroll = false;
    };
  };
});

//detect the mobile device
let isMobile = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  isMobile = true;
} else {
  isMobile = false;
}

//one-page-scroll by swipe for mobile devices
if(isMobile) {
  //points of start and end of touch
  let startTouch, endTouch

  //coords of point of start
  document.addEventListener("touchstart", function () {
    if (inScroll === false) {
      inScroll = true
      startTouch = window.pageYOffset;
      inScroll = false;
    }
  });

  //coords of point of end of touch and function of moove by event of the end of touch
  document.addEventListener("touchend", function () {
    if (inScroll === false) {
      inScroll = true
      endTouch = window.pageYOffset;
      if(startTouch-endTouch < 0) {
        step >= arrSections.length - 1 ? step = arrSections.length - 1 : step = step + 1;
        scrollToStep(step);
      } else if (startTouch-endTouch > 0) {
        step === 0 ? step = 0 : step = step - 1;
        scrollToStep(step);
      } else {
        inScroll = false;
      };
    };
  });
};