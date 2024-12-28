


document.addEventListener("DOMContentLoaded", function() {

  const container= document.querySelector(".container");

  for (let i=0;i<256;i++){
    const squares= document.createElement("div"); 
    squares.classList.add("square");
    container.appendChild(squares);
  }

  const divs = document.querySelectorAll(".square");
  divs.forEach((square) => {
    square.addEventListener("mouseover", function () {
      square.style.backgroundColor = "#000000";
    });
  })
}); 
