function myFunction(img) {
  const expandedImg = document.getElementById("expandedImg");
  const imgText = document.getElementById("imgtext");

  expandedImg.src = img.src;
  imgText.innerHTML = img.alt;
  expandedImg.parentElement.style.display = "flex";
}

function closeImage() {
  document.querySelector(".container").style.display = "none";
}
