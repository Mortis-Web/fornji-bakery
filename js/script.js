const langChanger = document.querySelector("#lang_changer");
const langChangerList = document.querySelectorAll("#lang_changer span");
const lang = document.querySelector("#lang");
const activeLang = document.querySelector("#active_lang");
// Scroll effect

// lang

lang.addEventListener("click", (e) => {
  e.stopPropagation();
  langChanger.classList.toggle("hide_lang_changer");
});

langChangerList.forEach((option) => {
  option.addEventListener("click", (e) => {
    e.stopPropagation();
    activeLang.textContent = option.textContent;
    langChanger.classList.add("hide_lang_changer");
  });
});

document.addEventListener("click", () => {
  langChanger.classList.add("hide_lang_changer");
});

// services
servicesHolder.addEventListener("click", (e) => {
  e.stopPropagation();
  allServices.classList.toggle("hide_lang_changer");
});

const menu = document.querySelector("#menu");
const dropdown = document.querySelector("#navigation_dropdown");
const menuDropDownHolder = document.querySelector("#menuDropDownHolder");
const menuDropDown = document.querySelector("#menuDropDown");
const arrow = document.querySelector("#arrowDownUp");
menu.addEventListener("click", () => {
  menu.style.pointerEvents = "none";
  menu.style.opacity = "0.75";

  setTimeout(() => {
    menu.style.pointerEvents = "all";
    menu.style.opacity = "1";
  }, 700);

  if (dropdown.classList.contains("show_dropdown")) {
    dropdown.style.overflow = "hidden";
    setTimeout(() => {
      dropdown.classList.remove("show_dropdown");
    }, 100);
  } else {
    dropdown.classList.add("show_dropdown");
    setTimeout(() => {
      dropdown.style.overflow = "visible";
    }, 700);
  }
});

menuDropDownHolder.addEventListener("click", () => {
  if (menuDropDown.classList.contains("show_dropdown")) {
    menuDropDown.style.overflow = "hidden";
    arrow.classList.remove("arrowDownUp");

    setTimeout(() => {
      menuDropDown.classList.remove("show_dropdown");
    }, 100);
  } else {
    menuDropDown.classList.add("show_dropdown");
    arrow.classList.add("arrowDownUp");
    setTimeout(() => {
      menuDropDown.style.overflow = "visible";
    }, 700);
  }
});
