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


function copyColor (e) {
	selectedSquare.style.backgroundColor = window.getComputedStyle(e.target, null).getPropertyValue("background-color");
}
for (let i=0; i<colorSquare.length; i++){
	colorSquare[i].addEventListener("click", copyColor);
}

let createdDivs = document.getElementById("container").children;

function applyColor (event){
	event.target.style.backgroundColor = selectedSquare.style.backgroundColor;
	console.log(event.target);
}

	for (let div of createdDivs){
		div.addEventListener("click", applyColor);

	}

