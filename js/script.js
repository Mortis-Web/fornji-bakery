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

document.addEventListener('DOMContentLoaded', () => {
  const whatsAppBtn = document.querySelector('.whatsApp');
  const footer = document.querySelector('footer');
console.log(whatsAppBtn)
  if (!whatsAppBtn || !footer) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        whatsAppBtn.classList.add('hide');
      } else {
        whatsAppBtn.classList.remove('hide');
      }
    },
    {
      root: null,
      threshold: 0.1,
    }
  );

  observer.observe(footer);
});


document.addEventListener('DOMContentLoaded', () => {
  const productPopup = document.getElementById('productPopup');
  const popupImg = productPopup.querySelector('.imagePopup img'); // The target img in popup
  const closePopup = document.getElementById('closePopup');
  const products = document.querySelectorAll('.product');

  // 1. Click Listener for all products
  products.forEach(product => {
    product.addEventListener('click', (e) => {
      // Find the image inside the clicked product
      const clickedImg = product.querySelector('img');
      const clickedTitle = product.querySelector('h3')?.innerText;

      if (clickedImg) {
        // Update the popup image source to match the clicked product
        popupImg.src = clickedImg.src;
        popupImg.alt = clickedImg.alt || "Product Image";

        // Optional: If you want the "Order Now" link to be dynamic
        // (e.g., sending the product name to WhatsApp)
        const orderBtn = productPopup.querySelector('.contact');
        if (orderBtn && clickedTitle) {
          orderBtn.href = `https://wa.me/YOURNUMBER?text=I'm interested in: ${clickedTitle}`;
        }

        // Show the popup
        productPopup.classList.add('show_popup');
        document.body.style.overflow = 'hidden'; // Stop background scroll
      }
    });
  });

  // 2. Universal Close Function
  const closeAll = () => {
    productPopup.classList.remove('show_popup');
    document.body.style.overflow = ''; // Restore scroll
  };

  // 3. Close Events
  closePopup.addEventListener('click', closeAll);

  // Close when clicking the dark backdrop (but not the image itself)
  productPopup.addEventListener('click', (e) => {
    if (e.target === productPopup) {
      closeAll();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAll();
  });
});
