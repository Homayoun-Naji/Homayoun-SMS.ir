const header2 = document.querySelector(".header2");

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
      header2.style.zIndex = "-1";
      header2.classList.add("hidden");
    } else if (scrollTop === 0) {
      header2.classList.remove("hidden");
      if (!header2.classList.contains("hidden")) {
        this.setTimeout(function () {
          header2.style.zIndex = "1";
        }, 500);
      }
    }
    lastScrollTop = scrollTop;

});
