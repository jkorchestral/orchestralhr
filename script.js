(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.getElementById("navToggle");
  var panel = document.getElementById("navPanel");

  if (toggle && panel) {
    var closeMenu = function () {
      panel.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    };
    var openMenu = function () {
      panel.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
    };

    toggle.addEventListener("click", function () {
      var isOpen = panel.classList.contains("is-open");
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && panel.classList.contains("is-open")) {
        closeMenu();
        toggle.focus();
      }
    });

    document.addEventListener("click", function (event) {
      if (!panel.classList.contains("is-open")) return;
      if (panel.contains(event.target) || toggle.contains(event.target)) return;
      closeMenu();
    });

    var desktopQuery = window.matchMedia("(min-width: 980px)");
    desktopQuery.addEventListener("change", function (event) {
      if (event.matches) closeMenu();
    });
  }
})();
