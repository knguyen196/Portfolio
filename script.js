document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("skills").addEventListener("click", function () {
    const skillItems = document.querySelectorAll(".skills-img div");
    const isVisible = skillItems[0].classList.contains("show");
    skillItems.forEach((item, index) => {
      setTimeout(() => {
        if (isVisible) {
          item.classList.remove("show");
        } else {
          item.classList.add("show");
        }
      }, index * 200);
    });
  });
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slideshow1");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length};
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
