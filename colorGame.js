var rgbHolder = document.getElementById("rgbHolder");
var h1 = document.querySelector("h1");
var message = document.querySelector("#result");
var startButton = document.getElementById("start");
var playAgainButton = document.querySelector("#playAgain");
var newColorButton = document.getElementById("newColor");
var easyBtn = document.getElementById("easy");
var hardBtn = document.getElementById("hard");
var ul = document.querySelector("ul");
var mode;

startButton.addEventListener("click", function () {
    mode = 'easy'
    easyBtn.style.display = "inline";
    hardBtn.style.display = "inline";
    setUpSquares(mode)
    this.style.display = "none";
    newColorButton.style.display = "inline"
    easyBtn.classList.add("selected");
});

newColorButton.addEventListener("click", function () {
    setUpSquares(mode);
    message.textContent = "";
});

playAgainButton.addEventListener("click", function () {
    message.textContent = "";
    setUpSquares(mode);
    this.style.display = "none";
    message.style.display = "inline";
    newColorButton.style.display = "inline"
    h1.style.backgroundColor = "rgb(78, 142, 161)";
});
hardBtn.addEventListener("click", function () {
    mode = "hard";
    this.classList.add("selected");
    easyBtn.classList.remove("selected");
    reset();
});

easyBtn.addEventListener("click", function () {
    mode = "easy";
    hardBtn.classList.remove("selected");
    this.classList.add("selected");
    reset();
});

function setUpSquares(mode) {
    ul.innerHTML = "";
    var numberOfSquares = mode === 'easy' ? 3 : 6
    var colors = generateRandomColors(numberOfSquares)
    for (var i = 0; i < numberOfSquares; i++) {
        var li = document.createElement("li");
        li.classList.add("square");
        li.style.backgroundColor = colors[i];
        ul.appendChild(li);
        var pickedColor = colors[Math.floor(Math.random() * colors.length)]
        rgbHolder.textContent = pickedColor;
        li.addEventListener("click", function () {
            var clicked = this.style.backgroundColor;
            if (clicked === pickedColor) {
                message.textContent = "Correct";
                playAgainButton.style.display = "inline";
                changeColor(pickedColor);
                newColorButton.style.display = "none";
                h1.style.backgroundColor = pickedColor;
            } else {
                message.textContent = "Try Again";
                this.style.backgroundColor = "rgb(43, 42, 42)";
            }
        });

    }
}
function reset() {
    message.textContent = "";
    setUpSquares(mode);
    h1.style.backgroundColor = "rgb(78, 142, 161)";
    newColorButton.style.display = "inline"
    playAgainButton.style.display = "none";
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function changeColor(pickedColor) {
    var squares = ul.children
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
    }

}
function init() {
    rgbHolder.textContent = "RGB(0, 0, 0)";
    easyBtn.style.display = "none";
    hardBtn.style.display = "none";
    newColorButton.style.display = "none"
    playAgainButton.style.display = "none";
}

init();