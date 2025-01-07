const container= document.querySelector(".container");

for (let i=0;i<256;i++){
  const squares= document.createElement("div"); 
  squares.classList.add("square");
  container.appendChild(squares);


}
draw(); 

function promptMe(){
  var pixel=prompt("Enter Length:");
  const squares = document.querySelectorAll(".square"); // Static NodeList
  squares.forEach((square) => {
    square.remove(); // Remove the element entirely
  });
  console.log("reached");

  //adding new squares
  const container= document.querySelector(".container");
  for (let i=0;i<(pixel*pixel);i++){
    const squares= document.createElement("div"); 
    squares.className="square";
    console.log("reached");
    container.appendChild(squares);
  }

  const newdivs = document.querySelectorAll(".square");
  var length=500/pixel;
  newdivs.forEach((square)=> {
    square.style.width=`${length}px`;
    square.style.height=`${length}px`;
  });

  draw();
}


function draw(){
  const divs = document.querySelectorAll(".square");
  var colorArray = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF"
  ];

  divs.forEach((square) => {
  square.opacityIncrement = 0.1;
  square.addEventListener("mouseover", function () {
    // Use the custom property to track the opacity increment
    ;
    square.style.opacity = 0.1+square.opacityIncrement;

    // Increment the opacity increment for this square
    square.opacityIncrement += 0.1;
  });

  square.colorset=false;

  square.addEventListener("mouseover",function(){

    if (square.colorset==false){
      square.style.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)];
      square.colorset=true;
    }

  });
  })
}
