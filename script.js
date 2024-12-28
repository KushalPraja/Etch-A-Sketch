document.addEventListener("DOMContentLoaded", function() {
  const divs = document.querySelectorAll(".square");

  divs.forEach((square) => {
    square.addEventListener("mouseover", function () {
      square.style.backgroundColor = "#000000";
    });
  })
}); 
