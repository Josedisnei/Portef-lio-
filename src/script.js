const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  document.querySelector("header ul").classList.toggle("show");
});

const toTop = document.querySelector(".back-top");




  var typed = new Typed("#element", {
    strings: ["Programador Front-end.", "&amp; Back-End."],
    startDelay: 1000,
    typeSpeed: 50,
    backSpeed: 80,
    loop: true,
    loopCount: Infinity,
  });

  const sun = document.querySelector(".fa-sun");

  sun.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
window.addEventListener("scroll", () => {
  if (pageYOffset > 75) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});