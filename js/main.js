

let nav = document.getElementsByTagName("nav")[0];
let sc_nav = document.querySelector("#list-links");
let sc_nav_links = document.querySelectorAll(".links");


  // Count The Numbers When Reach To Them
  let num = document.querySelectorAll(".num_div .number");
  let section_numbers = document.getElementById("third_sec");
  let started = false;

window.onscroll = () => {
  if (window.scrollY > 250) {
    nav.classList.add("bg_nav");
    sc_nav.classList.add("bg_sc_nav");
    sc_nav_links.forEach((e) => {
      e.classList.add("color_nav");
    });
    document.documentElement.style.setProperty("--psedou_before", "#000");
  } else {
    nav.classList.remove("bg_nav");
    sc_nav.classList.remove("bg_sc_nav");
    sc_nav_links.forEach((e) => {
      e.classList.remove("color_nav");
    });
    document.documentElement.style.setProperty("--psedou_before", "#fff");
  }


  if (window.scrollY >= section_numbers.offsetTop - 300) {
    if (!started) {
      num.forEach((element) => counting(element));
    }
    started = true;
  }

};

function counting(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count)
    }
  }, 3000 / goal);
}




let humberger = document.querySelector(".hamburger");
let menu_mobile = document.getElementById("menu_mobile");

humberger.addEventListener("click", () => {
  if (menu_mobile.classList.contains("show_menu")) {
    if (window.scrollY < 250) {
      nav.classList.remove("bg_nav");
    }

    menu_mobile.classList.remove("show_menu");
    console.log("menu hided"); 
  } else {
    menu_mobile.classList.add("show_menu");
    console.log("menu showed");
    nav.classList.add("bg_nav");
  }
  console.log("clicked")
});






document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

