$(document).ready(function () {
  var header = $(".header");
  handleHeaderScroll(header);
  toggleMobileMenu();
});

function handleHeaderScroll(header) {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 50) {
      header.css("background-color", "#000");
    } else {
      header.css("background-color", "rgba(0, 0, 0, 0)");
    }
  });
}

function toggleMobileMenu() {
  $(".burger-menu").on("click", function () {
    const isOpen = $(".header__content--links-mobile-container").is(":visible");
    if (isOpen) {
      // Close menu
      $(".burger-icon").show();
      $(".close-icon").hide();
    } else {
      // Open menu
      $(".burger-icon").hide();
      $(".close-icon").show();
    }
    $(".header__content--links-mobile-container").slideToggle();
  });
}

const currentYear = new Date().getFullYear();
const copyrightText = `© ${currentYear} The Cake Boutique. All rights reserved.`;
document.getElementById("copyright").textContent = copyrightText;
