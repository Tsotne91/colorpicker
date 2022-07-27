let counter = 0;
const addButtons = document.getElementsByClassName("add");
const colorSquares = document.getElementsByClassName("colorSquare");
const selectedSquare = document.getElementsByClassName("selected")[0];

const addFigure = (shape) => {
    if (counter < 49) {
        let newFigure = document.createElement("div");
        newFigure.classList.add(shape);
        document.getElementById("container").appendChild(newFigure);
        newFigure.addEventListener("click",
                event => event.target.style.backgroundColor = selectedSquare.style.backgroundColor
        )
    }
	else {
		for (const button of addButtons){
			button.style.disabled = true;
            button.style.backgroundColor = "grey";
		}
		alert("no more shapes can be added");
	}
}

function addSquare() {
    counter++;
    addFigure("createdSquare");
    console.log(counter);
}

function addCircle() {
    counter++;
    addFigure("createdCircle");
    console.log(counter);
}

document.getElementById("addSquare").addEventListener("click", addSquare);
document.getElementById("addCircle").addEventListener("click", addCircle);

function copyColor(e) {
    selectedSquare.style.backgroundColor = window.getComputedStyle(e.target, null).getPropertyValue("background-color");
}

for (const colorSquare of colorSquares){
    colorSquare.addEventListener("click", copyColor);
}

