var todaysWord = pickRandomWord();
var letterIndex = 0;


function pickRandomWord() {
  let number = Math.floor(Math.random()*words.length);
  return words[number];
}

let row = document.createElement("div");
let rowname = `row0`;
row.setAttribute("id", rowname);
row.setAttribute("class", "row");
document.getElementById("guessgrid").appendChild(row);

for (let i = 0; i < 5;  i++) {
  let input = document.createElement("div");
  input.setAttribute("type", "text");
  input.setAttribute("id", `0${i}`);
  input.setAttribute("class", "letterbox");
  input.setAttribute("maxlength", 1);
  input.setAttribute("size", 1);
  document.getElementById(rowname).appendChild(input);
}

document.addEventListener('keydown', keyDown);

function keyDown(e) {
  let key = e.key;
  console.log(key)
  if (key.length === 1 && key.match(/[a-z]/i)) {
    document.getElementById(`0${letterIndex}`).innerHTML = key;
    letterIndex = letterIndex + 1;
  }
  else if (key === "Backspace" && letterIndex > 0) {
    letterIndex = letterIndex - 1;
    document.getElementById(`0${letterIndex}`).innerHTML = "";
  }
  else if (key === "Enter" && letterIndex === 5) {
    checkWord();
  }
}

function checkWord() {
  let guess = "";
  for (let i = 0; i < 5; i++) {
    guess = guess + document.getElementById(`0${i}`).innerHTML;
  }
  if (guess === todaysWord) {
    alert("You win!");
  }
  else {
    alert("You lose!");
  }
}