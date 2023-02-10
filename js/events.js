// <button onclick="makeRed()">make red</button>
// using function
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// using function as function name;
const makePurpleButton = document.getElementById("make-purple");
makePurpleButton.onclick = makePurple;
function makePurple() {
  document.body.style.backgroundColor = "purple";
}

//  using function directly
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = function makeBlue() {
  document.body.style.backgroundColor = "blue";
};

// using addEventListener();
const makePinkButton = document.getElementById("make-pink");
makePinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

// using function() directly into addEventListener()
const makeGreenButton = document.getElementById("make-green");
makeGreenButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
});

// using directly getElementById().addEventListener()

document.getElementById("make-goldenrod").addEventListener("click", function(){
    document.body.style.backgroundColor = "goldenrod";
  });
