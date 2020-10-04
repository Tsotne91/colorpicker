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

let colorSquare =  document.getElementsByClassName("colorSquare");
let selectedSquare = document.getElementsByClassName("selected")[0];


for (let i=0; i<colorSquare.length; i++){
	function copyColor () {
		let cssprop = window.getComputedStyle(colorSquare[i], null).getPropertyValue("background-color");
		selectedSquare.style.backgroundColor = cssprop;
	}
	colorSquare[i].addEventListener("click", copyColor);
}