function addFigure (shape){
	let newFigure = document.createElement("div");
	newFigure.classList.add(shape);
	document.getElementById("container").appendChild(newFigure);
}
function addSquare (){
	addFigure("createdSquare");
}
function addCircle(){
	addFigure("createdCircle");
}
document.getElementById("addSquare").addEventListener("click", addSquare);
document.getElementById("addCircle").addEventListener("click", addCircle);

let colorSquare =  document.getElementById("red");
let selectedSquare = document.getElementsByClassName("selected").style.backgroundColor;

function copyColor () {
   let cssprop = window.getComputedStyle(colorSquare, null).getPropertyValue("background-color");
   selectedSquare = cssprop;
}

colorSquare.addEventListener("click", copyColor());