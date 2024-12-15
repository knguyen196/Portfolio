function myFunction(imgs) {

    const expandedImg = document.getElementById("expandedImg");
    const imgText = document.getElementById("imgtext");
    const container = expandedImg.parentElement;
  
    
    expandedImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
  
   
    container.style.display = "flex";
  }
  
  function closeImage() {
    const container = document.querySelector(".container");
    container.style.display = "none";
  }
  