function myFunction(imgs) {
    // Get the expanded image and text container
    const expandedImg = document.getElementById("expandedImg");
    const imgText = document.getElementById("imgtext");
    const container = expandedImg.parentElement;
  
    // Set the expanded image source and caption text
    expandedImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
  
    // Show the expanded image container
    container.style.display = "flex";
  }
  
  function closeImage() {
    const container = document.querySelector(".container");
    container.style.display = "none"; // Hide the container when closing
  }
  