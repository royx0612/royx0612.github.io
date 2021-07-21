document.addEventListener("DOMContentLoaded", function () {
  if ("IntersectionObserver" in window) {
    let io = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.removeAttribute("data-src");
          io.unobserve(lazyImage);
        }
      });
    });
    [].forEach.call(
      document.querySelectorAll("img[data-src]"),
      function (lazyImage) {
        io.observe(lazyImage);
      }
    );
  } else {
    const lazyload = function () {
      let images = document.querySelectorAll("img[data-src]");

      if (!images.length) {
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationchange", lazyload);
        return;
      }

      [].forEach.call(images, function (lazyImage) {
        if (
          lazyImage.getBoundingClientRect().top <= window.innerHeight &&
          lazyImage.getBoundingClientRect().bottom >= 0 &&
          getComputedStyle(lazyImage).display !== "none"
        ) {
          lazyImage.src = lazyImage.getAttribute("data-src");
          lazyImage.removeAttribute("data-src");
        }
      });
    };

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationchange", lazyload);
    lazyload();
  }
});
