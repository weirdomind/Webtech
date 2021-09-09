AOS.init();

const nav = document.querySelector("nav");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closesidebar");
const openBtn = document.getElementById("hamburger");
const goToTop = document.getElementById("gototop");
const sideCover = document.getElementById("sidecover");
const carousel = document.getElementById("carousel");

$("#carousel").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
  autoplaySpeed: 1000,
  autoplay: true,
});

const openSidebar = () => {
  sidebar.classList.remove("-right-2/3");
  sidebar.classList.add("right-0");
  sidebar.style.minWidth =
    window.innerWidth > 80 ? "80px" : window.innerWidth + "px";
  sideCover.classList.remove("hidden");
  sideCover.classList.add("block");
};

const closeSidebar = () => {
  sidebar.classList.remove("right-0");
  sidebar.classList.add("-right-2/3");
  sidebar.style.minWidth = 0;
  sideCover.classList.add("hidden");
  sideCover.classList.remove("block");
};

closeBtn.onclick = (e) => {
  closeSidebar();
};

openBtn.onclick = (e) => {
  openSidebar();
};

sideCover.onclick = (e) => {
  closeSidebar();
};

window.onscroll = () => {
  nav.style.paddingLeft = !window.scrollY ? "3rem" : "1.5rem";
  nav.style.paddingRight = !window.scrollY ? "3rem" : "1.5rem";
  nav.style.paddingTop = !window.scrollY ? "1.5rem" : "1rem";
  nav.style.paddingBottom = !window.scrollY ? "1.5rem" : "1rem";
  if (window.scrollY > window.innerHeight - 50) {
    goToTop.classList.remove("-bottom-40");
    goToTop.classList.add("bottom-10");
  } else {
    goToTop.classList.add("-bottom-40");
    goToTop.classList.remove("bottom-10");
  }
};
