var todaysWord = pickRandomWord();
var letterIndex = 0;
var guessIndex = 0;

function pickRandomWord() {
  let number = Math.floor(Math.random()*words.length);
  return words[number];
}

for (let j = 0; j < 6; j++) {
  let row = document.createElement("div");
  let rowname = `row${j}`;
  row.setAttribute("id", rowname);
  row.setAttribute("class", "row");
  document.getElementById("guessgrid").appendChild(row);

  for (let i = 0; i < 5;  i++) {
    let input = document.createElement("div");
    input.setAttribute("type", "text");
    input.setAttribute("id", `${j}${i}`);
    input.setAttribute("class", "letterbox");
    input.setAttribute("maxlength", 1);
    input.setAttribute("size", 1);
    document.getElementById(rowname).appendChild(input);
  }
}
document.addEventListener('keydown', keyDown);

function keyDown(e) {
  let key = e.key;
  console.log(key)
  if (key.length === 1 && key.match(/[a-z]/i)) {
    document.getElementById(`${guessIndex}${letterIndex}`).innerHTML = key;
    letterIndex = letterIndex + 1;
  }
  else if (key === "Backspace" && letterIndex > 0) {
    letterIndex = letterIndex - 1;
    document.getElementById(`${guessIndex}${letterIndex}`).innerHTML = "";
  }
  else if (key === "Enter" && letterIndex === 5) {
    checkWord();
  }
}

function checkWord() {
  let guess = "";
  for (let i = 0; i < 5; i++) {
    guess = guess + document.getElementById(`${guessIndex}${i}`).innerHTML;
  }
  if (! (words.includes(guess) || (weird.includes(guess)))) {
    alert("that's not a word")
  }
  else {
    giveFeedback(guess);
    guessIndex = guessIndex + 1;
    letterIndex = 0;
  }
}

function giveFeedback(guess) {
  for (let i = 0; i < 5; i++) {
    if (!todaysWord.includes(guess.charAt(i))) { // if the letter isn't there at all
      document.getElementById(`${guessIndex}${i}`).style.backgroundColor = "darkgray";
    }
    else if (todaysWord.charAt(i) === guess.charAt(i)) {// it's the right letter, turn it green)
      document.getElementById(`${guessIndex}${i}`).style.backgroundColor = "green";
    }
    else if (todaysWord.includes(guess.charAt(i))){
      document.getElementById(`${guessIndex}${i}`).style.backgroundColor = "yellow";
    }
  }

  
}